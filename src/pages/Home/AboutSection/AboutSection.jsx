import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about-container" data-scroll-section>
      <h2 className="about-title">{`About TED, TEDx and Us `}</h2>
      <div className="about-inner-container">
        <div className="about-section1">
          <p>
            Launched in 2015, TEDxVITPune is a collaboration between Vishwakarma
            Institute of Technology’s students and the large Pune community to
            bring Technology, Entertainment, and Design from various
            visionaries, intellectuals, and doers, right to our doorstep. 
          </p>
        </div>
        <div className="about-section2">
          <div className="about-tedSection">
            <h4>TED</h4>
            <p>
              TED is a nonprofit organisation devoted to spreading ideas,
              usually in the form of short, powerful talks (18 minutes or less).
              TED began in 1984 as a conference where Technology, Entertainment,
              and Design converged, and today covers almost all topics from
              science and business to global issues, in more than a 100
              languages.
            </p>
          </div>
          <div className="about-tedxSection">
            <h4>TEDx</h4>
            <p>
              TEDx is an international community that organises TED-style events
              anywhere and everywhere, with the purpose of celebrating
              locally-driven ideas and elevating them to a global stage. Our
              event is called TEDxVITPune where x= independently organised
              event.
            </p>
          </div>
        </div>
        <div className="about-section3">
          {" "}
          <a
            href="https://www.ted.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            learn more at ted.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
