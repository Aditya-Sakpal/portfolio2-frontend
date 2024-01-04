import React, { useState, useEffect } from 'react'
import './Feedback.css'
import Navbar from '../navbar/Navbar'
import ReactApexChart from 'react-apexcharts';
import axios from "axios"
import { useSelector } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/actions/dataAction.jsx";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const history = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('reloaded')) {
      history('/')
      sessionStorage.removeItem('reloaded');
    }else if (data){
      setFeeds(data.feedbacks.reverse());
      setLabelCount(countLabelOccurrences(feeds))
    } 
  }, []);

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('reloaded', true);
  });

  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [feeds, setFeeds] = useState([])

  const [labelCount, setLabelCount] = useState({})
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data)

  function countLabelOccurrences(feedbackData) {
    const labelCounts = {
      positive: 0,
      neutral: 0, // Assuming there's a neutral label
      negative: 0,
    };

    feedbackData.forEach((feedback) => {
      const label = feedback.label.toLowerCase();
      if (labelCounts[label] !== undefined) {
        labelCounts[label]++;
      } else {
        console.log(`Unknown label encountered: ${label}`);
      }
    });
    // console.log(labelCounts)
    return labelCounts;
  }

  const [chartState, setChartState] = useState({
    series: [labelCount['positive'], labelCount['negative'], labelCount['neutral']],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Positive', 'Negative', 'Neutral'],
      colors: ['#999D9E', '#1c1d21', '#ffff'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  })

  useEffect(() => {
    if (feeds.length > 0) {
      const updatedLabelCount = countLabelOccurrences(feeds);
      setLabelCount(updatedLabelCount);

      setChartState({
        series: [updatedLabelCount['positive'], updatedLabelCount['negative'], updatedLabelCount['neutral']],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Positive', 'Negative', 'Neutral'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      });
    }
  }, [feeds]);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()
    try {
      setName('')
      setFeedback('')
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      const response = await axios.post("http://localhost:4000/feedbacks", { name, feedback })
      setFeeds(response.data.feedbacks.reverse())

      dispatch(fetchData())
    } catch (e) {
      throw e.message
    }
  }


  const isMobileView = useSelector((state) => state.mobileView.isMobileView);

  return (
    <>
      <Navbar />
      {!isMobileView ? <>
        <div className="feedback-container">
          <div className="feedback-content">
            <div className="feedback-content-left">
              <div className="chart-container" id="chart-container">
                <div id="chart" className="chart" >
                  <ReactApexChart options={chartState.options} series={chartState.series} type="pie" width={"150%"} height={"100%"} />
                </div>
              </div>

              <div className="feedback-form" id="feedback-form">
                <form action="" onSubmit={handleFeedbackSubmit}>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback"
                    required
                  />
                  <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
                  <input type="submit" />
                </form>
              </div>
            </div>
            <div className="feedback-content-right">
              <div className="feedback-display-area" id="feedback-display-area">
                {feeds && feeds.length > 0 ?
                  feeds.map(feed => (
                    <div key={feed._id} className='feedback'>
                      <div className="feedback-img">
                        <PersonIcon sx={{ color: "white", "backgroundColor": "#1c1d20" }} />
                      </div>
                      <div className="feedback-details">
                        <h5>{feed.name}</h5>
                        <p>{feed.feedback}</p>
                      </div>
                    </div>
                  ))
                  : <></>}
              </div>
            </div>

          </div>
        </div>
      </> : <>
        <div className="mobile-feedback-container">
          <div className="mobile-feedback-top">
            <div className="mobile-feedback-top-left" id="mobile-feedback-top-left">
              {feeds && feeds.length > 0 ?
                feeds.map(feed => (
                  <div key={feed._id} className='feedback'>
                    <div className="feedback-img">
                      <PersonIcon sx={{ color: "white", "backgroundColor": "#1c1d20", width: "100%", height: "40%" }} />
                    </div>
                    <div className="feedback-details">
                      <h5>{feed.name}</h5>
                      <p>{feed.feedback}</p>
                    </div>
                  </div>
                ))
                : <></>}
            </div>
            <div className="mobile-feedback-top-right" id="mobile-feedback-top-right">
              <div id="chart" className="chart" >
                <ReactApexChart options={chartState.options} series={chartState.series} type="pie" width={"100%"} height={"100%"} />
              </div>
            </div>

          </div>
          <div className="mobile-feedback-bottom">
            <form action="" onSubmit={handleFeedbackSubmit} id="mobile-feedback-form">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback"
                required
              />
              <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="submit" />
            </form>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default Feedback