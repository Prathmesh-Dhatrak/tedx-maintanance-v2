import React from "react";
import grid from "../../images/WhiteGrid.svg";
const Blog = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return <div  style={pageStyle}>Blogs</div>;
};

export default Blog;

