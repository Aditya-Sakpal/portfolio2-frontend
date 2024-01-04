import React, { useEffect, useState } from "react";
import "./index.css";
import { preLoaderAnim } from "./index.jsx";
import { useDispatch } from "react-redux";
import {
  mobileViewDisabled,
  mobileViewEnabled,
} from "../../store/actions/mobileViewActions.jsx";

import { fetchData } from "../../store/actions/dataAction.jsx";

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
const quote_array = [
  "Coding like poetry should be short and concise. ― Santosh Kalwar",
  "It’s not a bug; it’s an undocumented feature. ― Mahatama Gandhi",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Of course, bad code can be cleaned up. But it’s very expensive. — Robert C. Martin",
  "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth",
  "Confusion is part of programming. ― Felienne Hermans",
  "No matter which field of work you want to go in, it is of great importance to learn at least one programming language. ― Ram Ray",
  "Software is like sex: it’s better when it’s free. – Linus Torvalds",
  "If we want users to like our software, we should design it to behave like a likable person.  – Alan Cooper",
  "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk",
  "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs",
  "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12. – Elon Musk",
  "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel",
  "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.  – Ellen Ullman",
  "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds",
  "I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck",
  "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. – John Romero",
  "Programming is learned by writing programs. ― Brian Kernighan",
  "Software comes from heaven when you have good hardware. – Ken Olsen",
];

function Preloader() {
  const dispatch = useDispatch();
  function checkMobileView() {
    if (window.innerWidth <= 768) {
      dispatch(mobileViewEnabled());
    } else {
      dispatch(mobileViewDisabled());
    }
  }
  window.addEventListener("load", checkMobileView);
  window.addEventListener("resize", checkMobileView);
  const [randomElement, setRandomElement] = useState(null);

  useEffect(() => {
    dispatch(fetchData())
    const randomIdx = Math.floor(Math.random() * quote_array.length);
    setRandomElement(quote_array[randomIdx]);
    preLoaderAnim();
    
    try {
      if (window.innerWidth <= 768) {
        if (window.location.pathname == "/") {
          mobileHomePageAnimation(3800);
        }else if(window.location.pathname == "/about") {
          mobileAboutPageAnimation(3800)
        }else if(window.location.pathname == "/skills"){
          mobileSkillsPageAnimation(3800)
        }else if(window.location.pathname == "/chat"){
          mobileChabotPageAnimation(3800)
        }else if(window.location.pathname == "/certification"){
          mobileCertificationsPageAnimation(3800)
        }else if(window.location.pathname == "/projects"){
          mobileProjectsPageAnimation(3800)
        }else if(window.location.pathname == "/education"){
          mobileEducationPageAnimation(3800)
        }else if(window.location.pathname == "/experience"){
          mobileExperiencePageAnimation(3800)
        }else if(window.location.pathname == "/feedback"){
          mobileFeedbackPageAnimation(3800)
        }else if(window.location.pathname == "/contact"){
          mobileContactPageAnimation(3800)
        }else if(window.location.pathname == "/feats"){
          mobileFeatsPageAnimation(3800)
        }
        
        
        
        
        
      } else {
        if (window.location.pathname == "/") {
          pcHomePageAnimation(2700);
        } else if (window.location.pathname == "/about") {
          pcAboutPageAnimation(2700);
        }else if(window.location.pathname == "/skills"){
          pcSkillsPageAnimation(2700)
        }else if(window.location.pathname == "/certifications"){
          pcCertificationsPageAnimation(2700)
        }else if(window.location.pathname == "/projects"){
          pcProjectsPageAnimation(2700)
        }
        else if(window.location.pathname == "/education"){
          pcEducationPageAnimation(2700)
        }
        else if(window.location.pathname == "/experience"){
          pcExperiencePageAnimation(2700)
        }
        else if(window.location.pathname == "/feedback"){
          pcFeedbackPageAnimation(2700)
        }
        else if(window.location.pathname == "/contact"){
          pcContactPageAnimation(2700)
        }
        
        
      }
    } catch (error) {
      throw error.message;
    }
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="texts-container">
          <span>{randomElement}</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
