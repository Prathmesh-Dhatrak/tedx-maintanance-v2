import React from "react";
import "./AboutSection.scss";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    // <section className="main">
    //   <div className="container">
    //     <h2 id="heading-h2">About TED, TEDx & Us </h2>

    //     <div className="first-para">
    //       <p>
    //         Launched in 2015, TEDxVITPune is a collaboration between Vishwakarma
    //         Institute of Technology’s students and the large Pune community to
    //         bring technology, entertainment and design from various visionaries,
    //         intellectuals and doers, right at our doorstep. Our events feature
    //         interdisciplinary presenters, expressing their thoughts,
    //         experiences, projects and visions to promote the ideals of TED.
    //       </p>
    //     </div>

    //     <div className="second-div">
    //       <div className="para-wrapper">
    //         <h3>TED</h3>
    //         <p>
    //           TED is a nonprofit devoted to spreading ideas, usually in the form
    //           of short, powerful talks (18 minutes or less). TED began in 1984
    //           as a conference where Technology, Entertainment and Design
    //           converged, and today covers almost all topics — from science to
    //           business to global issues — in more than 100 languages.
    //         </p>
    //       </div>

    //       <div className="para-wrapper">
    //         <h3>TEDx</h3>
    //         <p>
    //           TEDx is an international community that organizes TED-style events
    //           anywhere and everywhere. With the purpose of celebrating
    //           locally-driven ideas and elevating them to a global stage. Our
    //           event is called TEDxVITPune where x = independently organized
    //           events.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="tagLine">
    //       <a href="/">learn more at ted.com</a>
    //     </div>
    //   </div>
    // </section>
    <div className="about-container">
      <h2 className="about-title">{`About TED, TEDx & Us `}</h2>
      <div className="about-inner-container">
        <div className="about-section1">
          <p>
            Launched in 2015, TEDxVITPune is a collaboration between Vishwakarma
            Institute of Technology’s students and the large Pune community to
            bring technology, entertainment and design from various visionaries,
            intellectuals and doers, right at our doorstep. Our events feature
            interdisciplinary presenters, expressing their thoughts,
            experiences, projects and visions to promote the ideals of TED.
          </p>
        </div>
        <div className="about-section2">
          <div className="about-tedSection">
            <h4>TED</h4>
            <p>
              TED is a nonprofit devoted to spreading ideas, usually in the form
              of short, powerful talks (18 minutes or less). TED began in 1984
              as a conference where Technology, Entertainment and Design
              converged, and today covers almost all topics — from science to
              business to global issues — in more than 100 languages.
            </p>
          </div>
          <div className="about-tedxSection">
            <h4>TEDx</h4>
            <p>
              TED is a nonprofit devoted to spreading ideas, usually in the form
              of short, powerful talks (18 minutes or less). TED began in 1984
              as a conference where Technology, Entertainment and Design
              converged, and today covers almost all topics — from science to
              business to global issues — in more than 100 languages.
            </p>
          </div>
        </div>
        <div className="about-section3">
          {" "}
          <Link href="">learn more at ted.com</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
