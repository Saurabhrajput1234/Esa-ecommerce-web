import React, { useState, useEffect } from 'react';
import "./slider.css"

const Slider = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(nextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length, interval]);

  return (
    <div className="auto-play-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;
