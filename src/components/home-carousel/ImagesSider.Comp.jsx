import React, { useState } from 'react';
import { SliderData } from './SliderData';
import "./image-slider.scss"
import { TiChevronLeftOutline,TiChevronRightOutline } from "react-icons/ti";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <TiChevronRightOutline className='right-arrow' onClick={nextSlide}></TiChevronRightOutline>
      <TiChevronLeftOutline className='left-arrow' onClick={prevSlide} ></TiChevronLeftOutline>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travmage' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
