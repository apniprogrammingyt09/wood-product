import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kitchen from "../../assets/modern-wooden-kitchen-interior-steel-kitchen-faucet 2.png";
import livingRoom from "../../assets/pexels-pixabay-275484.jpg";
import dinning from "../../assets/pexels-pixabay-276651.jpg";

const images = [
  kitchen,livingRoom,dinning
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#211f21] bg-opacity-80 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-white text-left text-5xl py-10 font-bold mb-6 tracking-wider">
          OUR WORK
        </h2>
        
        <div className="relative flex items-center justify-center">
          {/* Left Navigation Arrow */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 z-10 bg-transparent text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <div className="w-full max-w-3xl">
            <img 
              src={images[currentIndex]} 
              alt="Project" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide} 
            className="absolute right-0 z-10 bg-transparent text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}