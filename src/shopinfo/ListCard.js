import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListCard.css';

const ListCard = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/cards.json') // Fetch the JSON file from the public directory
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (cardId) => {
    navigate('/showshop');
  };

  return (
    <div className="list-card-container">
      {cards.map(card => (
        <div key={card.id} className="list-card" onClick={() => handleCardClick(card.id)}>
          <img src={card.image} alt="업종 이미지" className="card-image" />
          <div className="card-content">
            <span className="location-label">{card.location}</span>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
