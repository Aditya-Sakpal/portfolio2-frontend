import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChatIcon from '@mui/icons-material/Chat';
import PublicIcon from '@mui/icons-material/Public';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useSelector } from "react-redux";
import {
  mobileHomePageAnimation,
  mobileAboutPageAnimation,
  mobileSkillsPageAnimation,
  mobileChabotPageAnimation,
  mobileCertificationsPageAnimation,
  mobileProjectsPageAnimation,
  mobileExperiencePageAnimation,
  mobileEducationPageAnimation,
  mobileContactPageAnimation,
  mobileFeedbackPageAnimation,
  mobileFeatsPageAnimation,
  pcHomePageAnimation,
  pcSkillsPageAnimation,
  pcAboutPageAnimation,
  pcCertificationsPageAnimation,
  pcProjectsPageAnimation,
  pcExperiencePageAnimation,
  pcEducationPageAnimation,
  pcFeedbackPageAnimation,
  pcContactPageAnimation
} from "../animations/animations.jsx";


function Navbar() {
  const isMobileView = useSelector((state) => state.mobileView.isMobileView);
  useEffect(()=>{
    console.log("changed")
  },[])
  function handleLinkClick(url){
    window.open(url, '_blank');
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-structure" id="nav-structure">
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={!isMobileView ? ()=>pcHomePageAnimation(0) : ()=>mobileHomePageAnimation(0)}>{isMobileView ? <HomeIcon/> : ""}Home</Link>
              </li>

              <li>  
                <Link to="/about" onClick={!isMobileView ? ()=>pcAboutPageAnimation(0) : ()=>mobileAboutPageAnimation(0)}>{isMobileView ? <InfoIcon/> : ""}About</Link>
              </li>
              {!isMobileView ? <li>
                <Link to="/skills" onClick={()=>pcSkillsPageAnimation(0)}>
                  {isMobileView ? <FolderSpecialIcon /> : ""}Skills
                </Link>
              </li>:<></> }
              
              <li>
                <Link to="/projects" onClick={!isMobileView ? ()=>pcProjectsPageAnimation(10) : mobileProjectsPageAnimation(10)}>
                  {isMobileView ? <FolderSpecialIcon /> : ""}Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" onClick={!isMobileView ? ()=>pcExperiencePageAnimation(0) : mobileExperiencePageAnimation(0)}>
                  {isMobileView ? <EngineeringIcon /> : ""}Experience
                </Link>
              </li>

              <li>
                <Link to="/education" onClick={!isMobileView ? ()=>pcEducationPageAnimation(0) : mobileEducationPageAnimation(0)}>
                  {isMobileView ? <SchoolIcon /> : ""}Education
                </Link>
              </li>
              <li>
                <Link to="/certifications" onClick={!isMobileView ? ()=>pcCertificationsPageAnimation(10) : mobileCertificationsPageAnimation(10)}>
                  {isMobileView ? <VerifiedUserIcon /> : ""}Certifications
                </Link>
              </li>
              {!isMobileView ? (
                <>
                  <li>
                    <Link to="/feedback" onClick={()=>pcFeedbackPageAnimation(10)}>
                      {isMobileView ? <FeedbackIcon /> : ""}Feedback
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={()=>pcContactPageAnimation(10)}>
                      {isMobileView ? <PhoneIcon /> : ""}Contact
                    </Link>
                  </li>
                  <li>
                    <div className="giga_coder" onClick={()=>handleLinkClick("https://www.linkedin.com/in/gigacoder/")}>
                      <a>
                        <span>©</span>
                        <span> GIGA-CODER</span>
                      </a>
                    </div>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </nav>
        </div>
      </div>
      
      {isMobileView ? (
        <div className="mobile-special-nav-container">
          <div className="mobile-special-nav-structure">
            <nav id="mobile-special-nav-structure-nav">
              <ul>
                <li>
                  <Link to="/feedback" onClick={()=>mobileFeedbackPageAnimation(10)}>
                    {isMobileView ? <FeedbackIcon /> : ""}Feedback
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={()=> mobileContactPageAnimation(10)}>
                    {isMobileView ? <PhoneIcon /> : ""}Contact
                  </Link>
                </li>
                <li>
                  <Link to="/chat" onClick={()=>mobileChabotPageAnimation(0)}>
                    {isMobileView ? <ChatIcon /> : ""}Chat
                  </Link>
                </li>
                <li>
                  <Link to='/skills' onClick={()=>mobileSkillsPageAnimation(0)}>
                    {isMobileView ? <TrendingUpIcon /> : ""}Skills
                  </Link>
                </li>
                <li>
                  <Link to='/feats' onClick={()=>mobileFeatsPageAnimation(0)}>
                  {isMobileView ? <WorkspacePremiumIcon /> : ""}Feats
                  </Link>
                </li>
                
                <li>
                    <div className="giga_coder" onClick={()=>handleLinkClick("https://www.linkedin.com/in/gigacoder/")} >
                      <a>
                        <span>©</span>
                        <span> GIGACODER</span>
                      </a>
                    </div>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
