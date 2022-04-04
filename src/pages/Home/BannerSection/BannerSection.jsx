import React from "react";
import About3 from "../../../images/Home/about3.png";
import "./BannerSection.scss";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="banner-section1 sm-padding">
        <h4 className="banner-small-title">At</h4>
        <div className="banner-heading-title">
          <h1 className="banner-title-1">TEDx</h1>
          <h1 className="banner-title-2">VITPune</h1>
        </div>
        <p className="banner-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="banner-section2">
        <img src={About3} alt="Demo" />
      </div>
    </div>
  );
};

export default BannerSection;
