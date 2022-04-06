import React from "react";
import "./Footer.scss";
import logo from "../../images/Header/logo_light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logoSection">
        <div className="footer-logo">
          <Link>
            <img src={logo} alt={"TEDx Logo"} />
          </Link>
        </div>
        <div className="footer-newsletterBTN">
          <a href='/'>Join Our Newsletter</a>
          <p>
            Be the first to hear from us,
            <br /> you can unsubscribe our update any time you want.
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
            <p>Main Event</p>
            <p>Countdown</p>
            <p>Partners</p>
            <p>Privacy Policy</p>
          </ul>
          <div className="footer-privacyLine">
            <p>About TEDxVITPune</p>
          </div>
        </div>
        <div className="footer-contactSection">
          <h2>Contact</h2>
          <p>tedxvitpune@gmail.com</p>
          <div className="footer-tedLine">
            <p>TEDxVITPune</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
