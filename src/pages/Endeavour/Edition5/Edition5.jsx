import React from "react";
import "./Edition5.scss";
const Edition5 = (dark) => {
  const pageStyle = {
    backgroundColor: dark ? "white" : "black",
    backgroundImage:
      'url("https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg")',
  };
  return (
    <div className="container-5" style={pageStyle}>
      <img
        src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651518051/Website%20Content/Endevaour/Edition%205/tedx_jln8po.png"
        alt="imgggg"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="heading">
        <h2>Unravelling the Parallax | 2019</h2>

      </div>

      <p>
        Forming new connections by questioning existing ones and discovering
        revelations right in front of us. A 'Parallax' is the property of having
        two different lines of sight from which an object can be viewed. And
        Unravelling the Parallax grants us the ability to shed light on these
        endless possibilities that lie on the horizon waiting to be approached
        and seen from multiple perspectives.
      </p>
      <p>
        The nature of this world seems contrasting, self-conflicting, and
        ever-changing. If it weren't for the parallax, the mysteries of the
        universe would remain untouched.
      </p>

      <div className="speakers-class">
        <h2>Speakers and Performers:</h2>
        <img className="speakers-img" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651524298/Website%20Content/Endevaour/Edition%205/Cyan_Line_awp2kl.svg" alt="cyan-line"/>
        <div className="performers">
          <h3>Niranjan Pedanekar </h3>
          <p>AI Scientist. Dramatist. Experimentalist.</p>
        </div>

        <div className="performers">
          <h3>Arjuna Srinidhi</h3>
          <p>Author. Policy Researcher. Climate Change Expert.</p>
        </div>

        <div className="performers">
          <h3>Annushka Hardikar</h3>
          <p>Illustrator. Visual Artist. Storyteller.</p>
        </div>

        <div className="performers">
          <h3>Ajit Kembhavi</h3>
          <p>Astrophysicist. Theorist. Visionary.</p>
        </div>

        <div className="performers">
          <h3>Avinash Dharmadhikari</h3>
          <p>Ex-IAS Officer. Educationalist. Activist.</p>
        </div>

        <div className="performers">
          <h3>Nupur Dhakephalkar</h3>
          <p>Clinical Psychologist. Entrepreneur. Educator.</p>
        </div>

        <div className="performers">
          <h3>Kunal Jagwani</h3>
          <p>Strategist. Restaurateur. Game Changer.</p>
        </div>

        <div className="performers">
          <h3>Vinay Kaushal</h3>
          <p>Composer. Guitarist. Music Educator.</p>
        </div>

        <div className="performers">
          <h3>Tanisha Murarka</h3>
          <p>Content Creator. Poet. Writer.</p>
        </div>

        <div className="performers_title">
          <h2>Team</h2>
          <img className="red_line" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651524298/Website%20Content/Endevaour/Edition%205/red_line_nkdrdi.svg" alt="red line" />
        </div>

        <div className="performers-flex">
          <div className="performers-flex-left">
            <h3>Organiser</h3>
            <p>Sagnik Sen Sarma </p>
          </div>
          <div className="performers-flex-right">
            <h3>Co-Organiser</h3>
            <p>Deboshree Roy</p>
          </div>
        </div>
      </div>

      <div className="titleee">
        <h2>The stage where it unfolded!</h2>
      </div>

      <div className="edition5-img">
      <img
        src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651517949/Website%20Content/Endevaour/Edition%205/49920118392_ae77f18b39_o_yhpakq.jpg"
        alt="imgggg"
      />
      </div>
      
    </div>
  );
};

export default Edition5;