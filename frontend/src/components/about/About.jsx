import React ,{useEffect}from "react";
import "./index.css";
import Navbar from "../navbar/Navbar";
import img from "../../assets/elon2.jpg";
import { useSelector } from "react-redux";


function About() {

  const isMobileView = useSelector((state) => state.mobileView.isMobileView);
  return (
    <>
      <Navbar />
      {!isMobileView ? (
        <div className="about-container">
          <div className="about-card">
            <div className="about-card-left">
              <div className="about-card-img" id="imageSection">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="about-card-right">
              <div className="about-card-right-header" id="about_headings">
                <h1>ABOUT ME</h1>
                <h2>
                  Machine Learning Engineer / MERN Stack Developer /Azure
                  Developer
                </h2>
              </div>
              <div className="about-card-right-header-divider"></div>
              <div className="about-card-right-body">
                <p id="about_info1">
                  I am pursuing a career as a Machine Learning Engineer and a
                  MERN Stack Developer because I believe that in today's rapidly
                  evolving technological landscape, versatility is key. With the
                  rise of AI-powered virtual assistants like ChatGPT, the
                  boundaries between fields are blurring, and individuals who
                  can bridge these gaps hold a unique advantage.
                </p>
                <p id="about_info2">
                  My passion for both machine learning and web development stems
                  from the desire to craft intelligent and user-friendly
                  applications that can harness the power of AI to enhance user
                  experiences. Additionally, my growing interest in cloud
                  computing, particularly in Microsoft Azure, further expands my
                  skill set. As I navigate the intersection of these fields, I
                  aim to contribute to innovative solutions that push the
                  boundaries of what technology can achieve while ensuring my
                  value remains high in an ever-changing industry.
                </p>
                <div className="about-card-right-body-divider"></div>
                <div className="personalInfo" id="personalInfo">
                  <div>
                    <span>Name :</span>
                    <span>Aditya Ashish Sakpal</span>
                  </div>
                  <div>
                    <span>Age :</span>
                    <span>20</span>
                  </div>
                  <div>
                    <span>Height :</span>
                    <span>5'9 (i.e 6 feet)</span>
                  </div>
                  <div>
                    <span>Weight :</span>
                    <span>64 kg</span>
                  </div>
                  <div>
                    <span>Blood Group :</span>
                    <span>O+</span>
                  </div>
                  <div>
                    <span>BMI :</span>
                    <span>23.9</span>
                  </div>
                </div>
                <div className="about-card-right-body-divider"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-about-container">
          <div className="mobile-about-card">
            <div className="mobile-about-card-top">
              <div className="mobile-img-section" id="mobile-img-section">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="mobile-about-card-bottom">
              <div className="mobile-about-card-bottom-header" id="mobile-about-card-bottom-header">
                <h2>ABOUT ME</h2>
              </div>
              <div className="mobile-about-card-bottom-body">
                <div className="mobile-about-card-bottom-body-divider"></div>
                <p id="mobile-about-info1">
                  I am pursuing a career as a Machine Learning Engineer and a
                  MERN Stack Developer because I believe that in today's rapidly
                  evolving technological landscape, versatility is key. With the
                  rise of AI-powered virtual assistants like ChatGPT, the
                  boundaries between fields are blurring, and individuals who
                  can bridge these gaps hold a unique advantage.
                </p>
                <p id="mobile-about-info2">
                  My passion for both machine learning and web development stems
                  from the desire to craft intelligent and user-friendly
                  applications that can harness the power of AI to enhance user
                  experiences. Additionally, my growing interest in cloud
                  computing, particularly in Microsoft Azure, further expands my
                  skill set. As I navigate the intersection of these fields, I
                  aim to contribute to innovative solutions that push the
                  boundaries of what technology can achieve while ensuring my
                  value remains high in an ever-changing industry.
                </p>
                <div className="mobile-about-card-bottom-body-divider"></div>
              </div>
              <div className="mobile-about-card-bottom-footer" id="mobile-about-card-bottom-footer">
              <div>
                    <span>Name :</span>
                    <span>Aditya Ashish Sakpal</span>
                  </div>
                  <div>
                    <span>Age :</span>
                    <span>20</span>
                  </div>
                  <div>
                    <span>Height :</span>
                    <span>5'9 (i.e 6 feet)</span>
                  </div>
                  <div>
                    <span>Weight :</span>
                    <span>64 kg</span>
                  </div>
                  <div>
                    <span>Blood Group :</span>
                    <span>O+</span>
                  </div>
                  <div>
                    <span>BMI :</span>
                    <span>23.9</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
