import './ReviewsApi.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import google from '../BusinessProfile/google.png'
import { csrfFetch } from './csrf'

const ReviewsApi = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await csrfFetch('/api/businessProfile');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
    // Fetch the reviews data from the backend
    // fetch('http://localhost:8000/api/businessProfile')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => setReviews(data.reviews))
    //   .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  console.log(reviews)

  // Function to render star ratings
  const renderStars = (rating) => {
    const starCount = Math.round(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<span key={i} className="star-filled">★</span>);
      } else {
        stars.push(<span key={i} className="star-empty">☆</span>);
      }
    }

    return stars;
  };

  return (
    <div className="md:w-full xl:w-full bg-blue-900 rounded-t-2xl p-2 custom-api-review-size">
      <h3 className='text-blue-200 text-3xl underline mb-4 text-center'>Recent Reviews</h3>
      <ul className='md:max-h-screen xl:max-h-full custom-large-overflow'>
        {reviews.map((review, index) => (
          <li key={index} className="review-api ">
            <p>{review.text}</p>
            <div className='flex justify-between'>
              <div>
                <p className="review-rating-api">
                  Rating: {renderStars(review.rating)}
                </p>
                <p className="review-author-api">By: {review.author_name}</p>
              </div>
              <a
                href={`https://www.google.com/maps/place/Tahar+Garage+Door+Repair+Services/@34.5989272,-118.1815931,17z/data=!3m1!4b1!4m6!3m5!1s0x80c259d77e3936f1:0xacaf1a48ea067316!8m2!3d34.5989272!4d-118.1815931!16s%2Fg%2F11jwjffm8q?entry=ttu`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className='h-12 custom-google-business-link' src={google} alt=''></img>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <Link className='bg-blue-200 flex justify-center text-xl hover:bg-green-600' to='/reviews'> View All Reviews</Link>
    </div>

  );
};

export default ReviewsApi;
