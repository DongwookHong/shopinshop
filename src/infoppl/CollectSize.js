import React from "react";
import "./CollectSize.css"; // 스타일링을 위한 CSS 파일
import "./Infoppl.css"; // 공통 스타일링을 위한 CSS 파일

const CollectSize = ({ selectedSize, setSelectedSize }) => {
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="collect-size-container">
      <label htmlFor="size-select" className="question-label">
        원하는 장소의 크기는 (평수)?
      </label>
      <select id="size-select" className="size-select" value={selectedSize} onChange={handleSizeChange}>
        <option value="">크기를 선택하세요</option>
        <option value="3평이하">3평 이하</option>
        <option value="3~5평">3~5평</option>
        <option value="5~10평">5~10평</option>
        <option value="10~15평">10~15평</option>
        <option value="기타">기타</option>
      </select>
    </div>
  );
};

export default CollectSize;
