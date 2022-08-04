import React from "react";
import "./NewsletterSignup.scss";
const NewsletterSignup = () => {
  return (
    <div className="NewsletterSignup-wrapper">
      <form action="https://submit-form.com/B8QxSzbY" className="card-content">
        <div className="container">
          <div className="image">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1644679360/Asset_2_xbmolu.png"
              width="300"
              height="183"
              alt=""
            />
          </div>
          <h1>Subscribe</h1>
          <p>Subscribe to our newsletter and stay updated.</p>
        </div>
        <div className="form-input">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            required
          />
          <button className="subscribe-btn" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
