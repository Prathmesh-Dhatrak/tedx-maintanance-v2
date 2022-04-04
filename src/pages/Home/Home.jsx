import React from "react";
import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";
import PandemoniumSection from "./PandemoniumSection";
import SpeakersSection from "./SpeakersSection";
import TimelineSection from "./TimelineSection";

const Home = ({ dimensions }) => {
  return (
    <>
      <BannerSection />
      <PandemoniumSection />
      {/* <SpeakersSection />
      <TimelineSection />
      <AboutSection /> */}
    </>
  );
};

export default Home;

