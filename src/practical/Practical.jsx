// import React, { useState } from "react";

// // skill graph
// const skillGraph = {
//     "HTML": ["Accessibility (a11y)", "Responsive Design", "SEO Basics"],
//     "CSS": ["Sass", "Tailwind CSS", "BEM", "CSS-in-JS"],
//     "JavaScript": ["ES6+", "TypeScript", "DOM Manipulation", "Testing (Jest)"],
//     "React": ["Context API", "Hooks", "Redux", "React Router", "Testing (RTL)"]
// };

// const patterns = [
//     { name: "Context API", re: /\bcontext api\b|\bcontext provider\b|\busecontext\b/i },
//     { name: "Redux", re: /\bredux\b/i },
//     { name: "Angular", re: /\bangular\b/i },
//     { name: "REST API Integration", re: /\b(api integration|rest api|fetch\(|axios)\b/i },
//     { name: "TypeScript", re: /\btypescript\b/i },
//     { name: "Testing (Jest)", re: /\bjest\b|\bunit test(s)?\b/i }
// ];

// export default function SkillChecker() {
//     const [profileText, setProfileText] = useState("");
//     const [explicitSkills, setExplicitSkills] = useState([]);
//     const [suggested, setSuggested] = useState([]);

//     const analyze = () => {
//         // Simple parse: explicit skills = words in profileText that match known skills
//         const knownSkills = Object.keys(skillGraph).concat(["React", "HTML", "CSS", "JavaScript"]);
//         const exp = knownSkills.filter(s => profileText.toLowerCase().includes(s.toLowerCase()));

//         // Suggestions from graph
//         let suggestions = new Set();
//         exp.forEach(s => (skillGraph[s] || []).forEach(r => suggestions.add(r)));

//         // Regex-based extraction
//         patterns.forEach(p => {
//             if (p.re.test(profileText)) suggestions.add(p.name);
//         });

//         // Remove explicit
//         exp.forEach(s => suggestions.delete(s));

//         setExplicitSkills(exp);
//         setSuggested(Array.from(suggestions));
//     };

//     return (
//         <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//             <h2>LinkedIn Profile Skill Checker</h2>
//             <textarea
//                 rows="8"
//                 placeholder="Paste LinkedIn About/Experience/Skills text here..."
//                 value={profileText}
//                 onChange={(e) => setProfileText(e.target.value)}
//                 style={{ width: "100%", padding: "10px" }}
//             />
//             <button onClick={analyze} style={{ marginTop: "10px", padding: "8px 15px" }}>
//                 Analyze Skills
//             </button>

//             {explicitSkills.length > 0 && (
//                 <div style={{ marginTop: "20px" }}>
//                     <h3>Explicit Skills Found:</h3>
//                     <ul>
//                         {explicitSkills.map(s => <li key={s}>{s} ✅</li>)}
//                     </ul>
//                 </div>
//             )}

//             {suggested.length > 0 && (
//                 <div style={{ marginTop: "20px" }}>
//                     <h3>Suggested Additional Skills:</h3>
//                     <ul>
//                         {suggested.map(s => <li key={s}>{s} ⚡</li>)}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }














// import React, { useState } from "react";
// import './Practical.css'

// // skill graph
// const skillGraph = {
//     HTML: ["Accessibility (a11y)", "Responsive Design", "SEO Basics"],
//     CSS: ["Sass", "Tailwind CSS", "BEM", "CSS-in-JS"],
//     JavaScript: ["ES6+", "TypeScript", "DOM Manipulation", "Testing (Jest)"],
//     React: ["Context API", "Hooks", "Redux", "React Router", "Testing (RTL)"]
// };

// const patterns = [
//     { name: "Context API", re: /\bcontext api\b|\bcontext provider\b|\busecontext\b/i },
//     { name: "Redux", re: /\bredux\b/i },
//     { name: "Angular", re: /\bangular\b/i },
//     { name: "REST API Integration", re: /\b(api integration|rest api|fetch\(|axios)\b/i },
//     { name: "TypeScript", re: /\btypescript\b/i },
//     { name: "Testing (Jest)", re: /\bjest\b|\bunit test(s)?\b/i }
// ];

