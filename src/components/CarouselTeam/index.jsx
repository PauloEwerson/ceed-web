import { useState } from "react";
import "tailwindcss/tailwind.css";

const CarouselTeam = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };

  if (images.length === 1) {
    return (
      <div className="relative">
        <img
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          src={images[0]}
          alt="slide"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          className="absolute top-1/2 left-0 z-10 p-2 text-white bg-yellow-500 rounded-full shadow-lg transform -translate-y-1/2 hover:bg-blue-600 focus:outline-none"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute top-1/2 right-0 z-10 p-2 text-white bg-yellow-500 rounded-full shadow-lg transform -translate-y-1/2 hover:bg-blue-600 focus:outline-none"
          onClick={nextSlide}
        >
          {">"}
        </button>
        <img
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          src={images[currentSlide]}
          alt="slide"
        />
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              currentSlide === index
                ? "bg-blue-500"
                : "bg-blue-200 hover:bg-blue-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTeam;

