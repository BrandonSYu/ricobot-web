import React from "react";
import "../styles/BackgroundImage.css";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BackgroundImageProps {
  background: StaticImageData;
  foreground?: StaticImageData;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ background, foreground }) => {
  return (
    <div className="background-image-container">
      <div className="linear-gradient">
        <Image src={background} className="background-image" alt="Background" />
      </div>
      <div className="foreground-image-container">
        {foreground && (
          <Image src={foreground} className="foreground-image" alt="Foreground" />
        )}
      </div>
    </div>
  );
};

export default BackgroundImage;