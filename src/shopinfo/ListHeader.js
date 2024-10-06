import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListHeader.css";

const HeaderSet = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/addshop"); // Addshop 페이지로 이동
  };

  return (
    <div className="shop-container">
      <div className="shop-title">샵인샵</div>
      <div className="register-shop">
        <button className="register-button" onClick={handleRegisterClick}>
          <div className="register-icon">+</div>
          <div className="register-text">매장등록하기</div>
        </button>
      </div>
    </div>
  );
};

export default HeaderSet;
