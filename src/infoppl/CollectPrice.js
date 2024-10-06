import React from "react";
import "./CollectPrice.css"; // 스타일링을 위한 CSS 파일
import "./Infoppl.css"; // 공통 스타일링을 위한 CSS 파일

const CollectPrice = ({ selectedDeposit, setSelectedDeposit, selectedRent, setSelectedRent }) => {
  const handleDepositChange = (event) => {
    setSelectedDeposit(event.target.value);
  };

  const handleRentChange = (event) => {
    setSelectedRent(event.target.value);
  };

  return (
    <div className="collect-price-container">
      <label htmlFor="deposit-select" className="question-label">
        보증금과 월세를 선택하세요
      </label>
      <div className="select-container">
        <select id="deposit-select" className="price-select" value={selectedDeposit} onChange={handleDepositChange}>
          <option value="">보증금을 선택하세요</option>
          <option value="100">100</option>
          <option value="200~500">200~500</option>
          <option value="500 이상">500 이상</option>
        </select>

        <select id="rent-select" className="price-select" value={selectedRent} onChange={handleRentChange}>
          <option value="">월세를 선택하세요</option>
          <option value="10">10</option>
          <option value="20~50">20~50</option>
          <option value="50~100">50~100</option>
          <option value="100 이상">100 이상</option>
        </select>
      </div>
    </div>
  );
};

export default CollectPrice;
