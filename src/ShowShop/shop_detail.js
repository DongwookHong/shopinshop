import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import shopImage1 from '../img/mila.jpeg';
import shopImage2 from '../img/mila2.jpeg';
import shopImage3 from '../img/mila3.jpeg';
import './shop_detail.css';

function ShopDetailPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleChatClick = () => {
    navigate('/Chat'); // Navigate to the Chat page
  };

  return (
    <div className="detail">
      <div className="header">
        <button className="arrow-btn" onClick={handleBackClick}>
          <IoIosArrowRoundBack className="arrow-icon" />
        </button>
        <h3 className="heading">Shop Name</h3>
      </div>
      <img src={shopImage1} alt="Shop main" className="main-image" />
      <div className="sub-images">
        <img src={shopImage2} alt="Shop Second" className="sub-image" />
        <img src={shopImage3} alt="Shop Third" className="sub-image" />
      </div>
      <div className="info-box">
        <div className="info-item">
          <div className="info-title">사용 가능 평수</div>
          <div className="info-content">3평</div>
        </div>
        <div className="info-item">
          <div className="info-title">추천 업종</div>
          <div className="info-content">왁싱, 네일</div>
        </div>
        <div className="info-item">
          <div className="info-title">남은 계약기간</div>
          <div className="info-content">1년</div>
        </div>
        <div className="info-item">
          <div className="info-title">위치</div>
          <div className="info-content">강남구 xx</div>
        </div>
        <div className="info-item full-width">
          <div className="info-title">임대료</div>
          <div className="info-content">
            보증금 100만원<br />월세 10만원
          </div>
        </div>
        <div className="info-item full-width">
          <div className="info-title">사장님 설명</div>
          <div className="info-content">comment</div>
        </div>
      </div>
      <button className="chat-btn" type="submit" onClick={handleChatClick}>문의하기</button>
    </div>
  );
}

export default ShopDetailPage;
