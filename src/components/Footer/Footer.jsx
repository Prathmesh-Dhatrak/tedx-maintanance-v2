import React from "react";
import "./Footer.scss";
import logo from "../../images/Header/logo_light.png";
import { Link } from "react-router-dom";
import linkedin from "../../images/Footer/LinkedIn.svg";
import Insta from "../../images/Footer/Insta.svg";
import Twitter from "../../images/Footer/Twitter.svg";
import Meta from "../../images/Footer/Meta.svg";
import Youtube from "../../images/Footer/YouTube.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logoSection">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt={"TEDx Logo"} />
          </Link>
        </div>
        <div className="footer-newsletterBTN">
          <a href="/">Join Our Newsletter</a>
          <p>
            Be the first to hear from us,you can unsubscribe our update any time
            you want.
          </p>
        </div>
        <div className="footer-aboutLine">
          <p>This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
      <div className="footer-section2">
        <div className="footer-exploreSection">
          <h2>Explore</h2>
          <ul>
            <p>
              <Link to="/">Main Event 2022</Link>
            </p>
            <p>
              <Link to="/Lookbook">Lookbook</Link>
            </p>
            <p>
              <Link to="/Partners">Partners</Link>
            </p>
            <p>
              <Link to="/Privacy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/">TEDxVITPune Newsletter</Link>
            </p>
            <p>
              <Link to="/">Community Conversations</Link>
            </p>
          </ul>
          <div className="footer-privacyLine">
            <p>
              <Link to="/About">About TEDxVITPune</Link>
            </p>
          </div>
        </div>
        <div className="footer-contactSection">
          <h2>Contact</h2>
          <p>tedxvitpune@gmail.com</p>
          <div className="footer-tedLine">
            <p>
              <Link to="/">TEDxVITPune</Link>
            </p>
          </div>

          <div className="icons">
            <ul>

              <li>
                <a href="https://www.facebook.com/TEDxVITPune" rel="noopener noreferrer" target="_blank">
                  <img src={Meta} alt="Meta" />
                </a>

              </li>

              <li>
                <a href="https://www.instagram.com/tedxvitpune" rel="noopener noreferrer" target="_blank">
                  <img src={Insta} alt="Insta" />
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/TEDxVITPune" rel="noopener noreferrer" target="_blank">
                  <img src={Twitter} alt="Twitter" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/company/tedxvitpune/" rel="noopener noreferrer" target="_blank">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </li>

              <li>
              <a href="https://www.youtube.com/c/TEDxVITPune" rel="noopener noreferrer" target="_blank">
                <img src={Youtube} alt="utube" />
              </a>
            </li>

            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
