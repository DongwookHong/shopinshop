import React from "react";
import "./ShowshopPic.css"; // 스타일링을 위한 CSS 파일

import mainImage from "../img/mila3.jpeg";
import spaceImage from "../img/mila2.jpeg";
import realImage from "../img/mila.jpeg"; // 여기를 수정합니다

const ShowshopPic = () => {
  return (
    <div className="showshop-pic-container">
      <div className="main-pic">
        <img src={mainImage} alt="평면도" />
        <div className="caption">평면도</div>
      </div>
      <div className="sub-pics">
        <div className="sub-pic">
          <img src={spaceImage} alt="사용가능공간" />
          <div className="caption">사용가능공간</div>
        </div>
        <div className="sub-pic">
          <img src={realImage} alt="실제사진" />
          <div className="caption">실제사진</div>
        </div>
      </div>
    </div>
  );
};

export default ShowshopPic;
