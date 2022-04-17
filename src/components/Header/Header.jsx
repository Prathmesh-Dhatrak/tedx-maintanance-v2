import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { LogoDark, LogoLight } from "../../images/Header";
import "./Header.scss";

const navData = [
  "Home",
  "About",
  "Endeavour",
  "Lookbook",
  "Partners",
  "Creatives",
];

const Header = ({ dark }) => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink
              exact
              activeClassName={dark ? "is-active-white" : "is-active-black"}
              to={`/`}
            >
              <img src={dark ? LogoLight : LogoDark} alt={"TEDx Logo"}></img>
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{
                      display: "none",
                      color: dark && !isResponsiveclose ? "white" : "black",
                    }}
                    onClick={toggleClass}
                  >
                    <FiXCircle />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{
                      display: "none",
                      color: dark && !isResponsiveclose ? "white" : "black",
                    }}
                    onClick={toggleClass}
                  >
                    <FiAlignRight />
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                {navData.map((navitem, index) => {
                  return (
                    <li className="menu-item" key={index}>
                      <NavLink
                        exact
                        activeClassName={
                          dark ? "is-active-white" : "is-active-black"
                        }
                        onClick={toggleClass}
                        to={navitem === "Home" ? `/` : `/` + navitem}
                        style={{
                          color: dark ? "#aaaaaa" : "#474747",
                          fontStyle: "normal",
                        }}
                      >
                        {navitem}
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link
                    to={"/Contact"}
                    style={{
                      color: dark ? "#aaaaaa" : "#474747",
                      fontStyle: "normal",
                    }}
                  >
                    More <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName={
                          dark ? "is-active-white" : "is-active-black"
                        }
                        to={`/Contact`}
                        style={{
                          color: "#000",
                        }}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName={
                          dark ? "is-active-white" : "is-active-black"
                        }
                        to={`/Privacy`}
                        style={{
                          color: "#000",
                        }}
                      >
                        Privacy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName={
                          dark ? "is-active-white" : "is-active-black"
                        }
                        to={`/Faqs`}
                        style={{
                          color: "#000",
                        }}
                      >
                        FAQs
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/`}
                    className="button"
                  >
                    <button
                      style={{
                        backgroundColor: dark ? "#fff" : "#E62B1E",
                        color: dark ? "#E62B1E" : "#fff",
                      }}
                    >
                      Register
                    </button>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
