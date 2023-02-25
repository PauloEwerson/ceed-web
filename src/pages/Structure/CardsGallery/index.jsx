import React, { useState, useEffect } from 'react';
import Carousel from '../../../components/Carousel';

import img1 from '../../../assets/images/estrutura/areaExterna.jpg';
import img2 from '../../../assets/images/estrutura/areaExterna2.jpg';
import img3 from '../../../assets/images/estrutura/areaExterna3.jpg';
import img4 from '../../../assets/images/estrutura/salaMaternal3Anos.jpg';
import img5 from '../../../assets/images/estrutura/salaMaternalzinho.jpg';
import img6 from '../../../assets/images/estrutura/salaPrimeiroAno2.jpg';

const CardsGallery = () => {
  const [activeSlide, setActiveSlide] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
    `${img5}`,
    `${img6}`,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isMobile ? (
        <Carousel images={slides} />
      ) : (
        <section className="flex flex-wrap w-full max-w-5xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-1/12 md:w-1/12 lg:w-1/12 xl:w-1/12 p-4 cursor-pointer
              ${activeSlide === index ? 'flex-1' : '' || ((activeSlide === null && index === 0) && 'flex-1')}`}
              onClick={() => handleSlideClick(index)}
            >
              <div
                className={`h-96 rounded-lg bg-cover bg-center text-white relative transition-all duration-500 ease-in-out 
                ${activeSlide === index ? 'w-full' : 'w-11/12'}`}
                style={{ backgroundImage: `url(${slide})` }}
              >
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default CardsGallery;
