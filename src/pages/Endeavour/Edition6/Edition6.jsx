import React from "react";
import "./Edition6.scss";

const Edition6 = (dark) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage:
      'url("https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/Grid_fo4iyy.svg")',
  };
  return (
    <div className="container-6" style={pageStyle}>
      <div className="img-background">
        <img
          className="img-up"
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651488361/Website%20Content/Endevaour/Edition6/edition_6_c3iltc.png"
          alt="background"
        />
        <div className="heading">
          <h2>Remergence | 2021</h2>
        </div>
      </div>

      <p>
        Shift the perspective. Reemerge in a better, stronger, and altogether
        different way, keeping in mind the roots that helped us get to where we
        are today. Reemergence is about celebrating the human spirit that rises
        through darkness and disseminates hope
      </p>
      <p>
        The celerity with which the modern world is moving and evolving is
        unprecedented and change seems to be the sole option. And accepting
        change is accepting a new beginning. There's a desire to rise and start
        again with a new perspective, with a stronger will and an arsenal of
        ideas. That's how we leave behind these prevalent dark times. Because
        hope gives way to change.
      </p>

      <div className="speakers-class">
        <h2>Speakers and Performers:</h2>
        <div className="performers">
          <h3>Jishnu Chatterjee</h3>
          <p>Animator. Motion Designer. Visual Artist.</p>
        </div>

        <div className="performers">
          <h3>Vivek Eluri</h3>
          <p>Healthcare Consultant. Tech Analyst. Leader.</p>
        </div>

        <div className="performers">
          <h3>Mark Hannant</h3>
          <p>Adventurer. Author. Entrepreneur.</p>
        </div>

        <div className="performers">
          <h3>Amira Gill</h3>
          <p>Music Therapist. Songwriter. Vocalist.</p>
        </div>

        <div className="performers">
          <h3>Prabhtoj Singh</h3>
          <p>Music Producer. Singer. Songwriter.</p>
        </div>

        <div className="performers">
          <h3>Debanshu Roy</h3>
          <p>Health Economist. Health-Tech Consultant. Ideator.</p>
        </div>

        <div className="performers">
          <h3>Avinash Ramanathan</h3>
          <p>Venture Capitalist. Strategist. Associate.</p>
        </div>

        <div className="performers_title">
          <h2>Team</h2>
        </div>

        <div className="performers-flex">
          <div className="performers-flex-left">
            <h3>Organiser</h3>
            <p>Vikrant Bhalerao</p>
          </div>
          <div className="performers-flex-right">
            <h3>Co-Organiser</h3>
            <p>Shreya Singh</p>
          </div>
        </div>
      </div>

      <div className="titleee">
        <h2>The stage where it unfolded!</h2>
      </div>

      <img
        src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650216151/Website%20Content/Creatives/moodMonthImg_gji3qt.svg"
        alt="imgggg"
      />
    </div>
  );
};

export default Edition6;
