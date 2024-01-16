import React, { useState, useEffect } from "react";
import "./index.css";
import earthgif from "../../assets/earth.gif";
import chatgif from "../../assets/chat.gif";
import elon from "../../assets/aditya-avatar-removebg.png";
import Navbar from "../navbar/Navbar";
import resume from "../../assets/New_Resume.pdf";
import Chatbot from "../chatbot/Chatbot";
import { useDispatch, useSelector } from 'react-redux';
import { showChatbot, hideChatbot } from "../../store/actions/botActions";



function Home() {


  const isMobileView = useSelector((state) => state.mobileView.isMobileView);

  const [personCoords, setPersonCoords] = useState([]);
  const [visible, setVisible] = useState(false);
  const [distance, setDistance] = useState(0);

  const calcDistance = () => {
    const rad = (x) => (x * Math.PI) / 180;

    const R = 6371;

    const dLat = rad(19.0748 - personCoords[0]);
    const dLon = rad(72.8856 - personCoords[1]);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(19.0748)) *
      Math.cos(rad(personCoords[0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    setDistance(distance.toFixed(2));
    setVisible(!visible);
    console.log(visible);
  };

  useEffect(() => {
    calcDistance();
  }, [personCoords]);

  const display_location_window = () => {
    console.log("called");

    const success = (position) => {
      setPersonCoords([
        position["coords"]["latitude"],
        position["coords"]["longitude"],
      ]);
    };

    const error = () => { };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.download = "sample.pdf";
    link.click();
  };

  // const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const dispatch = useDispatch();
  const isChatbotVisible = useSelector((state) => state.chatbot.isChatbotVisible)
  const handleClick = () => {
    if (isChatbotVisible) {
      dispatch(hideChatbot());
    } else {
      dispatch(showChatbot());
    }
  };


  return (
    <>
      <Navbar />
      {!isMobileView ? (
        <>
          <div className="home-container">
            <div className="home-content">
              <div className="home-content-left">
                <div className="intro-container">
                  <div className="intro_main" id="intro_main">
                    <div className="intro_details">
                      <span>Hello,it's me</span>
                      <span className="name"> Aditya.Ashish.Sakpal</span>

                      <span>I'm a Machine Learning Engineer/</span>
                      <span>MERN Stack Developer/</span>
                      <span>Azure Developer</span>
                    </div>
                  </div>
                </div>
                <div className="location-container" id="location-container">
                  <div className="click-icon-msg">
                    <p>Click on the icon to evaluate the distance</p>
                  </div>
                  <div className="semicircular-div">
                    <div className="inner-semicircular-div">
                      <img
                        src={earthgif}
                        alt=""
                        onClick={display_location_window}
                      />
                    </div>
                  </div>
                </div>
                <div className={`distance_div ${!visible ? "visible" : ""}`}>
                  <span>You are approximately</span>
                  <span>{distance} km away from me</span>
                </div>
                <div className="upload-resume" id="upload-resume">
                  <button onClick={handleDownload}>Download Resume</button>
                </div>
              </div>
              <div className="home-content-right">
                <img src={elon} alt="" className="elon-pic" id="face_img" />
                {isChatbotVisible ? <Chatbot /> : <></>}
                <div className="chatbot-container" id="chatbot-container">
                  <div className="chat-semicircular-div">
                    <div className="chat-inner-semicircular-div">
                      <img
                        src={chatgif}
                        alt=""
                        onClick={handleClick}
                      // onClick={() => setIsChatBotVisible(true)}
                      />
                    </div>
                  </div>
                  <div className="click-icon-chat">
                    <p>Ask anything about Aditya...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Footer/> */}
          </div>

        </>
      ) : (
        <>
          <div className="mobile-home-container">
            <div className="mobile-intro-div" id="mobile-intro-div">
              <div className="mobile-intro-div-text">
                <div className="mobile-intro-div-name">
                  <span>Hello,it's me</span>
                  <span className="name"> Aditya.Ashish.Sakpal</span>
                </div>
                <div className="mobile-intro-div-text-roles">
                  <span>I'm a MERN Stack Developer/</span>
                  <span>Machine Learning Engineer/</span>
                  <span>Azure Developer</span>
                </div>
                <div className="mobile-intro-welcome">
                <p>Welcome to my portfolio/techfolio! </p>
                <p> I'm thrilled to have you here , exploring my portfolio.</p>
                </div>
              </div>
            </div>
            <div className="mobile-welcome-msg" id="mobile-welcome-msg">
            <p>Whether you're a potential collaborator, a fellow creator, or just someone with a curious mind, I'm delighted to share my passion and work with you</p>
            <p>Grab a virtual seat and browse through my portfolio.</p>
              <p>Explore my skills, projects, and experiences to get a glimpse of
                my professional journey</p>
            </div>
            <div className="mobile-download-resume" id="mobile-download-resume">
              <button onClick={handleDownload}>Download Resume</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
