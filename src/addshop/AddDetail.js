import React, { useState } from 'react';
import './AddDetail.css';

const AddDetail = () => {
  const [details, setDetails] = useState({
    size: '',
    recommendedBusiness: '',
    contractPeriod: '',
    deposit: '',
    monthlyRent: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend or database
    fetch('/api/add-shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
    .then(response => response.json())
    .then(data => {
      // Handle success or show a success message
      console.log('Success:', data);
    })
    .catch(error => {
      // Handle error or show an error message
      console.error('Error:', error);
    });
  };

  return (
    <form className="add-detail-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="size">사용가능 평수</label>
        <div className="input-container">
          <input type="text" id="size" name="size" value={details.size} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="recommendedBusiness">추천 업종</label>
        <div className="input-container">
          <input type="text" id="recommendedBusiness" name="recommendedBusiness" value={details.recommendedBusiness} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contractPeriod">남은 계약기간</label>
        <div className="input-container">
          <input type="text" id="contractPeriod" name="contractPeriod" value={details.contractPeriod} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group-inline">
        <div className="form-group">
          <label className="form-label" htmlFor="deposit">보증금</label>
          <div className="input-container">
            <input type="text" id="deposit" name="deposit" value={details.deposit} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="monthlyRent">월세</label>
          <div className="input-container">
            <input type="text" id="monthlyRent" name="monthlyRent" value={details.monthlyRent} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="location">위치</label>
        <div className="input-container">
          <input type="text" id="location" name="location" value={details.location} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group description-container">
        <label className="form-label" htmlFor="description">가게 설명</label>
        <div className="input-container">
          <textarea id="description" name="description" value={details.description} onChange={handleChange} placeholder="500자 이내"></textarea>
        </div>
      </div>
      <button type="submit">완료</button>
    </form>
  );
};

export default AddDetail;
