import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoHeader from "./InfoHeader.js";
import CollectJob from "./CollectJob.js";
import CollectSize from "./CollectSize.js";
import CollectSpot from "./CollectSpot.js";
import CollectPeriod from "./CollectPeriod.js";
import CollectPrice from "./CollectPrice.js";
import Collect from "./Collect.js";
import "./Infoppl.css"; // 공통 스타일링을 위한 CSS 파일

export const Infoppl = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSido, setSelectedSido] = useState('');
  const [selectedSigungu, setSelectedSigungu] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedDeposit, setSelectedDeposit] = useState('');
  const [selectedRent, setSelectedRent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      category: selectedCategory,
      job: selectedJob,
      sido: selectedSido,
      sigungu: selectedSigungu,
      size: selectedSize,
      period: selectedPeriod,
      deposit: selectedDeposit,
      rent: selectedRent,
    };

    // 데이터베이스로 보내는 로직 추가
    console.log("Sending data to the database:", data);
    
    // 모든 정보가 다 들어오면 shopinfo 페이지로 이동
    navigate('/shopinfo');
  };

  return (
    <div>
      <InfoHeader />
      <CollectJob
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />
      <CollectSpot 
        selectedSido={selectedSido} 
        setSelectedSido={setSelectedSido}
        selectedSigungu={selectedSigungu}
        setSelectedSigungu={setSelectedSigungu}
      />
      <CollectSize 
        selectedSize={selectedSize} 
        setSelectedSize={setSelectedSize}
      />
      <CollectPeriod 
        selectedPeriod={selectedPeriod} 
        setSelectedPeriod={setSelectedPeriod}
      />
      <CollectPrice 
        selectedDeposit={selectedDeposit} 
        setSelectedDeposit={setSelectedDeposit}
        selectedRent={selectedRent} 
        setSelectedRent={setSelectedRent}
      />
      <Collect handleSubmit={handleSubmit} />
    </div>
  );
};

export default Infoppl;
