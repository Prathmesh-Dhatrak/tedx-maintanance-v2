import React from "react";
import grid from "../../images/WhiteGrid.svg";

const Newsletter = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return <div style={pageStyle}>Newsletter</div>;
};

export default Newsletter;

