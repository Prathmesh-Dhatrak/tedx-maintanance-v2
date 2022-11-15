import React from "react";
import PandemoniumSection from "./PandemoniumSection";
import SpeakersSection from "./SpeakersSection";
import TimelineSection from "./TimelineSection";
import AboutSection from "./AboutSection";
import { BarWave } from "react-cssfx-loading";
//const NewBanner = React.lazy(() => import("./NewBanner"));

const Home = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage:
      'url("https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/Grid_fo4iyy.svg")',
  };

  return (
    <div style={pageStyle}>
      {/*<BannerSection />
  <CountdownSection/>*/}
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