// export default function SkillChecker() {
//     const [profileText, setProfileText] = useState("");
//     const [explicitSkills, setExplicitSkills] = useState([]);
//     const [suggested, setSuggested] = useState([]);

//     const analyze = () => {
//         const knownSkills = Object.keys(skillGraph).concat(["React", "HTML", "CSS", "JavaScript"]);
//         const exp = knownSkills.filter((s) =>
//             profileText.toLowerCase().includes(s.toLowerCase())
//         );

//         let suggestions = new Set();
//         exp.forEach((s) => (skillGraph[s] || []).forEach((r) => suggestions.add(r)));

//         patterns.forEach((p) => {
//             if (p.re.test(profileText)) suggestions.add(p.name);
//         });

//         exp.forEach((s) => suggestions.delete(s));

//         setExplicitSkills(exp);
//         setSuggested(Array.from(suggestions));
//     };

//     return (
//         <div className="skill-checker">
//             <textarea
//                 rows="8"
//                 placeholder="Paste LinkedIn About/Experience/Skills text here..."
//                 value={profileText}
//                 onChange={(e) => setProfileText(e.target.value)}
//             />
//             <button onClick={analyze}>Analyze Skills</button>

//             {explicitSkills.length > 0 && (
//                 <div className="results">
//                     <h3>✅ Explicit Skills Found:</h3>
//                     <ul>
//                         {explicitSkills.map((s) => (
//                             <li key={s}>{s}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {suggested.length > 0 && (
//                 <div className="results">
//                     <h3>⚡ Suggested Additional Skills:</h3>
//                     <ul>
//                         {suggested.map((s) => (
//                             <li key={s}>{s}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }






import React, { useState, useEffect } from "react";
import "./Practical.css";

export default function SkillChecker() {
    const [profileText, setProfileText] = useState("");
    const [role, setRole] = useState("");
    const [explicitSkills, setExplicitSkills] = useState([]);
    const [suggested, setSuggested] = useState([]);
    const [roleSkills, setRoleSkills] = useState(null);

    // Fetch roleSkills.json from public folder
    useEffect(() => {
        fetch("/data/roleSkills.json")
            .then((res) => res.json())
            .then((data) => setRoleSkills(data))
            .catch((err) => console.error("Error loading roleSkills.json:", err));
    }, []);

    const detectRole = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes("frontend") || lower.includes("react") || lower.includes("angular"))
            return "frontend";
        if (lower.includes("backend") || lower.includes("node") || lower.includes("express"))
            return "backend";
        if (lower.includes("fullstack")) return "fullstack";
        if (lower.includes("devops") || lower.includes("docker") || lower.includes("kubernetes"))
            return "devops";
        if (lower.includes("data") || lower.includes("python") || lower.includes("machine learning"))
            return "data_scientist";
        return "";
    };

    const analyze = () => {
        if (!roleSkills) return; // wait until JSON loaded

        const detectedRole = detectRole(profileText);
        setRole(detectedRole);

        if (!detectedRole) {
            setExplicitSkills([]);
            setSuggested([]);
            return;
        }

        const roleData = roleSkills[detectedRole];
        const allSkills = [...roleData.core, ...roleData.advanced];

        // Explicitly mentioned skills
        const exp = allSkills.filter((s) =>
            profileText.toLowerCase().includes(s.toLowerCase().split(" ")[0])
        );

        // Suggested skills
        const suggestions = allSkills.filter((s) => !exp.includes(s));

        setExplicitSkills(exp);
        setSuggested(suggestions);
    };

    return (
        <div className="skill-checker">
            <textarea
                rows="8"
                placeholder="Paste LinkedIn About/Experience/Skills text here..."
                value={profileText}
                onChange={(e) => setProfileText(e.target.value)}
            />
            <button onClick={analyze} disabled={!roleSkills}>
                {roleSkills ? "Analyze Skills" : "Loading..."}
            </button>

            {role && <h2>🧑 Role Detected: {role.toUpperCase()}</h2>}

            {explicitSkills.length > 0 && (
                <div className="results">
                    <h3>✅ Explicit Skills Found:</h3>
                    <ul>
                        {explicitSkills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                </div>
            )}

            {suggested.length > 0 && (
                <div className="results">
                    <h3>⚡ Suggested Additional Skills:</h3>
                    <ul>
                        {suggested.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
