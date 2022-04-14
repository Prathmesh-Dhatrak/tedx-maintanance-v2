import React from "react";
import "./Creatives.scss";
import grid from "../../images/WhiteGrid.svg";
const Creatives = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return <div style={pageStyle}>Creatives</div>;
};

export default Creatives;
