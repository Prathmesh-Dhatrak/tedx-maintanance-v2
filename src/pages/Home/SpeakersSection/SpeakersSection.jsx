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
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652680090/Website%20Content/Home/Speaker/Samar_Nakhate_1_ltyjy8.png",
    title: "Samar Nakhate",
    para: "Samar is a filmmaker, media academic and a media consultant. He is a founder member of the theatre group, Theatre Academy, Pune. Samar is also the creative director of the Pune International Film Festival. Having directed various one-act plays and full- length plays and having made several documentaries for Doordarshan, Mr. Samar works ardently on bringing media to the common people.",
    link: "https://www.youtube.com/watch?v=RNnSrv3PqMI&t=188s",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652675916/Website%20Content/Home/Speaker/Suchitha_Champak_1_ptwegu.png",
    title: "Suchita Champak",
    para: "As the founder of SciRio, she is on a mission to transform how society perceives science. Her journey as a scientist turned entrepreneur has been featured in digital media outlets like The Assam Tribune and BioPatrika. She has a strong vision for a future where science and society co-evolve to build an equitable and accessible space for everyone to empower themselves.",
    link: "https://www.youtube.com/watch?v=WRmHNTV-uwo&t=20s",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652676668/Website%20Content/Home/Speaker/Abhinav_Kafare_crop2_2_liesye.png",
    title: "Abhinav Kafare",
    para: "Labelling him as an artist and a photographer is an understatement. A visionary who seeks newness in the process of creating art and finds life in not knowing how his art will be perceived. The former advertisement designer runs an art collective called Bade Moochwale. He has also mastered the fields of painting and visual arts, among other fine arts.",
    link: "https://www.youtube.com/watch?v=5ZGg5BrbZQU",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652677061/Website%20Content/Home/Speaker/Deepak_photo_2_1_lxtah2.png",
    title: "Deepak Krishnan",
    para: "Being at a chaired position, as the Associate Director for WRI India’s Energy Program, he leads work on Clean Energy Initiatives. As an activist and a dedicated global citizen, Deepak has published multiple research papers and has provided valuable insights in various fields under the clean energy movement. Our planet needs us now more than ever, and visionaries like Deepak are the ones guiding us into the new age of eco-living.",
    link: "https://www.youtube.com/watch?v=A_0ZqqlpByc",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652678016/Website%20Content/Home/Speaker/Speaker5_crop_1_qkuv8g.png",
    title: "Karan Arjun Singh",
    para: "A renowned Foley Artist, having worked in Bollywood for more than 35 yers and having more than 3000 films to his credit. He owns Just Foley, a Mumbai based sound production studio with a team comprising of he most talented foley artists, sound engineers and editors. A man who has perfected his skill, Karan is behind all types of sounds, from setting down coffee mugs to a sword being drawn from its sheath.",
    link: "https://www.youtube.com/watch?v=jFyc-Fwwbyo",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652678509/Website%20Content/Home/Speaker/sonal_mam_1_gblkz2.png",
    title: "Sonal Barmecha",
    para: "The Founder and Managing Director of Sante Spa and Hospitality, La Magia and Yumma Swami. Sonal has curated an impressive resume ranging from being a licensed Chartered Accountant, an entrepreneur, a founder of a national chain of restaurants and a food connoisseur among a whole plethora of other things. As an avid fitness freak, her vision is centered around a holistic diet, food which feeds the stomach and the soul.",
    link: "https://www.youtube.com/watch?v=sgL0E23O17I",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652679083/Website%20Content/Home/Speaker/spea_7_1_xl8reh.png",
    title: "Sandeep Godbole",
    para: "Sandeep Godbole is a cybersecurity expert and the vice president for Atos Syntel. He documents old temples for truly understanding the history of Pune, and its people. Sandeep has organized numerous Heritage Walks in Pune, in a pursuit to familiarize and enlighten participants of the history and various historical structures in the city.",
    link: "https://www.youtube.com/watch?v=oKb131uCNxU&t=13s",
    year: 2022,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652679690/Website%20Content/Home/Speaker/speaker_8_1_wfzvnh.png",
    title: "Swanandi Tikekar",
    para: "Swanandi is an eminent actor, artist and singer. She debuted in acting with serial Abhalmaya as a child actor and continued to put forth captivating performances for the famous sitcom, Dil Dosti Duniyadari. Owing to her constant soulful performances, Swanandi has also won the first season of the famous reality show, Singing Star. From creating magic behind the big screen to charming all and sundry with her euphonious voice- her versatility remains sublime.",
    link: "https://www.youtube.com/watch?v=hCg_mSySd7Q",
    year: 2022,
  },
  /*{
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650895585/Website%20Content/Home/nuphur_aipegj_plobhn.png",
    title: "Nupur Dhakephalkar",
    para: "Nupur Dhakephalkar is a clinical psychologist trained at the National Institute of Mental Health and Neuro Sciences, NIMHANS. Watch her as she ponders upon and shares her ideologies and experiences in the field of psychology through an acronym.",
    link: "https://www.youtube.com/watch?v=bNfT-3jGRCg",
    year: 2019,
  },

  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650895657/Website%20Content/Home/anryan_ky5a2c_f3aoqo.png",
    title: "Adithya Narayanan",
    para: "The manager of social innovation and advocacy at Teach for India (TFI), Adithya Narayanan is working on solutions to some of the most cardinal education-related issues prevalent in the country and has played varied roles in the development sector of India. Hear from this Education Activist, as he traverses us across his journey and his devoted life towards solving India's education challenges.",
    link: "https://www.youtube.com/watch?v=FUMsMLlPGvk",
    year: 2016,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650172466/Website%20Content/Home/image_12_piavv3.png",
    title: "Ulka Kelkar",
    para: "Ulka Kelkar is Director, Climate Program, World Resources Institute, India. She leads WRI India’s work on climate policy which aims to support India’s pathway to a climate-resilient low-carbon economy through judicious national policies, carbon market mechanisms, and effective implementation in states and cities.",
    link: "",
    year: 2020,
  },
  {
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651490017/Website%20Content/Home/_MG_8318_1_rjydz8_canulk.png",
    title: "Daniel Waples and Flavio Lopez",
    para: "Daniel Waples is one of the world’s best-known handpan (hang drum) players having played in over 50 countries and amassing over 40 million views on YouTube. Having played the violin since he was just 9, Flavio feels comfortable within many different genres and musical ideas, adding a truly eclectic vibe to his sound, be it classical music or electronica.",
    link: "",
    year: 2020,
  },*/
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
    img: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652675487/Website%20Content/Home/Speaker/Samar_Nakhate_Speaker_1_3_qgfy1z.jpg",
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
    <div className="speakers-container" data-scroll-section>
      <h2>Stellar Lineup</h2>
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
          {speakersData.map(({ img, title, year }, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img className="slide-img" src={img} alt={img} />
              {idx === imageIndex ? (
                <div className="slide-tittle-year">
                  <h3>{title}</h3> <h5>{year}</h5>
                </div>
              ) : null}

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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={singleImage.link}
              >
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