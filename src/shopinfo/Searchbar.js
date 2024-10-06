import React from 'react';
import './Searchbar.css'; 

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" className="search-input" placeholder="Search course" />
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 010 10.6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;
