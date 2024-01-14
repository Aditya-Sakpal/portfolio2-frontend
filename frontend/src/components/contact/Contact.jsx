import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'; 

function Contact() {
  const history = useNavigate()
  // useEffect(() => {
  //   if (sessionStorage.getItem('reloaded')) {
  //     history('/')
  //     sessionStorage.removeItem('reloaded');
  //   }
  // }, []);
  function handleLinkClick(url) {
    window.open(url, '_blank');
  }
  useEffect(() => {

    const handleBeforeUnload = (event) => {
      const confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
      event.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup: Remove the event listener when the component is unmounted
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [query, setQuery] = useState('')

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!emailRegex.test(email)) {
      // Email is not valid
      alert('Please enter a valid email address');
      return;
    } else {
      Swal.fire({
        title: "We have recorded your query!",
        text: "we will get back to you soon! thanks",
        // icon: "success",
        customClass: {
          container: 'sweetalert-custom-container',
          title: 'sweetalert-custom-title',
          content: 'sweetalert-custom-content',
          confirmButtonClass: 'sweetalert-custom-confirm-button',
        },
      });
      setEmail('')
      setName('')
      setQuery('')
    }

  }
  const isMobileView = useSelector((state) => state.mobileView.isMobileView);
  
  return (
    <>
      <Navbar />
      {!isMobileView ?
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-content-left">
              <div className="contact-content-left-form" id="contact-content-left-form">
                <form action="" onSubmit={handleFormSubmit}>
                  <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
                  <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="text" placeholder='Enter your query' value={query} onChange={(e) => setQuery(e.target.value)} required />
                  <input type="submit" value='Submit your query' />
                </form>
              </div>
            </div>
            <div className="contact-content-right">
              <div className="contact-content-right-container" id="contact-content-right-container">
                <div className="phone1">
                  <WhatsAppIcon sx={{ color: "white", marginRight: "5%" }} />
                  Phone No : +91 9136885664
                </div>
                <div className="phone2">
                  <PhoneIcon sx={{ color: "white", marginRight: "5%" }} />
                  Alternate Phone No : +91 8108359721
                </div>
                <div className="email1">
                  <EmailIcon sx={{ color: "white", marginRight: "5%" }} />
                  Email : aditya.sakpal2002@gmail.com
                </div>
                <div className="email2">
                  <EmailIcon sx={{ color: "white", marginRight: "5%" }} />
                  Alternate Email : aditya.as@somaiya.edu
                </div>
                <div className="other-social-media">
                  <InstagramIcon className='social-icon' sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.instagram.com/aditya_sakpal123/")} />
                  <GitHubIcon className='social-icon' sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://github.com/Aditya-Sakpal")} />
                  <LinkedInIcon className='social-icon' sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.linkedin.com/in/gigacoder/")} />
                  <TwitterIcon className='social-icon' sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://twitter.com/giga_coder")} />
                  <FacebookIcon className='social-icon' sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.facebook.com/aditya.sakpal.79677")} />
                </div>
              </div>
            </div>

          </div>
        </div>
        : <>
          <div className="mobile-contact-container">
            <div className="mobile-contact-details" id="mobile-contact-details">
              <div className="mobile-phone1">
                <WhatsAppIcon sx={{ color: "white", marginRight: "5%"}} />
                Phone No : +91 9136885664
              </div>
              <div className="mobile-phone2">
                <PhoneIcon sx={{ color: "white", marginRight: "5%" }} />
                Alternate Phone No : +91 8108359721
              </div>
              <div className="mobile-email1">
                <EmailIcon sx={{ color: "white", marginRight: "5%" }} />
                Email : aditya.sakpal2002@gmail.com
              </div>
              <div className="mobile-email2">
                <EmailIcon sx={{ color: "white", marginRight: "5%" }} />
                Alternate Email : aditya.as@somaiya.edu
              </div>
              <div className="mobile-other-social-media">
                <InstagramIcon sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.instagram.com/aditya_sakpal123/")} />
                <GitHubIcon sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://github.com/Aditya-Sakpal")} />
                <LinkedInIcon sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.linkedin.com/in/gigacoder/")} />
                <TwitterIcon sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://twitter.com/giga_coder")} />
                <FacebookIcon sx={{ color: "white", width: "20%", height: "40%" }} onClick={() => handleLinkClick("https://www.facebook.com/aditya.sakpal.79677")} />
              </div>
            </div>
            <div className="mobile-contact-form" id="mobile-contact-form">
            <form action="" onSubmit={handleFormSubmit}>
                  <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
                  <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="text" placeholder='Enter your query' value={query} onChange={(e) => setQuery(e.target.value)} required />
                  <input type="submit" value='Submit your query' />
                </form>
            </div>
          </div>
        </>}
    </>
  )
}

export default Contact
