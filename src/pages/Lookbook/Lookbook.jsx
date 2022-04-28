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

        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651141509/Website%20Content/Lookbook/2020imgBig-1_nmq9ee.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651141525/Website%20Content/Lookbook/2020imgBig-2_aj9c3y.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651141526/Website%20Content/Lookbook/2020imgBig-3_gaas3a.png"
              alt=""
            />
          </div>
          <label className="label-2018">2021</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295625/Website%20Content/Lookbook/2019imgsmall-2_xpxe3n_dwaluh.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651055918/Website%20Content/Lookbook/Maskgroup_wtscz3.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651056029/Website%20Content/Lookbook/Mask_group_g0jjug.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300361/Website%20Content/Lookbook/2018imgsmall-1_v3yjp7_umurdc.png"
              alt=""
            />
          </div>
        </div>

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
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300143/Website%20Content/Lookbook/2018imgBig-3_lnzahc_qrm8xb.png"
              alt=""
            />
          </div>
          <label className="label-2019">2019</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300865/Website%20Content/Lookbook/2018Liveimgsmall-1_soelbw_c3vmhm.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295750/Website%20Content/Lookbook/2019imgsmall-3_kcne8y_tbacta.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-3_snevbl_en8zbq.png"
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
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650299991/Website%20Content/Lookbook/2018imgBig-2_bxok8m_ovs45x.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301155/Website%20Content/Lookbook/2017imgBig-1_as5lmq_pvhfes.png"
              alt=""
            />

            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651056962/Website%20Content/Lookbook/edxxxxx_ogkunh.png"
              alt=""
            />
          </div>
          <label className="label-2018">2018</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301339/Website%20Content/Lookbook/2017imgsmall-4_snlkof_t6psx2.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-2_sckaqk_qug9zu.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651057470/Website%20Content/Lookbook/beard_zy2xqt.png"
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
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295375/Website%20Content/Lookbook/2019imgBig-3_bkzugv_qbi2wg.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300656/Website%20Content/Lookbook/2018LiveimgBig-3_pyixwg_tmck46.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651057753/Website%20Content/Lookbook/photo_fdcbjf.png"
              alt=""
            />
          </div>
          <label className="label-2019">2018 Live</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651057897/Website%20Content/Lookbook/Rectangle_bay0kx.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058034/Website%20Content/Lookbook/rectangle_n3z7k6.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058232/Website%20Content/Lookbook/Rectangle_39_obmjs7.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058288/Website%20Content/Lookbook/Rectangle_40_ywuvrr.png"
              alt=""
            />
          </div>
        </div>

        <div className="year2018-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058468/Website%20Content/Lookbook/vittt_bjeabq.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058466/Website%20Content/Lookbook/maheshk_idaczz.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300657/Website%20Content/Lookbook/2018LiveimgBig-1_gevdsv_qirkeg.png"
              alt=""
            />
          </div>
          <label className="label-2018">2017</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058933/Website%20Content/Lookbook/Mask_group_ndet3o.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058934/Website%20Content/Lookbook/Mask_group_1_md4rmn.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058933/Website%20Content/Lookbook/Rectangle_41_r0cwqi.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651058934/Website%20Content/Lookbook/Mask_group_2_ro8p2s.png"
              alt=""
            />
          </div>
        </div>

        <div className="year2019-container">
          <div className="gallery-3img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059098/Website%20Content/Lookbook/Mask_group_vnciuf.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059098/Website%20Content/Lookbook/Mask_group_1_i2mjgy.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059098/Website%20Content/Lookbook/Rectangle_35_rnw9ts.png"
              alt=""
            />
          </div>
          <label className="label-2019">2016</label>
          <div className="gallery-4img-column">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059222/Website%20Content/Lookbook/Mask_group_nqju9z.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059222/Website%20Content/Lookbook/Mask_group_1_ypq9zz.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059222/Website%20Content/Lookbook/Mask_group_2_pb0gan.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651059222/Website%20Content/Lookbook/Mask_group_3_d4zwel.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
