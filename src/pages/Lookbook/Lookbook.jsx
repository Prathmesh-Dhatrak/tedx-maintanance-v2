import React from "react";
import "./Lookbook.scss";
import {
  img2019Big1,
  img2019Big2,
  img2019Big3,
  img2019Small1,
  img2019Small2,
  img2019Small3,
  img2019Small4,
  img2018Big1,
  img2018Big2,
  img2018Big3,
  img2018Small1,
  img2018Small2,
  img2018Small3,
  img2018Small4,
  // img2018LiveBig1,
  // img2018LiveBig2,
  // img2018LiveBig3,
  // img2018LiveSmall1,
  // img2018LiveSmall2,
  // img2018LiveSmall3,
  // img2018LiveSmall4,
  // img2017Big1,
  // img2017Big2,
  // img2017Big3,
  // img2017Small1,
  // img2017Small2,
  // img2017Small3,
  // img2017Small4,
} from "../../images/Lookbook";
import grid from "../../images/Grid.svg";
// import line from "../../images/Lookbook/line.png"
const Lookbook = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <div className="lookbook-conatiner" style={pageStyle}>
      <div className="container">
        <h1>
          Want to witness us in our element? Here's a sneak peak into what
          TEDxVITPune actually has to offer.
        </h1>
        <div className="year2019-container">
          <div className="gallery-3img-column">
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2019imgBig-1_ldmjg7.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2019imgBig-2_v1ovta.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgBig-3_bkzugv.png" alt="" />
          </div>
          <label className="label-2019">2019</label>
          <div className="gallery-4img-column">
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-1_iss40h.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-2_xpxe3n.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-3_kcne8y.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-4_mfy71g.png" alt="" />
          </div>
        </div>
        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-1_kgi3rl.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-2_bxok8m.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-3_lnzahc.png" alt="" />
          </div>
          <label className="label-2018">2018</label>
          <div className="gallery-4img-column">
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-1_v3yjp7.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-2_sckaqk.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-3_snevbl.png" alt="" />
            <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018imgsmall-4_o6zmqf.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
