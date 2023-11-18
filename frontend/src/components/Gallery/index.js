import './Gallery.css';

import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';
import image4 from './images/4.jpeg';
import image5 from './images/5.jpeg';
import image6 from './images/6.jpeg';
import image7 from './images/7.jpeg';
import image8 from './images/8.jpeg';
import image9 from './images/9.jpeg';
import image10 from './images/10.jpeg';
import image11 from './images/11.jpeg';
import image12 from './images/12.jpeg';
import image13 from './images/13.jpeg';
import image14 from './images/14.jpeg';
import image15 from './images/15.jpeg';
import image16 from './images/16.jpeg';
import image17 from './images/17.jpeg';
import image18 from './images/18.jpeg';
import image19 from './images/19.jpeg';
import image20 from './images/20.jpeg';
import image21 from './images/21.jpeg';
import image22 from './images/22.jpeg';
import image23 from './images/23.jpeg';
import image24 from './images/24.jpeg';
import image25 from './images/25.jpeg';
import image26 from './images/26.jpeg';
import image27 from './images/27.jpeg';
import image28 from './images/28.jpeg';
import image29 from './images/29.jpeg';
import image30 from './images/30.jpeg';
import image32 from './images/32.jpeg';
import image38 from './images/38.jpeg';
import image39 from './images/39.jpeg';
import image40 from './images/40.jpeg';
import image41 from './images/41.jpeg';
import image42 from './images/42.jpeg';
import image43 from './images/43.jpeg';
import image44 from './images/44.jpeg';
import image45 from './images/45.jpeg';
import image46 from './images/46.jpeg';
import image47 from './images/47.jpeg';

import OpenLargeImg from '../OpenLargeImg';
import { useModal } from '../../context/Modal';
import React from 'react';

const Gallery = () => {

  const { setModalContent } = useModal();

  let allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18,
    image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image32, image38, image39, image40, image41, image42, image43,
    image44, image45, image46, image47]

  return (
    <>

      <h2 className='text-4xl text-center'>Welcome to the Gallery!</h2>
      <p className='text-center text-xl mx-2'>Here are some images of the damage we have fixed and installs we have done!</p>

      <div className='flex flex-wrap justify-center'>
        {
          allImages.map(image => (
            <img className='m-1 h-44 w-44 object-cover custom-gallery-image-preview' src={image}
              onClick={() => {
                setModalContent(<OpenLargeImg review={image} />);
              }}>
            </img>
          ))
        }
      </div>

    </>
  );
};

export default Gallery;
