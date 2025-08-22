import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const ImageCarousel = ({ images = [] }) => {
  const settings = {
    dots: true,
    arrows: false,          // hide arrows to keep the hero clean
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    dotsClass: "slick-dots custom-dots", // we position these inside the hero
  };

  return (
    <div className="image-carousel relative h-full">
      <Slider {...settings} className="h-full">
        {images.map((src, i) => (
          <div key={i} className="carousel-image">
            <img src={src} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
