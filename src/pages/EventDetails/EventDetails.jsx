import React from "react";
import "./EventDetails.scss";
const grid =
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg";

const Map = ({ dark }) => {
  return (
    <div
      className="map-container"
      style={{
        backgroundImage: 'url("' + grid + '")',
        backgroundColor: dark ? "dark" : "white",
      }}
    >
      <div className="container">

        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652772322/Website%20Content/EventDetails/ComingSoon_mbp7w5.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Map;
