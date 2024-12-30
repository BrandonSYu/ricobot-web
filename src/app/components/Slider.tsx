import React from "react";
import "../styles/Slider.css";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface SliderProps {
  thumbnailImages: StaticImageData[];
  currentIndex: number;
  handleSelectImage: (index: number) => void;
}

const Slider = ({ thumbnailImages, currentIndex, handleSelectImage }: SliderProps) => {
  return (
    <div className="slider">
      {thumbnailImages.map((thumbnail, index) => (
        <div
          key={'outer' + index}
          className={`thumbnail-container-outer ${currentIndex === index ? "active" : ""}`}
        >
          <div key={'inner' + index} className={`thumbnail-container-inner ${currentIndex === index ? "active" : ""}`}>
            <Image
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              src={thumbnail}
              onClick={() => handleSelectImage(index)}
              alt={`thumbnail ${index + 1}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;