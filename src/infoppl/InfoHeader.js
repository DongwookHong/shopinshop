import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./InfoHeader.css"; // 스타일링을 위한 CSS 파일

const InfoHeader = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleSkipClick = () => {
    navigate("/shopinfo"); // Shopinfo 페이지로 이동
  };

  return (
    <div className="info-header">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft className="back-icon" />
      </button>
      <div className="title">샵인샵</div>
      <button className="skip-button" onClick={handleSkipClick}>
        Skip
      </button>
    </div>
  );
};

export default InfoHeader;
