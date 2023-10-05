import React, { useState, useEffect } from 'react';
import './HomePage.css';

import ImageCarousel from '../ImageCarousel';
import BusinessProfile from '../BusinessProfile';
import AntelopeValleyMap from '../GoogleMap';
import ReviewsApi from '../ReviewsApi';
import { useModal } from '../../context/Modal';
import OpenLargeImg from '../OpenLargeImg';

import image1 from './bannerImages/AdobeStock_1.jpeg';
import image2 from './bannerImages/AdobeStock_2.jpeg';
import image3 from './bannerImages/AdobeStock_3.jpeg';
import image4 from './bannerImages/AdobeStock_4.jpeg';

import repairMan from './bannerImages/repairMan.jpeg';
import repairMan2 from './bannerImages/repairMan2.jpeg';
import discount1 from './bannerImages/seniorDiscount.jpg';
import discount2 from './bannerImages/responderDiscount.jpg';
import call from './bannerImages/callNow.jpeg';
import satisfaction from './bannerImages/satisfaction.jpeg';
import satisfaction2 from './bannerImages/satisfaction2.jpeg';
import door from './bannerImages/door.jpg';


const HomePage = () => {
  const [word, setWord] = useState('springs');
  const [fadeOut, setFadeOut] = useState(false);

  const { setModalContent } = useModal();

  useEffect(() => {
    const words = ['Springs', 'Doors', 'Tracks', 'Openers', 'Cables', 'Sensors', 'Remotes'];
    let index = 1;

    const timer = setInterval(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => {
        setWord(words[index]);
        setFadeOut(false); // Reset fade-out animation
        index = (index + 1) % words.length;
      }, 1000); // Change the word after 500ms (0.5 seconds)
    }, 4000); // Repeat every 2 seconds (2000 milliseconds)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  let images = [image1, image2, image3, image4];
  let phoneNumber = (<a className='home-page-phone-link hover:text-blue-700' href='tel:661-202-8255'>(661-202-8255)</a>)

  return (
    <div className='home-page-container'>

      <h2 className='z-10 absolute w-full flex place-content-center text-xl bg-sky-400/75 rounded-lg p-1 md:text-4xl lg:text-5xl'>
        Call{phoneNumber}for help with -{' '}
        <span className={`animated-word ${fadeOut ? 'fade-out' : ''}`}>
          {word}
        </span>
      </h2>

      <div className='home-page-content-container'>

        <div>
          <ImageCarousel images={images} />
        </div>
          <div>
          <h3 className='hidden md:block lg:hidden m-6 text-xl md:text-3xl lg:text-5xl text-center'>Tahar Garage Door Services in Palmdale & Lancaster</h3>
            <p className='hidden md:block lg:hidden m-4 md:mr-12 md:ml-12 md:text-2xl'>Tahar Garage Door Services provides excellent customer service specializing in all of your garage door needs. From fixing a minor mishap to installing a completely new garage door, we’ve got you covered! We offer free estimates in a timely manner. We only use high quality materials so it will withstand all seasons, daily use, and remain durable. All materials & labor provided include warranty. Give us a call today! Family owned and operated! Serving the Antelope Valley community since 2015 including: Palmdale, Lancaster, Littlerock, Quartz Hill, Acton, Lake Los Angeles, Rosamond, Mojave and everything in between!</p>
          </div>

        <div className='custom-homepage-grid-images'>
          <div className='div-1'>
            <div className='grid grid-cols-2 m-2 lg:grid-cols-1'>
              <img className='rounded-xl p-1 object-cover custom-homepage-individual-img lg:h-96' alt='' src={repairMan}
                onClick={() => {
                  setModalContent(<OpenLargeImg review={repairMan} />);
                }}></img>
              <img className='rounded-xl p-1 object-cover custom-homepage-individual-img lg:h-96' alt='' src={discount1}
                onClick={() => {
                  setModalContent(<OpenLargeImg review={discount1} />);
                }}></img>
              <img className='rounded-xl p-1 object-cover custom-homepage-individual-img lg:h-96' alt='' src={discount2}
                onClick={() => {
                  setModalContent(<OpenLargeImg review={discount2} />);
                }}></img>
              <img className='rounded-xl p-1 object-cover custom-homepage-individual-img lg:h-96' alt='' src={repairMan2}
                onClick={() => {
                  setModalContent(<OpenLargeImg review={repairMan2} />);
                }}></img>
            </div>
            <div>
            </div>
          </div>
          <div className='div-2'>
            <h3 className='md:hidden lg:block m-6 text-xl md:text-3xl lg:text-5xl text-center'>Tahar Garage Door Services in Palmdale & Lancaster</h3>
            <p className='md:hidden lg:block m-4 md:mr-12 md:ml-12 md:text-2xl'>Tahar Garage Door Services provides excellent customer service specializing in all of your garage door needs. From fixing a minor mishap to installing a completely new garage door, we’ve got you covered! We offer free estimates in a timely manner. We only use high quality materials so it will withstand all seasons, daily use, and remain durable. All materials & labor provided include warranty. Give us a call today! Family owned and operated! Serving the Antelope Valley community since 2015 including: Palmdale, Lancaster, Littlerock, Quartz Hill, Acton, Lake Los Angeles, Rosamond, Mojave and everything in between!</p>
            <div className='flex flex-col md:space-y-4'>
              <img className='md:mr-2' src={call} alt=''></img>
              <img className='hidden lg:block mr-2' src={door} alt=''></img>
              <img className='xl:hidden' src={satisfaction} alt=''></img>
              <img className='hidden xl:block mr-2' src={satisfaction2} alt=''></img>
            </div>
          </div>
          <div className='div-3 lg:max-h-fit'>
            <BusinessProfile />
            <AntelopeValleyMap />
            <div className=''>
              <ReviewsApi />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;
