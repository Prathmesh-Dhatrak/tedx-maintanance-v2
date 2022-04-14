import React from "react";
import BannerSection from "./BannerSection";

import PandemoniumSection from "./PandemoniumSection";
import CountdownSection from "./CountdownSection";
import SpeakersSection from "./SpeakersSection";
import TimelineSection from "./TimelineSection";
import AboutSection from "./AboutSection";
import grid from "../../images/Grid.svg";

const Home = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <div style={pageStyle}>
      <BannerSection />
      <CountdownSection/>
      <PandemoniumSection />
      {/* <hr></hr> */}
      <SpeakersSection />
      {/* <hr></hr> */}
      <TimelineSection />
      <AboutSection />
    </div>
  );
};

export default Home;

