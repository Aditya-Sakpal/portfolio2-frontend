import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import './index.css';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Experience() {
  const isMobileView = useSelector((state) => state.mobileView.isMobileView);
  const [experience, setExperience] = useState([])

  const data = useSelector((state) => state.data.data)
  const history = useNavigate()
  useEffect(() => {
    const storedDataString = localStorage.getItem('data');
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      setExperience(storedData.experience);
    }else{
      history('/')
    }
  }, []);

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('reloaded', true);
  });



  const state = {
    series: [{
      name: "Interships",
      data: [0, 0, 0, 0, 0, 9000, 9000, 10000, 10000, 10000, 11000, 11000]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#1c1d20'],
        width: 2, // Set the initial width of the stroke
        dashArray: 0, // Set the initial dash array
        lineCap: 'round', // Set the line cap style
      },
      title: {
        text: 'Salaries at Companies in 2023',
        align: 'left',
        style: {
          color: "white"
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const month = w.globals.categoryLabels[dataPointIndex];
          const exp = experience.find(exp => exp.start_month === month);

          var workDone = exp.work_done;
          var len = workDone.length;
          var partLength = isMobileView ? Math.ceil(len / 10) : Math.ceil(len / 6);

          var parts = Array.from({ length: isMobileView ? 10 : 6 }, (_, i) =>
            workDone.substring(i * partLength, (i + 1) * partLength)
          );

          return (
            '<div class="custom-tooltip">' +
            `<div class="custom-tooltip-header"><p class="tooltip-label">${exp.role} at ${exp.company}</p></div>` +
            '<div class="work">'  +
            parts.map((part, index) => (
              `<p key=${index}>${part.trim()}</p>`
            )).join('') +
            '</div>' +
            '</div>'
          );
        },
      },
    },
  };


  return (
    <>
      <Navbar />
      {!isMobileView ? (<>
        <div className="experience-container">
          <div className="experience-content" id="experience-content">
            <div className="chart" id="chart">
              <ReactApexChart options={state.options} series={state.series} type="line" height="100%" width="400%" />
            </div>
          </div>
        </div>
      </>) : (<>
        <div className="mobile-experience-container">
          <div className="mobile-experience-content" id="mobile-experience-content">
            <div className="mobile-chart" id="mobile-chart">
              <ReactApexChart options={state.options} series={state.series} type="line" height="90%" width="120%" style={{ borderRadius: "25px" }} />
            </div>
          </div>
        </div>
      </>)}
    </>
  );
}

export default Experience;
