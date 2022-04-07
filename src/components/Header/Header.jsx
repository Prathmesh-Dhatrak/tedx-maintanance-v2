import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { LogoDark, LogoLight } from "../../images/Header";
import "./Header.scss";

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
      <div
        className="container"
        style={{
          backgroundColor: dark ? "#111111" : "#fff",
          color: dark ? "#fff" : "#000",
        }}
      >
        <div
          className="row"
          style={{
            backgroundColor: dark ? "#111111" : "#fff",
            color: dark ? "#fff" : "#000",
          }}
        >
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img src={dark ? LogoLight : LogoDark} alt={"TEDx Logo"}></img>
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav
              className="main-nav "
              style={{
                backgroundColor: dark ? "#111111" : "#fff",
                color: dark ? "#fff" : "#000",
              }}
            >
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiXCircle />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiAlignRight />
                  </span>
                </>
              )}

              <ul
                className={boxClass.join(" ")}
                style={{
                  backgroundColor: dark ? "#111111" : "#fff",
                  color: dark ? "#fff" : "#000",
                }}
              >
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/About`}
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Partners`}
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                  >
                    Partners
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link
                    to="#"
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                  >
                    More <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
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
                        activeClassName="is-active"
                        to={`/Faqs`}
                        style={{
                          color: "#000",
                        }}
                      >
                        Faqs
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
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
