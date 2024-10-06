import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LastBar.css'; // Ensure to create this CSS file for styling
import { TbHomeFilled } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";

const LastBar = () => {
  const navigate = useNavigate();

  return (
    <div className="lastbar-container">
      <button className="menu-item" onClick={() => navigate('/shopinfo')}>
        <TbHomeFilled className="menu-icon" />
        <div>홈</div>
      </button>
      <button className="menu-item"  onClick={() => navigate('/Chat')}>
        <BsChatDots className="menu-icon" />
        <div>채팅하기</div>
      </button>
      <button className="menu-item">
        <RiUserSettingsFill className="menu-icon" />
        <div>Setting</div>
      </button>
    </div>
  );
};

export default LastBar;
