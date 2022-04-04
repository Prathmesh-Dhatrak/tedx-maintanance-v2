import React, { useState } from "react";
import "./SpeakersSection.scss";
import Slider from "react-slick";
import astronaut from "../../../images/Home/main-1.png";
import celebrating from "../../../images/Home/main-2.png";
import education from "../../../images/Home/main-3.png";
import taken from "../../../images/Home/main-2.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const images = [astronaut, celebrating, education, taken];

const SpeakersSection = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [singleContainer, setSingleContainer] = useState(false);
  const [singleImage, setsingleImage] = useState(images[1]);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },
    ],
  };
  const singleSpeakers = (img) => {
    setsingleImage(img);
    setSingleContainer(!singleContainer);
  };

  return (
    <div className="speakers-container">
      <h2>Our Previous Speakers</h2>
      <Slider
        {...settings}
        style={{ display: !singleContainer ? "block" : "none" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img className="slide-img" src={img} alt={img} />
            <div className="view-btn" onClick={() => singleSpeakers(img)}>
              View Details
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="single-speakers"
        style={{ display: singleContainer ? "block" : "none" }}
      >
        <FaArrowLeft
          onClick={() => setSingleContainer(!singleContainer)}
          className="back-arrow"
        />
        <div className={"slide-single"}>
          <img
            className="single-slide-img"
            src={singleImage}
            alt={singleImage}
          />
          <div className="slide-info-container">
            <h1>Jishnu Chatterjee</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              ornare enim cursus magna diam sollicitudin. Elit egestas nunc
              placerat accumsan porttitor. Viverra lorem tristique nec ipsum
              sit.
            </p>
            <button>Watch Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
