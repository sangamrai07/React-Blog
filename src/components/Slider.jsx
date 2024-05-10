import React, { useState } from 'react';
import './css/Slider.scss'
import bg4 from '../images/gridImg4.png'
import bg5 from '../images/gridImg5.png'
import bg6 from '../images/gridImg6.png'

const images = [bg4]

// for demo  
const Slider = () => {

  // it takes props like this = const Slider = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      {images.map((image, index) => (
        <div
          className={
            index === currentSlide ? 'slide active' : 'slide inactive'
          }
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;


