import React from "react";
import "./Endeavour.scss";
import grid from "../../images/WhiteGrid.svg";
const Endeavour = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return <div style={pageStyle}>Endeavour</div>;
};

export default Endeavour;
