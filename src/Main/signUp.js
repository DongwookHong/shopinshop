import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Sign up logic here (e.g., form validation, API call)
    // On success:
    navigate('/infoppl');
  };

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    // Google Sign up logic here
    // On success:
    navigate('/infoppl');
  };

  return (
    <div className="signup">
      <button className="arrow-btn" onClick={() => navigate('/')}><IoIosArrowRoundBack className="arrow-icon" /></button>
      <h3 className="heading">Sign Up</h3>
      <input className="name-box" type="text" placeholder="Name" />
      <input className="email-box" type="text" placeholder="Email" />
      <input className="pwd-box" type="password" placeholder="Password" />
      <label className="checkbox-label">
        <input className="checkbox" type="checkbox" />
        <p className="checkbox-text">By signing up, you agree to the 
          <span className="checkbox-highlight"> Terms of<br />Service and Privacy Policy</span>
        </p>
      </label>
      <button className="signup-btn" type="submit" onClick={handleSignUp}>Sign Up</button>
      <p className="or-text">or with</p>
      <button className="google-btn" type="submit" onClick={handleGoogleSignUp}>
        <span><FcGoogle className="google-icon" /></span>
        <span className="google-text">Sign Up with Google</span>
      </button>
      <p className="login-text">Already have an account? <span className="login-highlight" onClick={() => navigate('/')}>Login</span></p>
    </div>
  );
}

export default SignUpPage;
