import React from "react";
import './HomePage.css';

export default function Home() {
    return (
        <main className="main">
            <div className="container">
                <section className="left">
                    <p className="tag">RESUME WORDED</p>
                    <h1 className="title">
                        Improve your <span className="highlight">resume</span> <br />
                        and <span className="highlight2">LinkedIn profile</span>
                    </h1>
                    <p className="desc">
                        Designed by top recruiters — our AI-powered platform gives instant,
                        tailored feedback so you can land 5x more interviews, opportunities
                        and job offers.
                    </p>

                    <div className="buttons">
                        <button className="btn-primary">Get started for free</button>
                        <button className="btn-secondary">See preview</button>
                    </div>
                </section>

                <section className="right">
                    <div className="resume-card">
                        <div className="score-section">
                            <div className="score-circle">85</div>
                            <div className="score-texts">
                                <p className="main-score">Your resume scored 85</p>
                                <p className="sub-score">out of 100</p>
                            </div>
                        </div>

                        <div className="breakdown">
                            <h4>BREAKDOWN</h4>
                            <div className="stats">
                                <div className="stat impact">
                                    <p className="label">IMPACT</p>
                                    <strong>100/100</strong>
                                    <span className="status green">EXCELLENT</span>
                                </div>
                                <div className="stat brevity">
                                    <p className="label">BREVITY</p>
                                    <strong>72/100</strong>
                                    <span className="status orange">AVERAGE</span>
                                </div>
                            </div>

                            <div className="impact-score">
                                <div className="circle">92</div>
                                <p>Impact Score</p>
                            </div>

                            <ul className="points">
                                <li>✔ Quantifying impact</li>
                                <li>✔ Strong action verbs</li>
                                <li>✔ No spelling errors</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}


