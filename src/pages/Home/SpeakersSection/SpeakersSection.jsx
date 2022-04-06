import React, { useState, useEffect } from "react";
import "./SpeakersSection.scss";
import Slider from "react-slick";
import { Speaker1, Speaker2, Speaker3, Speaker4 } from "../../../images/Home";
import {
  FaArrowRight,
  FaArrowLeft,
  FaAngleLeft,
  FaCaretRight,
} from "react-icons/fa";
const speakersData = [
  {
    img: Speaker1,
    title: "Jishnu Chatterjee",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisiornare enim cursus magna diam sollicitudin. Elit egestas nuncplacerat accumsan porttitor. Viverra lorem tristique nec ipsumsit.",
    link: "",
  },
  {
    img: Speaker2,
    title: "Chatterjee Jishnu",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisiornare enim cursus magna diam sollicitudin. Elit egestas nuncplacerat accumsan porttitor. Viverra lorem tristique nec ipsumsit.",
    link: "",
  },
  {
    img: Speaker3,
    title: "Lorem ipsum ",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisiornare enim cursus magna diam sollicitudin. Elit egestas nuncplacerat accumsan porttitor. Viverra lorem tristique nec ipsumsit.",
    link: "",
  },
  {
    img: Speaker4,
    title: "Consectetur Adipiscing",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisiornare enim cursus magna diam sollicitudin. Elit egestas nuncplacerat accumsan porttitor. Viverra lorem tristique nec ipsumsit.",
    link: "",
  },
];

const SpeakersSection = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={20} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={20} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [singleContainer, setSingleContainer] = useState(false);
  const [singleImage, setsingleImage] = useState({
    img: Speaker2,
    title: "Jishnu Chatterjee",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisiornare enim cursus magna diam sollicitudin. Elit egestas nuncplacerat accumsan porttitor. Viverra lorem tristique nec ipsumsit.",
    link: "",
  });

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
  const singleSpeakers = (idx) => {
    speakersData.map((speaker, ix) => {
      if (ix === idx) {
        setsingleImage({
          img: speaker.img,
          title: speaker.title,
          para: speaker.para,
          link: speaker.link,
        });
      }
      return singleImage;
    });

    setSingleContainer(!singleContainer);
  };
  useEffect(() => {
    console.log(Speaker3);
  }, []);

  return (
    <div className="speakers-container">
      <h2>Our Previous Speakers</h2>
      <div
        className="speakers-wrapper  sm-padding"
        style={{
          display: !singleContainer && "block",
          visibility: singleContainer && "hidden",
          height: singleContainer && "0px",
          padding: singleContainer && "0px",
          margin: singleContainer && "0px",
          opacity: singleContainer && "0",
        }}
      >
        <Slider {...settings}>
          {speakersData.map(({ img }, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img
                className="slide-img"
                src={img}
                alt={img}
              />
              <div
                className="view-btn"
                onClick={() => singleSpeakers(idx)}
              >
                View Details
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {singleContainer ? (
        <div className={`single-speakers`}>
          <FaAngleLeft
            onClick={() => setSingleContainer(!singleContainer)}
            className="back-arrow"
            size={30}
          />
          <div className={"slide-single"}>
            <div className="single-slide-container-img">
              <img
                className="single-slide-img"
                src={singleImage.img}
                alt={singleImage}
              />
            </div>
            <div className="slide-info-container">
              <h1>{singleImage.title}</h1>
              <p>{singleImage.para}</p>
              <a href={singleImage.link}>
                Watch Talk <FaCaretRight size={30}></FaCaretRight>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SpeakersSection;
