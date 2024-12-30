import React from "react";
import "../styles/Description.css";

interface DescriptionProps {
    bannerText: BannerTextProps;
    refreshPage: () => void;
}

interface BannerTextProps {
    MORE_FROM: string;
    ROUNDED_ACCENT: string;
    MAIN_TITLE: string;
    PARAGRAPH: string;
    CTA: string;
}

const Description = ({ bannerText, refreshPage }: DescriptionProps) => {
    return (
        <div className="banner-description">
            <h2 className="more-from">{bannerText.MORE_FROM}</h2>
            <button className="rounded-accent">{bannerText.ROUNDED_ACCENT}</button>
            <h1 className="main-title">{bannerText.MAIN_TITLE}</h1>
            <p>{bannerText.PARAGRAPH}</p>
            <button className="cta" onClick={() => refreshPage()} >{bannerText.CTA}</button>
        </div>
    );
}

export default Description;