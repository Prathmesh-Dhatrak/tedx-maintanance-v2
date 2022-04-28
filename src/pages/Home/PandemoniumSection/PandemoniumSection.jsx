import React from "react";
import "./PandemoniumSection.scss";
const PandemoniumSection = () => {
  return (
    <div className="pandemonium-container">
      <div className="pandemonium-section1 sm-padding">
        <h1 className="pandemonium-spanText">Edition 7</h1>
        <img
          className="gifimg"
          src={
            "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021316/Website%20Content/Home/pandemonium_cmx1fo.gif"
          }
          alt=""
        />
      </div>
      <div className="pandemonium-section2">
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
