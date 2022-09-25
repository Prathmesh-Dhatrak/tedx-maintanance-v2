import React, { Suspense } from "react";
//import BannerSection from "./BannerSection";
//import NewBanner from "./NewBanner";
import PandemoniumSection from "./PandemoniumSection";
//import CountdownSection from "./CountdownSection";
import SpeakersSection from "./SpeakersSection";
import TimelineSection from "./TimelineSection";
import AboutSection from "./AboutSection";
import { BarWave } from "react-cssfx-loading";
const NewBanner = React.lazy(() => import("./NewBanner"));

const Home = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage:
      'url("https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/Grid_fo4iyy.svg")',
  };

  return (
    <>
      <div style={pageStyle}>
        {/*<Suspense
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
      </Suspense>*/}
        <NewBanner />
        {/*<BannerSection />*/}
        {/*<CountdownSection/>*/}
        <PandemoniumSection />
        {/* <hr></hr> */}
        
        <SpeakersSection />
        
        {/* <hr></hr> */}
        <TimelineSection />
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
