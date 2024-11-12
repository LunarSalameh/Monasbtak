import React from 'react';
import './page.css'; 

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        ★
      </span>
    );
  }
  return <div className='star-rating'>{stars}</div>;
};

export default StarRating;