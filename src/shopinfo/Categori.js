import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categori.css'; // Make sure to create this CSS file for styling

const Categori = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === '추천샵') {
      navigate('/infoppl'); // 추천샵 클릭 시 infoppl로 이동
    } else {
      // 다른 카테고리는 현재 로직을 그대로 유지
      // 데이터베이스 확인 로직을 여기서 제거하고 이동 경로만 설정
      navigate('/shoplist'); // 예시로 shoplist로 이동
    }
  };

  return (
    <div className="categori-container">
      <span className="category-label">카테고리 :</span>
      <button className="category-button" onClick={() => handleCategoryClick('추천샵')}>추천샵</button>
      <button className="category-button" onClick={() => handleCategoryClick('구인/광고')}>구인/광고</button>
      <button className="category-button" onClick={() => handleCategoryClick('커뮤니티')}>커뮤니티</button>
    </div>
  );
};

export default Categori;
