import React from "react";
import "./BannerSection.scss";
import VideoLooper from "react-video-looper";
//import {Carousel} from '3d-react-carousal';
import video from "../../../images/Comp.mp4";

/*let slides = [
  <img  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651527621/Website%20Content/About/About_Us_eufnvp.png" alt="1" />,
  <img  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651056962/Website%20Content/Lookbook/edxxxxx_ogkunh.png" alt="2" />  ,
  <img  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301338/Website%20Content/Lookbook/2017imgsmall-3_mpcvwk_lkjhet.png" alt="3" />  ,
  <img  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301339/Website%20Content/Lookbook/2017imgsmall-4_snlkof_t6psx2.png" alt="4" />  ,
  <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650296002/Website%20Content/Lookbook/2019imgsmall-4_mfy71g_exzoj5.png" alt="5" />   
];*/

/*function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  return windowDimensions;
}*/
const BannerSection = () => {
  //const { width } = useWindowDimensions();
  return (
    <>
    <div className="banner-container" data-scroll-section>
      <div className="banner-section1 sm-padding">
        <div className="subCountainerRg">
          <h3>Embrace the Pandemonium on 21st May, 2022. </h3>
         {/* <a
            href="https://tedxvitpune.in/attendee-application"
            target="_blank"
            rel="noreferrer"
          >
            <button>Apply</button>
  </a>*/}
        </div>
      </div>
      {/*{width < 900 ? (
        <div className="banner-section3">
          <iframe
            title="spline"
            src="https://my.spline.design/coloredcompositioncopycopy-beac2125d45c5097e46d4050c702033e/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      ) : (
        <div className="banner-section2">
          <iframe
            title="spline"
            src="https://my.spline.design/coloredcompositioncopy-2ac76719b979857b3fbf21368165725b/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      )}*/}
      {/*<div className="banner-section2">
        {/*<img
          className="gifimg"
          src={gif}
          
          alt="image_gif"
    />

        /*<video autoPlay loop>
          <source src={video} type="video/mp4" />
    </video>
        <VideoLooper
          source={video}
          start={0}
          end={14.2}
          isDebugMode={false}
          autoPlay={true}
          height={"40rem"}
        />
    </div>*/}
    </div>

    {/*<Carousel slides={slides} autoplay={true} interval={2000}/>*/}
    </>
    

    




  );
};

export default BannerSection;
