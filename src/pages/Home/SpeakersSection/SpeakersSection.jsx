import React, { useState } from "react";
import "./SpeakersSection.scss";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaAngleLeft,
  FaCaretRight,
} from "react-icons/fa";
const speakersData = [
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021316/Website%20Content/Home/speaker1_xztgri.webp",
    title: "Jishnu Chatterjee",
    para: "Jishnu is a 25-year-old Motion Designer based in Mumbai, who uses his innate sense of aesthetics to create Motion Graphics and visuals-packed narratives for films and web series. His most recent valuable piece, 'Scam 1992: The Harshad Mehta Story' received a nomination for the 'Excellence in Title Design' category at the prestigious SXSW Film. Here's a talk by a title sequence whizz who creates strong chronicle graphics, gives deep insights into his ability and how to get started!",
    link: "https://www.youtube.com/watch?v=RNnSrv3PqMI&t=188s",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021317/Website%20Content/Home/speaker4_hkexq9.webp",
    title: "Amira Gill",
    para: "Amira, emboldened by the hall of famous singers, is a vocalist-songwriter and a certified neurological music therapist, who has worked with top minds of the industry like Shreya Ghoshal and Shankar Mahadevan. We present to you an autobiographical talk of her journey to the musical stage.",
    link: "https://www.youtube.com/watch?v=WRmHNTV-uwo&t=20s",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650302456/Website%20Content/Home/speaker5_utvfgt_vdjdgg.png",
    title: "Stefano Pelle",
    para: "Currently the founder and director of SP Associates Management Consultants, lecturer, and writer by hobby and achiever by passion. Here's a talk from the knight commander who shares his experience of the market and leadership expertise gained all over the years.",
    link: "https://www.youtube.com/watch?v=5ZGg5BrbZQU",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650302456/Website%20Content/Home/speaker2_fm1gdi_byqaat.png",
    title: "Mahesh Kale",
    para: "An alumnus of Vishwakarma Institute of Technology, Mahesh Kale is a world-renowned vocalist who has firmly established himself as the face of Indian classical music for the new generation. Here’s a talk by maestro singer Mahesh Kale who shattered all the common myths about Carnatic music and brought out the diamonds it holds inside.",
    link: "https://www.youtube.com/watch?v=A_0ZqqlpByc",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021316/Website%20Content/Home/rohit_1_xkvtyy.svg",
    title: "Rohit Pandharkar",
    para: "Rohit Pandharkar is the head of data science and artificial intelligence at the group strategy office of the $20BN Mahindra Group which spans across several industries and has a presence in more than 100 countries. We present to you a strategic expert in the field of artificial intelligence who teleports us to the future of AI and the impossible heights it could scale.",
    link: "https://www.youtube.com/watch?v=jFyc-Fwwbyo",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021313/Website%20Content/Home/avinash_qcyd5f.svg",
    title: "Avinash Dharmadhikari",
    para: "Shri. Avinash Dharmadhikari is a former IAS officer. Before joining the IAS, he was a full-time social activist and a freelance journalist for ten years. An expert talk from the ex-IAS, neatly lays down those points that would lead to more transparent governance and empowerment of people.",
    link: "https://www.youtube.com/watch?v=sgL0E23O17I",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021314/Website%20Content/Home/niranjan_yhcprn.svg",
    title: "Niranjan Pedanekar",
    para: "Niranjan Pedanekar, an AI scientist is revolutionising theatre. Niranjan has a day job as a scientist and is also a playwright, who has written, directed, translated, and acted in numerous plays.Hear the talk of an AI playwright scientist, who shares a unique idea which we never thought of!",
    link: "https://www.youtube.com/watch?v=oKb131uCNxU&t=13s",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021313/Website%20Content/Home/anusree_ztacbo.svg",
    title: "Anusree Raha",
    para: "An economist by education and a bureaucrat by profession, Anusree Raha is an Indian Economic Service Officer, currently working in the capacity of Deputy Director to the Government of India. Hear the top bureaucrat speak of the great combination that technology makes with government schemes and great opportunities that lie in it.",
    link: "https://www.youtube.com/watch?v=hCg_mSySd7Q",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021314/Website%20Content/Home/nuphur_aipegj.svg",
    title: "Nupur Dhakephalkar",
    para: "Nupur Dhakephalkar is a clinical psychologist trained at the National Institute of Mental Health and Neuro Sciences, NIMHANS. Watch her as she ponders upon and shares her ideologies and experiences in the field of psychology through an acronym.",
    link: "https://www.youtube.com/watch?v=bNfT-3jGRCg",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021313/Website%20Content/Home/anryan_ky5a2c.svg",
    title: "Adithya Narayanan",
    para: "The manager of social innovation and advocacy at Teach for India (TFI), Adithya Narayanan is working on solutions to some of the most cardinal education-related issues prevalent in the country and has played varied roles in the development sector of India. Hear from this Education Activist, as he traverses us across his journey and his devoted life towards solving India's education challenges.",
    link: "https://www.youtube.com/watch?v=FUMsMLlPGvk",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650172466/Website%20Content/Home/image_12_piavv3.png",
    title: "Ulka Kelkar",
    para: "Ulka Kelkar is director, Climate Program, World Resources Institute, India. She leads WRI India’s work on climate policy which aims to support India’s pathway to a climate-resilient low-carbon economy through judicious national policies, carbon market mechanisms, and effective implementation in states and cities.",
    link: "",
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650172273/Website%20Content/Home/_MG_8318_1_rjydz8.png",
    title: "Daniel Waples & Flavio Lopez",
    para: "Daniel Waples is one of the world’s best-known handpan (hang drum) players having played in over 50 countries and amassing over 40 million views on YouTube. Having played the violin since he was just 9, Flavio feels comfortable within many different genres & musical ideas, adding a truly eclectic vibe to his sound, be it classical music or electronica.",
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
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021316/Website%20Content/Home/speaker1_xztgri.webp",
    title: "Jishnu Chatterjee",
    para: "Jishnu is a 25-year-old Motion Designer based in Mumbai, who uses his innate sense of aesthetics to create Motion Graphics and visuals-packed narratives for films and web series. His most recent valuable piece, 'Scam 1992: The Harshad Mehta Story' received a nomination for the 'Excellence in Title Design' category at the prestigious SXSW Film. Here's a talk by a title sequence whizz who creates strong chronicle graphics, gives deep insights into his ability and how to get started!",
    link: "https://www.youtube.com/watch?v=RNnSrv3PqMI&t=188s",
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
              <a target="_blank" rel="noopener noreferrer" href={singleImage.link}>
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
