// import React, { useState } from "react";
// import "./Practical.css";

// export default function ProfileImageChecker() {
//     const [profilePic, setProfilePic] = useState(null);
//     const [bannerPic, setBannerPic] = useState(null);
//     const [messages, setMessages] = useState([]);

//     const handleFileChange = (e, type) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         // Create a temporary URL to preview
//         const url = URL.createObjectURL(file);

//         if (type === "profile") setProfilePic(url);
//         if (type === "banner") setBannerPic(url);

//         // Check resolution after image loads
//         const img = new Image();
//         img.src = url;
//         img.onload = () => {
//             const msgs = [];
//             if (type === "profile") {
//                 msgs.push(
//                     img.width >= 400 && img.height >= 400
//                         ? "Profile picture resolution OK ✅"
//                         : "Profile picture resolution too low ⚠️"
//                 );
//             } else if (type === "banner") {
//                 msgs.push(
//                     img.width >= 1584 && img.height >= 396
//                         ? "Banner resolution OK ✅"
//                         : "Banner resolution too low ⚠️"
//                 );
//             }
//             setMessages((prev) => [...prev, ...msgs]);
//         };
//     };

//     return (
//         <div className="profile-image-checker">
//             <h2>Profile Picture & Banner Checker</h2>

//             <div className="input-section">
//                 <label>
//                     Upload Profile Picture (min 400x400):
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handleFileChange(e, "profile")}
//                     />
//                 </label>
//                 {profilePic && (
//                     <img
//                         src={profilePic}
//                         alt="Profile"
//                         style={{ width: "150px", height: "150px", borderRadius: "50%", marginTop: "10px" }}
//                     />
//                 )}
//             </div>

//             <div className="input-section">
//                 <label>
//                     Upload Banner (min 1584x396):
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handleFileChange(e, "banner")}
//                     />
//                 </label>
//                 {bannerPic && (
//                     <img
//                         src={bannerPic}
//                         alt="Banner"
//                         style={{ width: "100%", height: "200px", objectFit: "cover", marginTop: "10px" }}
//                     />
//                 )}
//             </div>

//             {messages.length > 0 && (
//                 <div className="results" style={{ marginTop: "20px" }}>
//                     <h3>Results:</h3>
//                     <ul>
//                         {messages.map((msg, idx) => (
//                             <li key={idx}>{msg}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }




// import { supabase } from "../supabase/client";

// const ProfileImageChecker = async() => {
//     const { data, error } =  await supabase.from('profiles').select('*').limit(1);
//     if (error) console.error('❌ Supabase connection failed:', error.message);
//     else console.log('✅ Supabase connected:', data);
// }

// export default ProfileImageChecker();












// import { useEffect, useState } from "react";
// import { supabase } from "../supabase/client";

// const ProfileImageChecker = () => {
//     const [reviews, setReviews] = useState([]);
//     const [linkedinURL, setLinkedinURL] = useState("");
//     const [score, setScore] = useState("");
//     const [suggestions, setSuggestions] = useState("");

//     // Fetch all reviews initially
//     const fetchReviews = async () => {
//         const { data, error } = await supabase
//             .from("linkedinProfileReview")
//             .select("*")
//             .order("id", { ascending: true });
//         if (!error) setReviews(data);
//     };

//     // Insert new review
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!linkedinURL) return alert("Please enter your LinkedIn URL");

//         const { data, error } = await supabase
//             .from("linkedinProfileReview")
//             .insert([
//                 {
//                     linkedin_url: linkedinURL,
//                     score: score || null,
//                     suggestions: suggestions || null,
//                 },
//             ]);
//         if (error) {
//             console.log("Error inserting:", error);
//         } else {
//             setLinkedinURL("");
//             setScore("");
//             setSuggestions("");
//             console.log("Inserted:", data);
//         }
//     };

//     useEffect(() => {
//         fetchReviews();

//         const subscription = supabase
//             .channel("public:linkedinProfileReview")
//             .on(
//                 "postgres_changes",
//                 { event: "*", schema: "public", table: "linkedinProfileReview" },
//                 (payload) => {
//                     console.log("Realtime update:", payload);
//                     fetchReviews();
//                 }
//             )
//             .subscribe();

//         return () => supabase.removeChannel(subscription);
//     }, []);

//     return (
//         <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//             <h2>Submit Your LinkedIn URL</h2>
//             <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//                 <input
//                     type="text"
//                     placeholder="Enter LinkedIn URL"
//                     value={linkedinURL}
//                     onChange={(e) => setLinkedinURL(e.target.value)}
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Score (optional)"
//                     value={score}
//                     onChange={(e) => setScore(e.target.value)}
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Suggestions (optional)"
//                     value={suggestions}
//                     onChange={(e) => setSuggestions(e.target.value)}
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />
//                 <button type="submit" style={{ padding: "10px 20px" }}>
//                     Submit
//                 </button>
//             </form>

//             <h3>All Reviews:</h3>
//             {reviews.map((review) => (
//                 <div
//                     key={review.id}
//                     style={{
//                         border: "1px solid #ccc",
//                         padding: "10px",
//                         marginBottom: "10px",
//                         borderRadius: "5px",
//                     }}
//                 >
//                     <p>
//                         <strong>URL:</strong> {review.linkedin_url}
//                     </p>
//                     <p>
//                         <strong>Score:</strong> {review.score || "N/A"}
//                     </p>
//                     <p>
//                         <strong>Suggestions:</strong> {review.suggestions || "N/A"}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProfileImageChecker;













