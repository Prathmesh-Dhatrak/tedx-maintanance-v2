import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logoSection">
        <div className="footer-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021429/Website%20Content/Header/logo_light_zsvjxz.png"
              alt={"TEDx Logo"}
            />
          </Link>
        </div>
        <div className="footer-newsletterBTN">
          <Link to="/newsletter-signup">Join Our Newsletter</Link>
          <p>
            Be the first one to hear from us! You can unsubscribe our update any
            time you want.
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
              <Link to="/creatives">TEDxVITPune Newsletter</Link>
            </p>
            <p>
              <Link to="/endeavour/community-conversations">
                Community Conversations
              </Link>
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
          <p>
            <a href="mailto:tedx@vit.edu" target="_blank" rel="noreferrer">
              tedx@vit.edu
            </a>
          </p>
          <p>
            Niharika Rathi:
            <a href="tel:+919689898018" target="_blank" rel="noreferrer">
              {" "}
              +91 (968) 98 98018
            </a>
          </p>
          <div className="footer-tedLine">
            <p>
              <Link to="/"></Link>
            </p>
          </div>

          <div className="icons">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/TEDxVITPune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021457/Website%20Content/Footer/Meta_nfi6jb.svg"
                    alt="Meta"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/tedxvitpune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021457/Website%20Content/Footer/Insta_oqrxwy.svg"
                    alt="Instagram"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.twitter.com/TEDxVITPune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021457/Website%20Content/Footer/Twitter_ml0nwl.svg"
                    alt="Twitter"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/tedxvitpune/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021457/Website%20Content/Footer/LinkedIn_zg35zd.svg"
                    alt="Linkedin"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/c/TEDxVITPune"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021457/Website%20Content/Footer/YouTube_ykbsyi.svg"
                    alt="youtube"
                  />
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
