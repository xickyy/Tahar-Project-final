import './Reviews.css';

import React, { useState, useEffect } from 'react';
import reviews from './revs.json';
import StarRating from '../Stars';
import defaultimg from './default.jpg';
import AntelopeValleyMap from '../GoogleMap';
import BusinessProfile from '../BusinessProfile';
import { useModal } from '../../context/Modal';
import OpenLargeImg from '../OpenLargeImg';
import OpenTaharResponse from '../OpenTaharResponse';
import google from '../BusinessProfile/google.png';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [loadedReviews, setLoadedReviews] = useState(10); // Start with the first 10 reviews
  const { setModalContent } = useModal(); // Get the setModalContent function from the context

  useEffect(() => {
    // Load the initial reviews when the component mounts
    setReviewsList(reviews.data.slice(0, 10));
  }, []);

  const loadMoreReviews = () => {
    if (loadedReviews >= reviews.data.length) {
      // No more reviews to load
      return;
    }

    // Load 10 more reviews when the "Load More Reviews" button is clicked
    const nextReviews = reviews.data.slice(loadedReviews, loadedReviews + 10);
    setReviewsList((prevReviews) => [...prevReviews, ...nextReviews]);
    setLoadedReviews(loadedReviews + 10);
  };

  const ifImage = (images) => {
    if (images) {
      let arr = images.split(',');
      console.log(arr);
      return (
        arr.map((image, index) => (
          <div key={index} className='mr-2 mt-2'>
            <img
              className='h-24 custom-review-img'
              src={image}
              alt=''
              onClick={() => {
                // Open the modal when the image is clicked
                setModalContent(<OpenLargeImg review={image} />);
              }}
            />
          </div>
        ))
      );
    }
  };

  const ifResponse = (response, review) => {
    if (response) {
      return (
        <button className='bg-blue-200 rounded-lg custom-tahar-response-button' onClick={() => setModalContent(<OpenTaharResponse review={review} />)}>View Tahar's Response</button>
      )
    }
  }

  return (
    <>
      <div className='block'>
        <div className='md:hidden'>
          <BusinessProfile />
        </div>
        <div className='hidden md:flex'>
          <AntelopeValleyMap />
        </div>
      </div>
      <div className='m-2'>
        <h3 className='text-lg md:text-xl lg:text-2xl text-center'>Here is a list of all our google reviews! if you would like to check them out on the official google business profile or leave a review of your own, <a className='hover:text-blue-900 underline' href='https://www.google.com/search?q=tahar+garage+door+repair+services&oq=&aqs=chrome.1.35i39i362l8.1003j0j15&sourceid=chrome&ie=UTF-8#lrd=0x80c259d77e3936f1:0xacaf1a48ea067316,1,,,,' target='_Blank' rel="noreferrer"> Click Here</a></h3>
      </div>
      <div className='md:grid md:grid-cols-2'>
        {
          reviewsList.map((review => (
            <div key={review.author_id} className='m-2 p-2 bg-white rounded-lg custom-reviews-card flex flex-col justify-between'>
              <div className='container-with-review-info-and-response-button'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img className='h-12' src={review.author_image} alt={defaultimg}></img>
                    <div>
                      <div className='flex'>
                        <p className='ml-2 italic'>{review.author_title}</p>
                        <div className='ml-2'>
                          <StarRating rating={review.rating} />
                        </div>
                      </div>
                      <p className='ml-2'>Date posted: {review.review_datetime_utc.slice(0, 10)}</p>
                    </div>
                  </div>
                  <div className='w-24'>
                    {ifResponse(review.owner_answer, review)}
                  </div>
                </div>
              </div>
              <p className='reviews-text'>{review.review_text}</p>
              <div className='flex justify-between'>
                <div className='flex'>
                  {ifImage(review.review_img_urls)}
                </div>
                <a
                  className='flex flex-col justify-end'
                  href={`https://www.google.com/maps/place/Tahar+Garage+Door+Repair+Services/@34.5989272,-118.1815931,17z/data=!3m1!4b1!4m6!3m5!1s0x80c259d77e3936f1:0xacaf1a48ea067316!8m2!3d34.5989272!4d-118.1815931!16s%2Fg%2F11jwjffm8q?entry=ttu`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className='h-12 custom-google-business-link' src={google} alt=''></img>
                </a>
              </div>
            </div>
          )))
        }
      </div>
      <div className='flex justify-center'>
        <div className='text-center bg-blue-800 p-2 mx-2 mb-2 custom-load-reviews-button'>
          <button className='text-blue-300 hover:text-white ' onClick={loadMoreReviews}>Load More Reviews</button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
