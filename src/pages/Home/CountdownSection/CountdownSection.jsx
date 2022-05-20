import React from "react";
import "./CountdownSection.scss";

const imageArray = [
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509158/Website%20Content/Home/CountdownIMGS/19_settwi.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509143/Website%20Content/Home/CountdownIMGS/18_n0qly8.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509128/Website%20Content/Home/CountdownIMGS/17_u3lfhw.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509116/Website%20Content/Home/CountdownIMGS/16_llnl6x.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509103/Website%20Content/Home/CountdownIMGS/15_gpbpku.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509094/Website%20Content/Home/CountdownIMGS/14_ya6hff.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509085/Website%20Content/Home/CountdownIMGS/13_ctsfzl.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509078/Website%20Content/Home/CountdownIMGS/12_h4kekm.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509075/Website%20Content/Home/CountdownIMGS/11_tvspld.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509073/Website%20Content/Home/CountdownIMGS/10_fkwuur.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509455/Website%20Content/Home/CountdownIMGS/9_cwsizw.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509314/Website%20Content/Home/CountdownIMGS/8_xlmdqh.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509286/Website%20Content/Home/CountdownIMGS/7_fkrrga.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509260/Website%20Content/Home/CountdownIMGS/6_tr3a4y.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509237/Website%20Content/Home/CountdownIMGS/5_b3zdqu.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509213/Website%20Content/Home/CountdownIMGS/4_hkbkqc.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509193/Website%20Content/Home/CountdownIMGS/3_gklshb.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509175/Website%20Content/Home/CountdownIMGS/2_quvdpv.svg",
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651509072/Website%20Content/Home/CountdownIMGS/1_v5gqm4.svg",
];
imageArray.reverse();

const CountdownSection = () => {
  const [day, setday] = React.useState(0);

  React.useEffect(() => {
    var today = new Date();
    var day = today.getDate();
    day = 21 - day;
    console.log(day);
    setday(day);
  }, []);

  return (
    <div className="countdown-container">
      <div className="subCountainerLf">
        <div className="img_container">
          <img src={imageArray[day-1]} alt="img" />
        </div>
        <p>
          Day to go, for the most <br /> awaited event of the year!
        </p>
      </div>
    </div>
  );
};

export default CountdownSection;