// import { useState } from "react";

// const ProfileImageChecker = () => {
//   const [linkedinURL, setLinkedinURL] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);

//   const handleReview = (e) => {
//     e.preventDefault();
//     if (!linkedinURL) return alert("Please enter your LinkedIn URL");
//     setShowFeedback(true);
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
//       <h2>LinkedIn Profile Reviewer ✨🖊️</h2>
//       <form onSubmit={handleReview} style={{ marginBottom: "30px" }}>
//         <input
//           type="text"
//           placeholder="Enter your LinkedIn URL"
//           value={linkedinURL}
//           onChange={(e) => setLinkedinURL(e.target.value)}
//           style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//         />
//         <button type="submit" style={{ padding: "10px 20px" }}>
//           Review Profile
//         </button>
//       </form>

//       {showFeedback && (
//         <div>
//           <h3>Your Profile Feedback ✨🖊️</h3>

//           {/* Headline Section */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>Craft a Compelling Headline</h4>
//             <p><strong>Current Headline:</strong> None provided.</p>
//             <p><strong>Suggestions:</strong></p>
//             <ul>
//               <li>Include relevant industry keywords.</li>
//               <li>Format: [Role/Title] | [Key Skills/Expertise] | [Industry/Goal]</li>
//               <li>Keep it concise and unique.</li>
//             </ul>
//             <p><strong>Example:</strong> Aspiring Data Analyst | Excel, Python, & Data Visualization Enthusiast | Turning Data Into Insights</p>
//           </div>

//           {/* Summary Section */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>Write an Engaging Summary</h4>
//             <p><strong>Current Summary:</strong> None provided.</p>
//             <p><strong>Suggestions:</strong></p>
//             <ul>
//               <li>Start with who you are and what you do.</li>
//               <li>Highlight experience, skills, achievements.</li>
//               <li>Include career aspirations and call to action.</li>
//             </ul>
//             <p><strong>Example:</strong> I am a passionate professional with strong skills in [key skills]. Eager to connect with like-minded professionals and explore opportunities.</p>
//           </div>

//           {/* Experience Section */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>Nail Down Your Experience</h4>
//             <p><strong>Current Experience:</strong> Empty</p>
//             <p><strong>Suggestions:</strong></p>
//             <ul>
//               <li>Add relevant work experience or internships.</li>
//               <li>Use bullet points and action verbs.</li>
//               <li>Quantify impact where possible.</li>
//             </ul>
//             <p><strong>Example:</strong> Marketing Intern | ABC Company | June 2023 – August 2023<br/>- Developed social media campaign that increased engagement by 30%<br/>- Assisted in market research</p>
//           </div>

//           {/* Skills Section */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>Showcase Your Skills Effectively</h4>
//             <p><strong>Current Skills:</strong> Empty</p>
//             <p><strong>Suggestions:</strong></p>
//             <ul>
//               <li>List 8-12 relevant hard and soft skills.</li>
//               <li>Prioritize skills in job descriptions.</li>
//               <li>Get endorsements from peers.</li>
//             </ul>
//             <p><strong>Example Skills:</strong> Data Analysis, Excel, Python, Digital Marketing, Project Management, Communication, Leadership, Problem Solving</p>
//           </div>

//           {/* Education Section */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>Present Your Education Background</h4>
//             <p><strong>Current Education:</strong> Empty</p>
//             <p><strong>Suggestions:</strong></p>
//             <ul>
//               <li>Add degrees, certifications, ongoing studies.</li>
//               <li>Include institution name, degree, graduation year.</li>
//               <li>List relevant coursework, honors, activities.</li>
//             </ul>
//             <p><strong>Example:</strong> Bachelor of Science in Business Administration, XYZ University, Graduated 2024</p>
//           </div>

//           {/* General Tips */}
//           <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
//             <h4>General Tips for a Standout Profile</h4>
//             <ul>
//               <li>Use a professional profile picture.</li>
//               <li>Customize your LinkedIn URL.</li>
//               <li>Add certifications and volunteer experiences.</li>
//               <li>Request recommendations.</li>
//               <li>Engage regularly on LinkedIn.</li>
//               <li>Complete all profile sections.</li>
//               <li>Use keywords strategically.</li>
//               <li>Add a banner image and join relevant groups.</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileImageChecker;





import { useState } from "react";

const ProfileImageChecker = () => {
    const [linkedinURL, setLinkedinURL] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReview = async (e) => {
        e.preventDefault();
        if (!linkedinURL) return alert("Please enter your LinkedIn URL");

        setLoading(true);
        setFeedback("");

        try {
            const res = await fetch("http://localhost:5000/api/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ linkedinURL }),
            });

            const data = await res.json();
            setFeedback(data.feedback);
        } catch (error) {
            console.error(error);
            alert("Error fetching review");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
            <h2>LinkedIn Profile Reviewer ✨🖊️</h2>
            <form onSubmit={handleReview} style={{ marginBottom: "30px" }}>
                <input
                    type="text"
                    placeholder="Enter your LinkedIn URL"
                    value={linkedinURL}
                    onChange={(e) => setLinkedinURL(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <button type="submit" style={{ padding: "10px 20px" }}>
                    {loading ? "Reviewing..." : "Review Profile"}
                </button>
            </form>

            {feedback && (
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default ProfileImageChecker;
