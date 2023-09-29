import './Stars.css';
import React from 'react';


const StarRating = ({ rating }) => {
  // Calculate the number of filled and empty stars
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  // Create an array to hold the star elements
  const stars = [];

  // Fill the array with filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i} className="star filled-star">&#9733;</span>);
  }

  // Fill the array with empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={i + filledStars} className="star">&#9734;</span>);
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
