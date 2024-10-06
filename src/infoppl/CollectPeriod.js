import React from "react";
import "./CollectPeriod.css"; // 스타일링을 위한 CSS 파일
import "./Infoppl.css"; // 공통 스타일링을 위한 CSS 파일

const CollectPeriod = ({ selectedPeriod, setSelectedPeriod }) => {
  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="collect-period-container">
      <label htmlFor="period-select" className="question-label">
        원하는 계약기간은??
      </label>
      <select id="period-select" className="period-select" value={selectedPeriod} onChange={handlePeriodChange}>
        <option value="">계약 기간을 선택하세요</option>
        <option value="3개월 미만">3개월 미만</option>
        <option value="3~5개월">3~5개월</option>
        <option value="6개월~12개월">6개월~12개월</option>
        <option value="1년 이상">1년 이상</option>
      </select>
    </div>
  );
};

export default CollectPeriod;
