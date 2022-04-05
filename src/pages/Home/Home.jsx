import React from "react";
import BannerSection from "./BannerSection";

import PandemoniumSection from "./PandemoniumSection";
import SpeakersSection from "./SpeakersSection";
import TimelineSection from "./TimelineSection";
import AboutSection from "./AboutSection";

const Home = ({ dimensions }) => {
  return (
    <>
      <BannerSection />
      <PandemoniumSection />
      <hr></hr>
      <SpeakersSection />
      <hr></hr>
      <TimelineSection />
      <AboutSection />
    </>
  );
};

export default Home;

