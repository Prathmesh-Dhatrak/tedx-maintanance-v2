import React from "react";
import "./NewsletterSignup.scss";
const NewsletterSignup = () => {
  return (
    <div class="NewsletterSignup-wrapper">
      <form action="https://submit-form.com/B8QxSzbY" class="card-content">
        <div class="container">
          <div class="image">
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
        <div class="form-input">
          <label for="email"></label>
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            required=""
          />
          <button class="subscribe-btn" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
