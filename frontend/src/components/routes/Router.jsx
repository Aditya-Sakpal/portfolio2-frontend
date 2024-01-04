import React from 'react'
import { Route,Routes } from 'react-router-dom';
import About from '../about/About';
import Certifications from '../certifications/Certifications';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Feedback from '../feedback/Feedback';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Chatbot from '../chatbot/Chatbot';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Feats from '../feats/Feats';
function Router() {
  return (
  
    <Routes>
    <Route exact path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/feedback' Component={Feedback}/>
      <Route path='/certifications' Component={Certifications}/>
      <Route path='/education' Component={Education}/>      
      <Route path='/experience' Component={Experience}/>
      <Route path='/projects' Component={Projects}/>
      <Route path='/skills' Component={Skills}/>
      <Route path='/chat' Component={Chatbot}/>
      <Route path='/feats' Component={Feats}/>    
      </Routes>
  
  )
}

export default Router