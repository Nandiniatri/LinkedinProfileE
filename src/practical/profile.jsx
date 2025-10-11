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



import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const ProfileImageChecker = () => {
    const [reviews, setReviews] = useState([]);

    // Initial fetch
    const fetchReviews = async () => {
        const { data, error } = await supabase
            .from("linkedinProfileReview")
            .select("*");
        if (!error) setReviews(data);
    };

    useEffect(() => {
        fetchReviews();

        // Realtime subscription
        const subscription = supabase
            .channel("public:linkedinProfileReview")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "linkedinProfileReview" },
                (payload) => {
                    console.log("Realtime update:", payload);
                    // Simple approach: fetch again on every change
                    fetchReviews();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, []);

    return (
        <div>
            <h2>LinkedIn Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                    <p><strong>URL:</strong> {review.linkedin_url}</p>
                    <p><strong>Score:</strong> {review.score}</p>
                    <p><strong>Suggestions:</strong> {review.suggestions}</p>
                </div>
            ))}
        </div>
    );
};

export default ProfileImageChecker;
