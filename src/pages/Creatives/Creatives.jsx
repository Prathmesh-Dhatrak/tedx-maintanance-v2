import React from "react";
import "./Creatives.scss";
const Creatives = ({ dark }) => {
  return (
    <div className="creatives-container">
      <div className="container">
        <div className="communityNewsletter-section">
          <h1>Community Newsletter: Syndicate Bimonthly</h1>
          <img
            src={`https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301722/Website%20Content/Creatives/firstSection_sqen7c_ygkipc.svg`}
            alt=""
          />
          <p>
            Our community newsletters are a recipe of handpicked words and
            freshly taken content, best of all served very frequently! This is
            to have you engaged and packed with information all around from news
            to songs and movies. We at TEDxVITPune make sure our audience shall
            not just remain as mere spectators but stay equipped and ready with
            ideas packed to serve conception for change and the future. <br />
            <br /> From informative bulletins for a touch of local happenings to
            other fun segments like our hand-picked recommendations, the
            community newsletter aims at curating bits according to everyone's
            liking!
          </p>
        </div>
        <div className="moodMonth-section">
          <h1>Sections:</h1>
          <h4>Mood of the Month</h4>
          <img
            src={`https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650216151/Website%20Content/Creatives/moodMonthImg_gji3qt.svg`}
            alt=""
          />
          <h6>A mindful quote to get your day off to a great start!</h6>
          <h4>The Bulletin</h4>
          <h6>
            With informative bits and local headlines, this is your dose of the
            latest news.
          </h6>
          <h4>Don’t Look Closely</h4>
          <img
            src={`https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650216477/Website%20Content/Creatives/moodMonthImg2_h2jzhk.svg`}
            alt=""
          />
          <h6>
            Keen on partaking in a fun quiz? Don’t worry, we’ve got you covered.
          </h6>
          <h4>Your Insightful Neighbourhood</h4>
          <h6>
            Read about the captivating ideas that come from our very own
            community!
          </h6>
          <h4>Our Picks</h4>
          <h6>
            TED talks are curated from a myriad of phenomenal ideas, especially
            for you.
          </h6>
          <h4>Our Picks</h4>
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650216794/Website%20Content/Creatives/picksImg_jzevwz.svg"
            alt=""
          />
          <h6>
            Take a glance into our vault of close-to-heart recommendations
            filled with fun bits like movies, podcasts, books, and blog
            suggestions!
          </h6>
          <h4>Insider Stories: TEDxVITPune</h4>
          <h6>
            From engaging campaigns to exuberant events, 'Insider Stories'
            provides you with a glimpse of the current happenings at
            TEDxVITPune.
          </h6>
          <div className="subscribe-class">
            <h4>
              Subscribe to the monthly newsletter today!
              <br />
            </h4>
            <a href="/">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
