import React from 'react';
import './ShopLogo.css'; // 스타일링을 위한 CSS 파일

const ShopLogo = () => {
  return (
    <div className="shoplogo-container">
      <img src="/img/logo.png" alt="샵인샵 로고" className="logo" />
      <div className="main-text">매장에 매장을 더하다</div>
    </div>
  );
};

export default ShopLogo;
