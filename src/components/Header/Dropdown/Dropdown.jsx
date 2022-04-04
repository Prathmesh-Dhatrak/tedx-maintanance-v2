import React, { useState } from "react";
// import { MenuItems } from "./MenuItems";
import "./Dropdown.scss";
import { Link } from "react-router-dom";
const MenuItems = [
  {
    title: "Marketing",
    path: "/marketing",
    cName: "dropdown-link",
  },
  {
    title: "Consulting",
    path: "/consulting",
    cName: "dropdown-link",
  },
  {
    title: "Design",
    path: "/design",
    cName: "dropdown-link",
  },
  {
    title: "Development",
    path: "/development",
    cName: "dropdown-link",
  },
];
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? `dropdown-menu clicked` : `dropdown-menu`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
