import React from "react";
import "./BannerSection.scss";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="banner-section1 sm-padding">
        <div className="subCountainerRg">
          <h3>Embrace the Pandemonium on 21st May, 2022. </h3>
          <a href="https://tedxvitpune2022.netlify.app/attendee-application">
            <button>Apply</button>
          </a>
        </div>
      </div>
      <div className="banner-section2">
        <iframe
          title="spline"
          src="https://my.spline.design/coloredcompositioncopy-2ac76719b979857b3fbf21368165725b/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="banner-section3">
        <iframe
          title="spline"
          src="https://my.spline.design/coloredcompositioncopycopy-beac2125d45c5097e46d4050c702033e/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default BannerSection;
