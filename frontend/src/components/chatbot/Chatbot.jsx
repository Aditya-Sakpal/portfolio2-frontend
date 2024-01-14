import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { showChatbot, hideChatbot } from "../../store/actions/botActions";
import { useSpring, animated } from "react-spring";
import Navbar from "../navbar/Navbar";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios"
import Typed from 'typed.js';
const history = useNavigate()


function Chatbot() {
  const inputRef = useRef(null);
  const history = useNavigate()
    useEffect(() => {
    if (sessionStorage.getItem('reloaded')) {
      history('/')
      sessionStorage.removeItem('reloaded');
    }
  }, []);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([
    { isBot: true, msg: "Hello I'm Lisa Aditya's spokeperson , how may I help you ?" }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const isChatbotVisible = useSelector(
    (state) => state.chatbot.isChatbotVisible
  );
  const isMobileView = useSelector((state) => state.mobileView.isMobileView)
  console.log(isMobileView)
  const handleClick = () => {
    if (isChatbotVisible) {
      dispatch(hideChatbot());
    } else {
      dispatch(showChatbot());
    }
  };

  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(100%) scale(0)",
    },
    to: {
      opacity: isChatbotVisible ? 1 : 0,
      transform: `translateX(${isChatbotVisible ? 0 : 100}%) scale(${isChatbotVisible ? 1 : 0
        })`,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessages((prevMessages) => [
      ...prevMessages,
      { isBot: false, msg: currentMessage },
    ]);
    setCurrentMessage('Bot is typing ...')
    setIsInputDisabled(true)
    const response = await axios.post("https://portfolio2-backend-xi.vercel.app/chats", { query: currentMessage })
    console.log(response)
    if (response.data.output) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { isBot: true, msg: response.data.output },
      ]);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { isBot: true, msg: "I'm not trained to provide responses to such question , please ask questions related to Aditya's IT career" },
      ]);
    }
    setCurrentMessage('')
    setIsInputDisabled(false)
    inputRef.current.focus();
  }

  const chatContainerRef = useRef(null);
  const mobilechatContainerRef = useRef(null);

  useEffect(() => {
    if (!isMobileView) {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    } else {
      if (mobilechatContainerRef.current) {
        mobilechatContainerRef.current.scrollTop = mobilechatContainerRef.current.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <>

      {!isMobileView ? (
        <animated.div className="chatbot" style={{ ...springProps }}>
          <div className="chatbot-band">
            <form action="" onSubmit={handleSubmit}>
              <div className="chatbot-header">
                <div className="chatbot-header-ask-about-aditya">
                  <p>Ask about Aditya!</p>
                </div>
                <div className="bot-cancel-button" onClick={handleClick}>
                  <CancelIcon
                    sx={{
                      color: "white",
                      background: "transparent",
                      paddingTop: "1.5%",
                      position: "relative",
                      width: "90%",
                      height: "90%",
                    }}
                  />
                </div>
              </div>
              <div className="chatbot-divider"></div>
              <div className="chatbot-body" ref={chatContainerRef}>
                {messages.map((message, index) => (
                  <div key={index} className="message-div">
                    {message.isBot ?
                      <div className="bot-message">
                        {message.msg}
                      </div>
                      : <div className="user-message">
                        {message.msg}
                      </div>
                    }
                  </div>
                ))}
              </div>
              <div className="chatbot-footer">
                <div className="chatbot-divider"></div>
                <input
                  type="text"
                  placeholder="Enter your query and hit 'Enter'..."
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  value={currentMessage}
                  disabled={isInputDisabled}
                  ref={inputRef}
                />
              </div>
            </form>
          </div>
        </animated.div>
      ) : (
        <>
          <Navbar />
          <div className="mobile-chatbot-container">
            <div className="mobile-chatbot" id="mobile-chatbot">
              <div className="mobile-chabot-band">
                <div className="mobile-chabot-header">
                  <p>Ask anything about Aditya!</p>
                </div>
                <div className="mobile-chabot-body" ref={mobilechatContainerRef}>
                  {messages.map((message, index) => (
                    <div key={index} className="message-div">
                      {message.isBot ?
                        <div className="bot-message">
                          {message.msg}
                        </div>
                        : <div className="user-message">
                          {message.msg}
                        </div>
                      }
                    </div>
                  ))}
                </div>
                <div className="mobile-chabot-footer">
                  <input type="text" placeholder="Enter your query..."
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    value={currentMessage}
                    disabled={isInputDisabled}
                    ref={inputRef}
                  />
                  <div className="mobile-chatbot-send-icon">
                    <SendIcon onClick={handleSubmit} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Chatbot;
