import React, { useState, useEffect } from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import link from '../../assets/PYTHON(LIBRARIES) CERTIFICATE.pdf'
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import img from '../../assets/microsoft.png'

function Certifications() {
  const [certifications, setCertifications] = useState([])
  const [isPopUp, setIsPopUp] = useState(false);
  const [pdfPath, setPdfPath] = useState('')

  const data = useSelector((state)=>state.data.data)
  const history = useNavigate()
  useEffect(()=>{
    console.log(img)
  })

  useEffect(() => {
    if (sessionStorage.getItem('reloaded')) {
      history('/')
      sessionStorage.removeItem('reloaded');
    }else if (data){
      setCertifications(data.certifications);
    } 
  }, []);

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('reloaded', true);
  });

  const renderImage = imageData => {
    const arrayBufferView = new Uint8Array(imageData);
    const blob = new Blob([arrayBufferView], { type: 'image/jpeg' }); // Adjust the type based on your image format
    const imageUrl = URL.createObjectURL(blob);

    return <img src={imageUrl} alt="Certification" style={{ maxWidth: '100px', maxHeight: '100px' }} />;
  };

  const showPopup = (pdf_path) => {
    console.log(link)
    setPdfPath(pdf_path)
    setIsPopUp(!isPopUp)

  }
  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(100%) scale(0)",
    },
    to: {
      opacity: isPopUp ? 1 : 0,
      transform: `translateX(${isPopUp ? 0 : 100}%) scale(${isPopUp ? 1 : 0
        })`,
    },
  });

  const isMobileView = useSelector((state) => state.mobileView.isMobileView);

  return (
    <>
    <Navbar />
    {certifications.length > 0 ? <>
      
      {isPopUp && (
        <div className={isMobileView ? "mobile-certificate-popup-container" : "certificate-popup-container"} onClick={() => setIsPopUp(false)}>
          <animated.div className={isMobileView ? "mobile-certificate-popup" : "certificate-popup"} onClick={(event) => event.stopPropagation()} style={{ ...springProps }}>

            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
              <div style={{ transform:isMobileView ? 'rotate(90deg)': '', width: '100%', height: isMobileView ? 'fit-content' : '100%' }}>
                <Viewer fileUrl={pdfPath} defaultScale={isMobileView ? 0.45 : 0.7} />
              </div>
            </Worker> 
          </animated.div>
        </div>
      )}
      <div className={isMobileView ? "mobile-certifications-container" : "certifications-container"}>
        <div className={isMobileView ? "mobile-certifications-content" : "certifications-content"}>
          {certifications && certifications.length > 0 ?
            certifications.map(certification => (
              <div key={certification._id} className={isMobileView ? 'mobile-certificate-div' : 'certificate-div'} onClick={() => showPopup(certification.path)}>
                <div className={isMobileView ? "mobile-certificate-div-img" : "certificate-div-img"}>
                  {certification.img_path ? <img src={certification.img_path} alt="" /> : <></> }
                </div>
                <div className={isMobileView ? "mobile-certificate-div-details" : "certificate-div-details"}>
                  <h4>{certification.cert_name}</h4>
                  <h4>{certification.org_name}</h4>
                  <p>Issue Date:{certification.issue_date}</p>
                  <p>Expire Date:{certification.expire_date}</p>
                  <p>Credential ID : {certification.credential_id}</p>
                </div>
              </div>
            ))
            : <></>}
        </div>
      </div>
      </> 
      : <></>}
    </>

  )
}

export default Certifications
