import React from "react";
import "./Gallery.scss";
import { ImgBig, ImgSmall } from "../../images/Gallery";
const Gallery = () => {
  return (
    <div className="gallery-conatiner">
      <div className="year2019-container">
        <div className="gallery-3img-column">
          <img src={ImgBig} alt="" />
          <img src={ImgBig} alt="" />
          <img src={ImgBig} alt="" />
        </div>
        <label className="label-2019">2019</label>
        <div className="gallery-4img-column">
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
        </div>
      </div>
      <div className="year2018-container">
        <div className="gallery-3img-column">
          <img src={ImgBig} alt="" />
          <img src={ImgBig} alt="" />
          <img src={ImgBig} alt="" />
        </div>
        <label className="label-2018">2018</label>
        <div className="gallery-4img-column">
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
          <img src={ImgSmall} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
