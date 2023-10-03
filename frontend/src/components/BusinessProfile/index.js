import './BusinessProfile.css'
import React, { useState, useEffect } from 'react';
import { csrfFetch } from './csrf'
import google from './google.png'

const BusinessProfile = () => {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await csrfFetch('/businessProfile');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();

    // Fetch the Google Business Profile data from the backend
    // fetch('http://localhost:8000/businessProfiles')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => setBusinessData(data))
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
    <div >
      {businessData ? (
        <div className="bg-blue-900 text-white text-center rounded-b-2xl lg:h-96 custom-business-profile ">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${businessData.place_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='h-12 absolute mt-16 custom-google-business-link' src={google} alt=''></img>
          </a>
          <h2 className="pt-2">
            <a
              href={`https://www.google.com/maps/place/?q=place_id:${businessData.place_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {businessData.name}
            </a>
          </h2>
          <p>Address: {businessData.formatted_address}</p>
          <a className='text-blue-300 hover:text-green-500' href='tel:661-202-8255'> 661-202-8255</a>
          <p className="text-yellow-400">
            Rating: {renderStars(businessData.rating)}
            <br />
            ({businessData.user_ratings_total} reviews)

          </p>
          {businessData.photos && businessData.photos.length > 0 && (
            <a
              className='flex justify-center '
              href={`https://www.google.com/maps/place/?q=place_id:${businessData.place_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center mb-2 custom-business-img"
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${businessData.photos[0].photo_reference}&key=AIzaSyD254Fwgs-RkYHwu9J5yzkzfULuRloRPNE`}
                alt="Business Profile"
              />
            </a>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BusinessProfile;
