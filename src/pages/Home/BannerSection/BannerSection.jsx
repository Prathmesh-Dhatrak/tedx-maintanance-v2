import React from "react";
import "./BannerSection.scss";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="banner-section1 sm-padding">
        <div className="subCountainerRg">
          <h3>Embrace the Pandemonium on 21st May, 2022. </h3>
          <button>Apply</button>
        </div>
      </div>
      <div className="banner-section2">
        {/* <iframe
          src="https://my.spline.design/untitled-0895dc11d4d4f56fc2ff9039ba70f526/"
          frameborder="0"
          width="100%"
          height="100%"
          title="This is a unique title"
        /> */}
        <iframe title="spline" src='https://my.spline.design/coloredcompositioncopy-2ac76719b979857b3fbf21368165725b/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
    </div>
  );
};

export default BannerSection;
