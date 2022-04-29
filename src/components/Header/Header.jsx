import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { LogoDark, LogoLight } from "../../images/Header";
import "./Header.scss";

const navData1 = ["Home", "About"];
const navData2 = ["Lookbook", "Partners", "Creatives"];

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

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };

  let boxClassSubMenu2 = ["sub__menus2"];
  if (isMenuSubMenu2) {
    boxClassSubMenu2.push("sub__menus__Active2");
  } else {
    boxClassSubMenu2.push("");
  }

  return (
    <header className="container">
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
            {navData1.map((navitem, index) => {
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
              onClick={toggleSubmenu2}
              className="menu-item sub__menus__arrows"
            >
              <Link
                to={"/endeavour"}
                style={{
                  color: dark ? "#aaaaaa" : "#474747",
                  fontStyle: "normal",
                }}
              >
                Endeavour <FiChevronDown />
              </Link>
              <ul className={boxClassSubMenu2.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/community-conversations`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Community Conversations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/unfold`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Unfold
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition6`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 6
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition5`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 5
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition4`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 4
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition3`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition2`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName={
                      dark ? "is-active-white" : "is-active-black"
                    }
                    to={`/edition1`}
                    style={{
                      color: "#000",
                    }}
                  >
                    Edition 1
                  </NavLink>
                </li>
              </ul>
            </li>
            {navData2.map((navitem, index) => {
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
            <li className="menu-item">
              <NavLink
                onClick={toggleClass}
                activeClassName={dark ? "is-active-white" : "is-active-black"}
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
    </header>
  );
};

export default Header;
