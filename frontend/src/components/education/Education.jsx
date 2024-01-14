import React,{useEffect} from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Education() {
    const history = useNavigate()
    useEffect(() => {
      if (sessionStorage.getItem('reloaded')) {
        history('/')
        sessionStorage.removeItem('reloaded');
      }
    }, []);
    const isMobileView = useSelector((state) => state.mobileView.isMobileView);
    return (
        <>
            <Navbar />
            {!isMobileView ? <>
                <div className="education-container">
                    <div className="education-content">
                        <div className="education-content-years">
                            <div className='year'><p>2005/18</p></div>
                            <div className='year'><p>2018/20</p></div>
                            <div className='year'><p>2020/21</p></div>
                            <div className='year'><p>2021/24</p></div>
                        </div>
                        <div className="education-content-divider">
                        </div>
                        <div className="education-content-body">
                            <div className='education-content-body-ele'>
                                <div>
                                    <h4>St Sebastian's High School</h4>
                                    <h5>(Maharashtra State Board)</h5>
                                </div>
                                <div>
                                    <p>Subjects: English,Marathi,History,Geography,Mathematics(Algebra & Geometry),Hindi,IT</p>
                                </div>
                                <div>
                                    <p>SSC Score : 87%</p>
                                </div>
                            </div>
                            <div className='education-content-body-ele'>
                                <div>
                                    <h4>S.K Somaiya Junior College</h4>
                                    <h5>(Maharashtra State Board)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Physics,Chemistry,Maths,Biology,Hindi,English</p>
                                </div>
                                <div>
                                    <p>HSC Score : 60%</p>
                                </div>
                            </div>
                            <div className='education-content-body-ele'>
                                <div>
                                    <h4>National Aptitude Test of Architecture</h4>
                                    <h5>(National Institute of Advanced Studies in Architecture)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Visual Reasoning,Logical Derivation,G.K. Architecture & Design,Language Interpretation,Design Sensitivity,Numerical Ability</p>
                                </div>
                                <div>
                                    <p>NATA Score : 141/200</p>
                                </div>
                            </div>
                            <div className='education-content-body-ele'>
                                <div>
                                    <h4>S.K Somaiya University(B.S.C.IT)</h4>
                                    <h5>(Autonomous)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Microprocessor,CPP,JAVA,PYTHON,CG,Design Thinking,Data Science,DBMS,ADBMS,Computer Networks,OOPs,OS,AJAVA,Security in Computing,Software Engineering,AI....etc</p>
                                </div>
                                <div>
                                    <p>CGPA : 9.36/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <>
                <div className="mobile-education-container">
                    <div className="mobile-education-content">
                        <div className="mobile-education-years">
                            <div className='mobile-year'><p>2005/18</p></div>
                            <div className='mobile-year'><p>2018/20</p></div>
                            <div className='mobile-year'><p>2020/21</p></div>
                            <div className='mobile-year'><p>2021/24</p></div>
                        </div>
                        <div className="mobile-education-content-divider"></div>
                        <div className="mobile-education-details">
                            <div className="mobile-detail">
                                <div>
                                    <h4>St Sebastian's High School</h4>
                                    <h5>(Maharashtra State Board)</h5>
                                </div>
                                <div>
                                    <p>Subjects: English,Marathi,History,Geography,Mathematics(Algebra & Geometry),Hindi,IT</p>
                                    <p>SSC Score : 87%</p>
                                </div>
                            </div>
                            <div className="mobile-detail">
                                <div>
                                    <h4>S.K Somaiya Junior College</h4>
                                    <h5>(Maharashtra State Board)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Physics,Chemistry,Maths,Biology,Hindi,English</p>
                                    <p>HSC Score : 60%</p>
                                </div>
                            </div>
                            <div className="mobile-detail">
                                <div>
                                    <h4>National Aptitude Test of Architecture</h4>
                                    <h5>(National Institute of Advanced Studies in Architecture)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Visual Reasoning,Logical Derivation,G.K. Architecture & Design,Language Interpretation,Design Sensitivity,Numerical Ability</p>
                                    <p>NATA Score : 141/200</p>
                                </div>
                            </div>
                            <div className="mobile-detail">
                                <div>
                                    <h4>S.K Somaiya University(B.S.C.IT)</h4>
                                    <h5>(Autonomous)</h5>
                                </div>
                                <div>
                                    <p>Subjects: Microprocessor,CPP,JAVA,PYTHON,CG,Design Thinking,Data Science,DBMS,ADBMS,Computer Networks,OOPs,OS,AJAVA,Security in Computing,Software Engineering,AI....etc</p>
                                    <p>CGPA : 9.36/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Education
