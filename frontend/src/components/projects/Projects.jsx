import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import img from '../../assets/aitalkbot.png'


function Projects() {
  const [projects, setProjects] = useState([])
  const data = useSelector((state) => state.data.data)
  const history = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('reloaded')) {
      history('/')
      sessionStorage.removeItem('reloaded');
    }else if (data){
      setProjects(data.projects);
    } 
  }, []);
  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('reloaded', true);
  });



  const renderImage = imageData => {
    const arrayBufferView = new Uint8Array(imageData);
    const blob = new Blob([arrayBufferView], { type: 'image/jpeg' }); // Adjust the type based on your image format
    const imageUrl = URL.createObjectURL(blob);

    return <img src={imageUrl} alt="Project" style={{ width: '100%', height: '100%' }} />;
  };

  const handleUrlClick = (url) => {
    console.log("called", url)
    window.open(url, '_blank');
  }

  const isMobileView = useSelector((state) => state.mobileView.isMobileView);

  return (
    <>
      <Navbar />
      {projects.length > 0 ? <>
        {!isMobileView ?
          <div className="project-container">
            <div className="project-content">
              {projects && projects.length > 0 ?
                projects.map(project => (
                  <div key={project._id} className='project-div' onClick={() => handleUrlClick(project.url)}>
                    <div className="project-img">
                      {project.img_path ? <img src={project.img_path} alt="" /> : <></> }
                    </div>
                    <div className="project-div-details">
                      <h3>{project.proj_name}</h3>
                      <h4>Tech Stack : {project.stack}</h4>
                      <p>Description : {project.description}</p>
                    </div>
                  </div>
                ))
                : <></>}
            </div>
          </div>
          : <>
            <div className="mobile-projects-container">
              {projects && projects.length > 0 ?
                projects.map(project => (
                  <div key={project._id} className='mobile-project-div' onClick={() => handleUrlClick(project.url)}>
                    <div className="mobile-project-div-img">
                      {project.img_path ? <img src={project.img_path} alt="" /> : <></>}
                    </div>
                    <div className="mobile-project-div-details">
                      <h3>{project.proj_name}</h3>
                      <h4>Tech Stack : {project.stack}</h4>
                      <p>Description : {project.description}</p>
                    </div>
                  </div>
                ))
                : <></>}
            </div>
          </>}
      </>
        : <></>}
    </>
  )
}

export default Projects
