import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./NewBanner.scss";

export default function NewBanner() {
  let timer = null;
  let elems = useRef([]);
  let timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power3.inOut"
    },
    paused: true
  });

  const gallery = [
    {
      title: "Samar Nakhate",
      cover: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659621781/Website%20Content/speaker1_f2xrxi.webp"
    },
    {
      title: "Suchita Champak",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659604606/Website%20Content/title3_cnn8k2webp_t8mend.webp"
    },
    {
      title: "Abhinav Kafare",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659621782/Website%20Content/speaker3_npstei.webp"
    },
    {
      title: "Deepak Krishnan",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659621783/Website%20Content/speaker4_yebvy9.webp"
    },
    {
      title: "Karan Arjun Singh",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659621782/Website%20Content/speaker5_xyjj6v.webp"
    },
    {
      title: "Sonal Barmecha",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659604606/Website%20Content/title2_uuijhywebp_tiwht6.webp"
    },
    {
      title: "Sandeep Godbole",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659604606/Website%20Content/title1_s5tkp1webp_b9tsgw.webp"
    },
    {
      title: "Swanandi Tikekar",
      cover:"https://res.cloudinary.com/dfgz4hsg0/image/upload/v1659621782/Website%20Content/speajker8_bm3tty.webp"
    }
  ];

  const [state, setState] = useState({ current: 0, next: 1 });
  const [userDetected, setUserDetected] = useState(false);

  /**
   * @TODO
   * create a state that holds two values [ current: number, next: number]
   * create an event handler that set the state the current number
   * and calculate what will be the next value
   */

  const activateTimer = () => {
    timer = setTimeout(() => {
      stepForward();
    }, 4000);
  };

  const calculateIndexs = (index) => {
    if (index === gallery.length - 1) {
      setState({ current: index, next: 0 });
    } else {
      setState({ current: index, next: index + 1 });
    }
  };

  const flowUp = (onComplete) => {
    timeline
      .to(elems.current[0], { y: "-100%", opacity: 0, scale: -0.5 })
      .to(
        elems.current[1],
        {
          y: "-100%",
          opacity: 1,
          scale: 1,
          onComplete
        },
        "-=0.75"
      )
      .play();
  };

  const fadeOut = (onComplete) => {
    timeline
      .to(elems.current[0], {
        duration: 0.5,
        opacity: 0,
        onComplete
      })
      .to(elems.current[0], { opacity: 1 })
      .play();
  };

  const handleChange = (index) => {
    if (index !== state.current) {
      clearTimeout(timer);
      setUserDetected(true);
      fadeOut(() => calculateIndexs(index));
    }
  };

  const stepForward = () => {
    setUserDetected(false);
    flowUp(() => calculateIndexs(state.next));
  };

  useLayoutEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];

    activateTimer();

    gsap.set(image2, { y: "0%", opacity: 0, scale: 1 });
    if (userDetected) {
      gsap.set(image1, { y: "0%", opacity: 0, scale: 1 });
    } else {
      gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });
    }

    return () => {
      clearTimeout(timer);
    };
  },);

  // console.log(state);

  return (

    <div className="App1">
      <div className="album-container">
        <div className="image">
          <img
            fetchpriority="high"
            ref={(elem) => (elems.current[0] = elem)}
            src={gallery[state.current].cover}
            alt="imagecover"
            /*width="626px"
            height="303px"*/
          />
          <p>{gallery[state.current].title}</p>
        </div>
        <div className="image">
          <img
          fetchpriority="high"
            ref={(elem) => (elems.current[1] = elem)}
            src={gallery[state.next].cover}
            alt="imageCover"
            /*width="626px"
            height="303px"*/
          />
          <p>{gallery[state.next].title}</p>
        </div>
        <div className="stripes">
          {gallery.map((_item, index) =>
            index === state.current ? (
              <span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 1 }}
              ></span>
            ) : (
              <span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 0.5 }}
              ></span>
            )
          )}
        </div>
      </div>
    </div>

  );
}
