import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/oauth2/authorization/google";
  };

  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:3000/oauth2/authorization/kakao";
  };

  return (
    <div className="login-container">
      <h2>Log in or create an Account</h2>
      <button onClick={handleGoogleLogin} className="login-button google-button">
        Log in with Google
      </button>
      <button onClick={handleKakaoLogin} className="login-button kakao-button">
        Log in with Kakao
      </button>
    </div>
  );
};

export default Login;
