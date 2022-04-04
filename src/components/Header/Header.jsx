import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { LogoDark, LogoLight } from "../../images/Header";
import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
const Header = ({ dark }) => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/");
  };

  const options = [
    { label: "More", value: "", hide: true },
    { label: "Privacy", value: "privacy", hide: false },
    { label: "Faqs", value: "faqs", hide: false },
  ];
  return (
    <header
      className={classes.header}
      style={{
        backgroundColor: dark ? "#111111" : "#fff",
        color: dark ? "#fff" : "#000",
      }}
    >
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <img src={dark ? LogoLight : LogoDark} alt={"TEDx Logo"}></img>
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link id="link" to="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link id="link" to="/about" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
            <li>
              <Link id="link" to="/partners" onClick={menuToggleHandler}>
                Partners
              </Link>
            </li>
            <li>
              <Link id="link" to="/contact" onClick={menuToggleHandler}>
                Contact
              </Link>
            </li>
            <li>
              <Dropdown
                options={options}
                dark={dark}
                // onChange={handleChange}
              />
            </li>
          </ul>
          <button
            style={{
              backgroundColor: dark ? "#fff" : "#E62B1E",
              color: dark ? "#E62B1E" : "#fff",
            }}
            onClick={ctaClickHandler}
          >
            Register
          </button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};
const Dropdown = ({ label, options, dark }) => {
  return (
    <label>
      <select
        // onChange={onChange}
        className={classes.dropdown}
        style={{
          backgroundColor: dark ? "#111111" : "#fff",
          color: dark ? "#fff" : "#000",
        }}
      >
        {options.map((option) => (
          <option key={option.value} hidden={option.hide} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Header;
