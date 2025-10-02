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
                    <div className="card">
                        <div className="score-header">
                            <div className="score-circle">82</div>
                            <div>
                                <p className="score-text">Your resume scored 82</p>
                                <p className="score-sub">out of 100</p>
                            </div>
                        </div>

                        <div className="breakdown">
                            <h4>Breakdown</h4>
                            <div className="stats">
                                <div className="stat good">
                                    <p>Impact</p>
                                    <strong>100/100</strong>
                                    <span>Excellent</span>
                                </div>
                                <div className="stat avg">
                                    <p>Brevity</p>
                                    <strong>65/100</strong>
                                    <span>Average</span>
                                </div>
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
