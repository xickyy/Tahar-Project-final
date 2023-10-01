import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of the fade effect
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000, // Set autoplay interval to 10 seconds (10000 milliseconds)
    fade: true, // Enable fade effect
    cssEase: 'linear', // Use linear CSS easing for smoother fades
  };

  return (
    <div className="image-carousel z-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image h-24 md:h-60 lg:h-64 xl:h-72">
            <img src={image} alt='' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
