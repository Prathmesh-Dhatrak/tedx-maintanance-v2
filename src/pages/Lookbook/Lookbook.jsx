import React from "react";
import "./Lookbook.scss";
import grid from "../../images/Grid.svg";
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
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2019imgBig-1_ldmjg7.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2019imgBig-2_v1ovta.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgBig-3_bkzugv.png"
              alt=""
            />
          </div>
          <label className="label-2019">2019</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-1_iss40h.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-2_xpxe3n.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-3_kcne8y.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2019imgsmall-4_mfy71g.png"
              alt=""
            />
          </div>
        </div>
        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-1_kgi3rl.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-2_bxok8m.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgBig-3_lnzahc.png"
              alt=""
            />
          </div>
          <label className="label-2018">2018</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-1_v3yjp7.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-2_sckaqk.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2018imgsmall-3_snevbl.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018imgsmall-4_o6zmqf.png"
              alt=""
            />
          </div>
        </div>

        <div className="year2019-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018LiveimgBig-1_gevdsv.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018LiveimgBig-2_lfpidb.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018LiveimgBig-3_pyixwg.png"
              alt=""
            />
          </div>
          <label className="label-2019">2018 Live</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018Liveimgsmall-1_soelbw.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018Liveimgsmall-2_ppmqch.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021246/Website%20Content/Lookbook/2018Liveimgsmall-3_a6jwxa.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021247/Website%20Content/Lookbook/2018Liveimgsmall-4_xjehpv.png"
              alt=""
            />
          </div>
        </div>


        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021244/Website%20Content/Lookbook/2017imgBig-1_as5lmq.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021244/Website%20Content/Lookbook/2017imgBig-2_rapm6y.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021244/Website%20Content/Lookbook/2017imgBig-3_jpefuv.png"
              alt=""
            />
          </div>
          <label className="label-2018">2017</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021244/Website%20Content/Lookbook/2017imgsmall-1_nfrexm.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2017imgsmall-2_tsxnxl.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2017imgsmall-3_mpcvwk.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021245/Website%20Content/Lookbook/2017imgsmall-4_snlkof.png"
              alt=""
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Lookbook;
