import React from "react";
import koreaRegions from "../data/regions.json"; // JSON 파일을 import
import "./CollectSpot.css"; // 스타일링을 위한 CSS 파일
import "./Infoppl.css"; // 공통 스타일링을 위한 CSS 파일

const CollectSpot = ({ selectedSido, setSelectedSido, selectedSigungu, setSelectedSigungu }) => {
  const handleSidoChange = (event) => {
    setSelectedSido(event.target.value);
    setSelectedSigungu(''); // 시도가 변경될 때 시군구 선택 초기화
  };

  const handleSigunguChange = (event) => {
    setSelectedSigungu(event.target.value);
  };

  return (
    <div className="collect-spot-container">
      <label htmlFor="sido-select" className="question-label">
        원하는 장소는 ?
      </label>
      <div className="select-container">
        <select id="sido-select" className="spot-select" value={selectedSido} onChange={handleSidoChange}>
          <option value="">시도를 선택하세요</option>
          {Object.keys(koreaRegions).map((sido) => (
            <option key={sido} value={sido}>
              {sido}
            </option>
          ))}
        </select>

        <select id="sigungu-select" className="spot-select" value={selectedSigungu} onChange={handleSigunguChange} disabled={!selectedSido}>
          <option value="">시군구를 선택하세요</option>
          {selectedSido && koreaRegions[selectedSido].map((sigungu) => (
            <option key={sigungu} value={sigungu}>
              {sigungu}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CollectSpot;
