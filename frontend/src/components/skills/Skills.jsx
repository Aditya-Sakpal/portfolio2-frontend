import React ,{useEffect}from "react";
import "./index.css";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
function Skills() {
  const isMobileView = useSelector((state) => state.mobileView.isMobileView);

  return (
    <>
      <Navbar />
      {!isMobileView ? (
        <div className="skills-container">
          <div className="web-dev-skills" id="web-dev-skills">
            <div className="web-dev-skills-header">
              <h2>Web-Dev Skills</h2>
            </div>
            <div className="web-dev-skills-body">
              <div className="web-dev-skill">
                <p>React-JS/Redux</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="web-dev-skill">
                <p>Node-JS/Express-JS</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="50%"
                    style={{
                      maxWidth: "50%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="web-dev-skill">
                <p>FastAPI/Flask</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="40%"
                    style={{
                      maxWidth: "40%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="web-dev-skill">
                <p>MySQL/PostgreSQL</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="50%"
                    style={{
                      maxWidth: "50%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="web-dev-skill">
                <p>MongoDB/Firebase</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="40%"
                    style={{
                      maxWidth: "40%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="web-dev-skill">
                <p>Github/PostMan Collection</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-skills" id="ml-skills">
            <div className="ml-skills-header">
              <h2>Machine Learning Skills</h2>
            </div>
            <div className="ml-skills-body">
              <div className="ml-skill">
                <p>Data Preprocessing/Extraction</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-skill">
                <p>Fine Tunning/Quantization</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-skill">
                <p>NLP/Chabot</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-skill">
                <p>NER/POS Tagging</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="50%"
                    style={{
                      maxWidth: "50%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-skill">
                <p>Azure Auto-ML/AWS Rekognition</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="80%"
                    style={{
                      maxWidth: "80%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-skill">
                <p>RASA/VoiceFlow</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="cloud-skills" id="cloud-skills">
            <div className="cloud-skills-header">
              <h2>Azure-Dev Skills</h2>
            </div>
            <div className="cloud-skills-body">
              <div className="cloud-skill">
                <p>Active Directory Management</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cloud-skill">
                <p>Compute solutions/Azure Functions</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cloud-skill">
                <p>Identity management/Key Vault</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cloud-skill">
                <p>Authentication/Authorization</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cloud-skill">
                <p>Cosmos DB/Blob Storage</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="70%"
                    style={{
                      maxWidth: "70%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cloud-skill">
                <p>Azure Storage</p>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    value="60%"
                    style={{
                      maxWidth: "60%",
                      height: "100%",
                      background: "#1c1d20",
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mobile-skills-container">
            <div className="mobile-web-dev-skills" id="mobile-web-dev-skills">
              <div className="mobile-web-dev-header">
                <p>Web-Dev Skills</p>
              </div>
              <div className="mobile-web-dev-body">
                <div className="mobile-web-dev-body-left">
                  <div className="mobile-web-dev-skill">
                    <p>React JS/Redux</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-web-dev-skill">
                    <p>Node-JS/Express-JS</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-web-dev-skill">
                    <p>FastAPI/Flask</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="40%" style={{ maxWidth: "40%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                </div>
                <div className="mobile-web-dev-body-right">
                  <div className="mobile-web-dev-skill">
                    <p>PostgreSQL/MySQL</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="50%" style={{ maxWidth: "50%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-web-dev-skill">
                    <p>MongoDB/Firebase</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="40%" style={{ maxWidth: "40%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-web-dev-skill">
                    <p>Github/PostMan Collection</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="mobile-ml-skills" id="mobile-ml-skills">
              <div className="mobile-ml-header">
                <p>ML Skills</p>
              </div>
              <div className="mobile-ml-body">
                <div className="mobile-ml-body-left">
                  <div className="mobile-ml-skill">
                    <p>Data Processing/Extraction</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-ml-skill">
                    <p>Fine Tunning/Quantization</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-ml-skill">
                    <p>NLP/Chabot</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                </div>
                <div className="mobile-ml-body-right">
                  <div className="mobile-ml-skill">
                    <p>NER/POS Tagging</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="50%" style={{ maxWidth: "50%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-ml-skill">
                    <p>Azure Auto-ML/AWS-Rekognition</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="80%" style={{ maxWidth: "80%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-ml-skill">
                    <p>RASA/Voiceflow</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="mobile-cloud-skills" id="mobile-cloud-skills">
              <div className="mobile-cloud-header">
                <p>Cloud Skills</p>
              </div>
              <div className="mobile-cloud-body">
                <div className="mobile-cloud-body-left">
                  <div className="mobile-cloud-skill">
                    <p>Active Directory Management</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-cloud-skill">
                    <p>Compute Solutions/Azure Functions</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-cloud-skill">
                    <p>Identity Management/Key Vault</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                </div>
                <div className="mobile-cloud-body-right">
                <div className="mobile-cloud-skill">
                    <p>Authentication/Authorization</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-cloud-skill">
                    <p>Cosmos DB/Blob Storage</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="70%" style={{ maxWidth: "70%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
                  </div>
                  <div className="mobile-cloud-skill">
                    <p>Azure Storage/ARM-Template</p>
                    <div className="mobile-progress-bar">
                      <div className="mobile-progress-line" value="60%" style={{ maxWidth: "60%", height: "100%", background: "#1c1d20", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", }}></div>
                    </div>
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

export default Skills;
