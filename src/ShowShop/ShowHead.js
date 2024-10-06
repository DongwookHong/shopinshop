import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./ShowHead.css"; // 스타일링을 위한 CSS 파일

const SettingHead = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleChatClick = () => {
    navigate("/Chat"); // 채팅 페이지로 이동 (경로는 필요에 맞게 설정)
  };

  return (
    <div className="setting-head">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div className="title">샵인샵</div>
      <button className="chat-button" onClick={handleChatClick}>
        채팅하기
      </button>
    </div>
  );
};

export default SettingHead;
