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
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295152/Website%20Content/Lookbook/2019imgBig-1_ldmjg7_ag9rex.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295374/Website%20Content/Lookbook/2019imgBig-2_v1ovta_vwk5xg.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295375/Website%20Content/Lookbook/2019imgBig-3_bkzugv_qbi2wg.png"
              alt=""
            />
          </div>
          <label className="label-2019">2019</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295375/Website%20Content/Lookbook/2019imgsmall-1_iss40h_wufxtt.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295625/Website%20Content/Lookbook/2019imgsmall-2_xpxe3n_dwaluh.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295750/Website%20Content/Lookbook/2019imgsmall-3_kcne8y_tbacta.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650296002/Website%20Content/Lookbook/2019imgsmall-4_mfy71g_exzoj5.png"
              alt=""
            />
          </div>
        </div>
        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650299990/Website%20Content/Lookbook/2018imgBig-1_kgi3rl_gsqeii.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650299991/Website%20Content/Lookbook/2018imgBig-2_bxok8m_ovs45x.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300143/Website%20Content/Lookbook/2018imgBig-3_lnzahc_qrm8xb.png"
              alt=""
            />
          </div>
          <label className="label-2018">2018</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300361/Website%20Content/Lookbook/2018imgsmall-1_v3yjp7_umurdc.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-2_sckaqk_qug9zu.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-3_snevbl_en8zbq.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-4_o6zmqf_goyylx.png"
              alt=""
            />
          </div>
        </div>

        <div className="year2019-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300657/Website%20Content/Lookbook/2018LiveimgBig-1_gevdsv_qirkeg.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300656/Website%20Content/Lookbook/2018LiveimgBig-2_lfpidb_bjuq5x.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300656/Website%20Content/Lookbook/2018LiveimgBig-3_pyixwg_tmck46.png"
              alt=""
            />
          </div>
          <label className="label-2019">2018 Live</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300865/Website%20Content/Lookbook/2018Liveimgsmall-1_soelbw_c3vmhm.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300865/Website%20Content/Lookbook/2018Liveimgsmall-2_ppmqch_g8igoe.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300865/Website%20Content/Lookbook/2018Liveimgsmall-3_a6jwxa_npzvvg.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300866/Website%20Content/Lookbook/2018Liveimgsmall-4_xjehpv_gohgm7.png"
              alt=""
            />
          </div>
        </div>


        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301155/Website%20Content/Lookbook/2017imgBig-1_as5lmq_pvhfes.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301155/Website%20Content/Lookbook/2017imgBig-2_rapm6y_cjipvr.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301155/Website%20Content/Lookbook/2017imgBig-3_jpefuv_ndmcq9.png"
              alt=""
            />
          </div>
          <label className="label-2018">2017</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301338/Website%20Content/Lookbook/2017imgsmall-1_nfrexm_u2upct.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301338/Website%20Content/Lookbook/2017imgsmall-2_tsxnxl_c0mq0x.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301338/Website%20Content/Lookbook/2017imgsmall-3_mpcvwk_lkjhet.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301339/Website%20Content/Lookbook/2017imgsmall-4_snlkof_t6psx2.png"
              alt=""
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Lookbook;
