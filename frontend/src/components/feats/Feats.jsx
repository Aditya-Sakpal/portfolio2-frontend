import React from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'
function Feats() {
    return (
        <>
            <Navbar />
            <div className="feats-container">
                <div className="feats-content">
                    <div className="feat">
                        <div className="feat-title">
                            Silver Medalist at running
                        </div>
                        <div className="feat-description">
                            Achieving a silver medal in 8th grade running signifies an impressive accomplishment in athletic performance
                        </div>
                        <div className="feat-year">
                            -2018
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat-title">
                            Silver Medalist at long jump
                        </div>
                        <div className="feat-description">
                            This accomplishment demonstrates exceptional skills, dedication, and hard work in the field of track and field athletics
                        </div>
                        <div className="feat-year">
                            -2019
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat-title">
                            Grade B at Elementary exam
                        </div>
                        <div className="feat-description">
                            It suggests a good understanding of drawing fundamentals, creativity, and effective use of techniques.
                        </div>
                        <div className="feat-year">
                            -2020
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat-title">
                            Scored 141 at NATA
                        </div>
                        <div className="feat-description">
                            It suggests that you demonstrated a good level of proficiency in artistic and architectural aspects
                        </div>
                        <div className="feat-year">
                            -2021
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feats