import React from "react";
import "./PandemoniumSection.scss";
import video from "../../../images/Home/pandemoniumVIdeo.mp4";
const PandemoniumSection = () => {
  return (
    <div className="pandemonium-container">
      <div className="pandemonium-section1 sm-padding">
        <span className="pandemonium-spanText">
          TedxVITPune Edition VII Theme
        </span>
        {/* <h1 className="pandemonium-embr-title">Embracing the Pandemonium</h1> */}
        {/* <img src={gif} alt="" srcset="" /> */}
        <video loop autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="pandemonium-section2">
        <span className="pandemonium-spanText">Lorem ipsum dolor sit</span>
        <p className="pandemonium-embr-para">
          All the strum and drag in our heads draws down to introspecting-
          engulfed by turmoil. From raging uproars to cheerful celebrations,
          spiralling times to exciting unknowns, we've been thriving amidst the
          chaos. We often wonder, will we ever seek answers? Will the chaos make
          sense? Now is the time we inch closer to our reality by being grateful
          for the minute moments, and not losing a sense of empathy, triumphing
          in our trials- through the balance that comes from within.
        </p>
      </div>
    </div>
  );
};

export default PandemoniumSection;
