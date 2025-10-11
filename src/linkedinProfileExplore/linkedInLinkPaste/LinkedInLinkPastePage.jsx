import React, { useState } from "react";
import "./LinkedLinkPastePage.css";

export default function LinkedInAnalyzer() {
    const [url, setUrl] = useState("");

    const handleAnalyze = () => {
        if (!url.trim()) {
            alert("Please paste your LinkedIn profile URL!");
            return;
        }
        alert(`Analyzing profile: ${url}`);
    };

    return (
        <div className="analyzer-container">
            <header className="header">
                <h2 className="logo">RESUME WORDED</h2>
                <nav className="nav">
                    <span>Products ▼</span>
                    <span>More ▼</span>
                    <span>Dashboard</span>
                    <span>Logout</span>
                </nav>
            </header>

            <div className="content">
                <h3>Get a free LinkedIn profile review in just ten seconds.</h3>
                <h1>Analyze Your LinkedIn Profile</h1>

                <div className="buttons">
                    <button className="btn active">Paste URL</button>
                    <button className="btn">Upload PDF</button>
                </div>

                <p className="note">
                    ⚡ No downloads needed — just paste your profile URL and get instant feedback
                </p>

                <div className="steps">
                    <p>
                        <strong>Step 1:</strong> Go to{" "}
                        <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
                            linkedin.com/in/
                        </a>{" "}
                        (this will redirect to your profile)
                    </p>
                    <p>
                        <strong>Step 2:</strong> Copy the URL from your browser and paste it below
                    </p>
                </div>

                <div className="input-section">
                    <input
                        type="text"
                        placeholder="https://www.linkedin.com/in/your-handle"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button onClick={handleAnalyze}>Analyze Profile</button>
                </div>
            </div>
        </div>
    );
}
