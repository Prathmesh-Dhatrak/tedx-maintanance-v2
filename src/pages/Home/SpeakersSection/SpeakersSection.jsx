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
    para: "Jishnu is a 25-year-old Motion Designer based in Mumbai, who uses his innate sense of aesthetics to create Motion Graphics and visuals-packed narratives for films and web series. His most recent valuable piece, 'Scam 1992: The Harshad Mehta Story' received a nomination for the 'Excellence in Title Design' category at the prestigious SXSW Film. Here's a talk by a title sequence whizz who creates strong chronicle graphics, gives deep insights into his ability and how to get started!",
    link: "https://www.youtube.com/watch?v=RNnSrv3PqMI&t=188s",
  },
  {
    img: Speaker2,
    title: "Amira Gill",
    para: "Amira, emboldened by the hall of famous singers, is a vocalist-songwriter and a certified neurological music therapist, who has worked with top minds of the industry like Shreya Ghoshal and Shankar Mahadevan. We present to you an autobiographical talk of her journey to the musical stage.",
    link: "https://www.youtube.com/watch?v=WRmHNTV-uwo&t=20s",
  },
  {
    img: Speaker3,
    title: "Stefano Pelle",
    para: "Currently the founder and director of SP Associates Management Consultants, lecturer, and writer by hobby and achiever by passion. Here's a talk from the knight commander who shares his experience of the market and leadership expertise gained all over the years.",
    link: "https://www.youtube.com/watch?v=5ZGg5BrbZQU",
  },
  {
    img: Speaker4,
    title: "Mahesh Kale",
    para: "An alumnus of Vishwakarma Institute of Technology, Mahesh Kale is a world-renowned vocalist who has firmly established himself as the face of Indian classical music for the new generation. Here’s a talk by maestro singer Mahesh Kale who shattered all the common myths about Carnatic music and brought out the diamonds it holds inside.",
    link: "https://www.youtube.com/watch?v=A_0ZqqlpByc",
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
              <img className="slide-img" src={img} alt={img} />
              <div className="view-btn" onClick={() => singleSpeakers(idx)}>
                View Details
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {singleContainer ? (
        <div className={`single-speakers`}>
          <div className={"slide-single"}>
            <FaAngleLeft
              onClick={() => setSingleContainer(!singleContainer)}
              className="back-arrow"
              size={30}
            />
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
