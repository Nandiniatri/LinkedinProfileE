import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="main-div-login">
            <div className="login-left">
                <h2>Login to your account</h2>
                <ul>
                    <li>
                        ✅ Access your resume and LinkedIn reviews
                        <p>Revisit the feedback from your previous resume or LinkedIn reviews and see how you scored.</p>
                    </li>
                    <li>
                        ✅ Get a new resume or LinkedIn review
                        <p>Upload your resume or LinkedIn profile again for another review!</p>
                    </li>
                    <li>
                        ✅ Access the resume bullet point builder
                        <p>Add and manage your bullet points, or get inspired by resume bullet points from top resumes.</p>
                    </li>
                </ul>
            </div>

            
            <div className="login-right">
                <h3>Choose an option to continue</h3>
                <button className="google-btn">Sign in with Google</button>
                <div className="divider">- Or -</div>
                <button className="email-btn">Sign in via Email</button>
                <p className="terms">
                    By continuing, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
