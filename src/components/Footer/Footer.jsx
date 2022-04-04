import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../images/Header/logo_light.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="setup">
        <div className="footer-col-1">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="newsletter-button">
            <button>Join Our Newsletter</button>
          </div>

          <span className="para-text">
            <p>
              Be the first to hear from us, you can unsubscribe our update any
              time you want.
            </p>
          </span>

          <span className="para-text-1">
            <p>
              This independent TEDx event is operated under license from TED.
            </p>
          </span>
        </div>

        <div className="footer-col-2">
          <div className="wrapper">
            <div className="label-head">
              <span>Explore</span>
            </div>

            <ul className="links">
              <li>
                <Link className="link-style" to="/">
                  Main Event
                </Link>
              </li>
              <li>
                <Link className="link-style" to="/">
                  Countdown
                </Link>
              </li>
              <li>
                <Link className="link-style" to="/about-us">
                  About TedxVITPune
                </Link>
              </li>
              <li>
                <Link className="link-style" to="/partners">
                  Partners
                </Link>
              </li>

              <li>
                <Link className="link-style" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="wrapper">
            <div className="label-head">
              <span>Contact</span>
            </div>

            <ul className="links">
              <li>
                <Link className="link-style" to="/">
                  tedxvitpune@gmail.com
                </Link>
              </li>
            </ul>

            <span className="footer-text">
              <p>TEDxVITPune</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
