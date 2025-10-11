import React, { useState } from "react";

const ProfileAnalyzer = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!linkedinUrl) {
      setError("Please enter a LinkedIn profile URL");
      return;
    }

    setError("");
    setLoading(true);
    setProfileData(null);

    try {
      const response = await fetch(
        `https://api.scrapingdog.com/linkedin/profile?api_key=YOUR_API_KEY&link=${encodeURIComponent(linkedinUrl)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data. Check URL or API key.");
      }

      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔍 LinkedIn Profile Analyzer (ScrapingDog)</h2>

      <input
        type="text"
        placeholder="Enter LinkedIn Profile URL"
        value={linkedinUrl}
        onChange={(e) => setLinkedinUrl(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleAnalyze} style={styles.button}>
        {loading ? "Analyzing..." : "Analyze Profile"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {profileData && (
        <div style={styles.card}>
          {profileData.profile_picture && (
            <img
              src={profileData.profile_picture}
              alt="Profile"
              style={styles.image}
            />
          )}
          <h3>{profileData.name}</h3>
          <p><strong>Headline:</strong> {profileData.headline || "N/A"}</p>
          <p><strong>Location:</strong> {profileData.location || "N/A"}</p>
          <p><strong>Current Company:</strong> {profileData.current_company || "N/A"}</p>
          <p><strong>Skills:</strong> {profileData.skills?.join(", ") || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
  },
  title: {
    color: "#0A66C2",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "60%",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  button: {
    backgroundColor: "#0A66C2",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  card: {
    background: "#f9f9f9",
    marginTop: "30px",
    padding: "20px",
    borderRadius: "12px",
    width: "50%",
    margin: "30px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default ProfileAnalyzer;
