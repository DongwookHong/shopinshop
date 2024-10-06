import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddHead.css';
import { FaArrowLeft } from 'react-icons/fa';

const AddHead = () => {
  const navigate = useNavigate();

  return (
    <div className="addhead-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" />
      </button>
      <div className="header-title">샵 등록하기</div>
    </div>
  );
};

export default AddHead;
