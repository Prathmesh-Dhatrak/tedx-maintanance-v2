import React, { Suspense, useRef, useEffect } from "react";
import "./PandemoniumSection.scss";
import video from "../../../images/pande.webm";
import { BarWave } from "react-cssfx-loading";

const PandemoniumSection = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarWave height="50px" color="#FF0000" width="100px" />
        </div>
      }
    >
      <div className="pandemonium-container" data-scroll-section>
        <div className="pandemonium-section1 sm-padding">
          <h1 className="pandemonium-spanText">Edition 7</h1>
          {/*<img
            className="gifimg"
            src={
              "https://res.cloudinary.com/dfgz4hsg0/video/upload/v1659602486/Website%20Content/Home/pandemonium_cmx1fo_csmlbkweb_bcqffp.webm"
            }
            alt="image_gif"
          />*/}
          <video src={video} ref={vidRef} muted autoPlay loop />
        </div>
        <div className="pandemonium-section2">
          <p className="pandemonium-embr-para">
            All the strum and drag in our heads draws down to introspecting-
            engulfed by turmoil. From raging uproars to cheerful celebrations,
            spiralling times to exciting unknowns, we've been thriving amidst
            the chaos. We often wonder, will we ever seek answers? Will the
            chaos make sense? Now is the time we inch closer to our reality by
            being grateful for the minute moments, and not losing a sense of
            empathy, triumphing in our trials- through the balance that comes
            from within.
          </p>
        </div>
      </div>
    </Suspense>
  );
};

export default PandemoniumSection;
