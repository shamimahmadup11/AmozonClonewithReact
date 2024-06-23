import { useState, useEffect } from "react";

const images = [
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
];

const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-3 rounded-full hover:bg-opacity-100 transition-opacity duration-200 z-10"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-3 rounded-full hover:bg-opacity-100 transition-opacity duration-200 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default ImgSlider;
