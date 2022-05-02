import React from "react";
import "./CountdownSection.scss";
// import image1 from "../../../images/Home/CountdownImg.png";
import image2 from "../../../images/Home/speaker2.webp";
import image3 from "../../../images/Home/speaker3.webp";

const imageArray = [
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650302729/Website%20Content/Home/CountdownImg_ieaymp_1_u2y7qw.png",
  image2,
  image3,
];

const CountdownSection = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurrent((cur) => (cur < imageArray.length - 1 ? cur + 1 : 0));
    }, 1000 * 60 * 60 * 24);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="subCountainerLf">
        <div className="img_container">
          <img src={imageArray[current]} alt="img" />
        </div>
        <p>
          Days to go, for the most <br /> awaited event of the year!{" "}
        </p>
      </div>
     
    </div>
  );
};

export default CountdownSection;
