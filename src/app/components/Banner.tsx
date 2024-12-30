"use client"
import React, { useEffect, useState } from "react";
import Description from "./Description";
import BackgroundImage from "./BackgroundImage";
import Slider from "./Slider";
import { BannerText } from "../enums/BannerText";

import "../styles/Banner.css";

import fgImage1 from "../assets/1-foreground-cutout.png";

import bgImage1 from "../assets/1-background.png";
import bgImage2 from "../assets/2-background.png";
import bgImage3 from "../assets/3-background.png";
import bgImage4 from "../assets/4-background.png";
import bgImage5 from "../assets/5-background.png";
import bgImage6 from "../assets/6-background.png";

import tnImage1 from "../assets/1-thumbnail.png";
import tnImage2 from "../assets/2-thumbnail.png";
import tnImage3 from "../assets/3-thumbnail.png";
import tnImage4 from "../assets/4-thumbnail.png";
import tnImage5 from "../assets/5-thumbnail.png";
import tnImage6 from "../assets/6-thumbnail.png";

const foregroundImages = [fgImage1];
const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
const thumbnailImages = [tnImage1, tnImage2, tnImage3, tnImage4, tnImage5, tnImage6];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); //Changes thumbnail image every 5 seconds

  useEffect(() => {  // Reset the timer whenever the currentIndex changes
    if (timer) {
      clearInterval(timer);  // Clear existing timer
    }

    // Set a new timer to automatically change the image every 5 seconds
    const newTimer = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % thumbnailImages.length);
    }, 5000);

    setTimer(newTimer); //timer reference

    return () => { //on unmount cleaup timer
      if (newTimer) clearInterval(newTimer);
    };
  }, [currentImage]);

  const handleSelectImage = (index: number) => {
    setCurrentImage(index);
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="main-banner">
      <BackgroundImage
        background={backgroundImages[currentImage]}
        foreground={foregroundImages[currentImage]}
      />
      <div className="banner-content">
        <Description bannerText={BannerText} refreshPage={refreshPage} />
        <Slider
          thumbnailImages={thumbnailImages}
          currentIndex={currentImage}
          handleSelectImage={handleSelectImage}
        />
      </div>
    </div>
  );
};

export default Banner;