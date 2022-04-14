import React from "react";
import styles from "./About.module.scss";
import grid from "../../images/WhiteGrid.svg";

import ted from "../../images/Aboutpages/ted.svg";
import tedx from "../../images/Aboutpages/tedx.svg";
import tedxVit from "../../images/Aboutpages/tedxVit.svg";
import redLine from "../../images/Aboutpages/redLine.svg";
// import ABout1 from "../../images/Aboutpages/about1.png";
// import LineSVG from "../../images/Aboutpages/line.svg";
// import LineMobile from "../../images/Aboutpages/line-mobile.svg";
// import About2 from "../../images/Aboutpages/about2.jpg";
// import About3 from "../../images/Aboutpages/about3.png";
// import About4 from "../../images/Aboutpages/about4.png";

const About = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <>
      <div className="AboutPage" style={pageStyle}>
        {/*<!-- About Us Section -->*/}

        <div className={styles.new_aboutus_section}>
          <div className={styles.image_about}>
            <div className={styles.about_1_wrapper}>
              <h1>About Us</h1>
              <p>
                In the spirit of Ideas Worth Spreading, we, at TEDxVITPune,
                solely believe in the power of ideas to change attitudes, lives,
                and ultimately, the world at large. We're bringing together
                people from all different walks of life to come, confer and
                confabulate ideas in whole different dimensions
              </p>
            </div>
          </div>
        </div>

        <div className={styles.new_about_ted}>
          <div className={styles.new_about_ted_left}>
            <h1>What is</h1>

            <img src={ted} alt="ted" />

            <p>
              TED is a non-profit organisation devoted to Ideas Worth Spreading.
              It started as a four-day conference in California 30 years ago,
              believing passionately in the power of ideas to change attitudes,
              and lives and welcoming people from every discipline and culture
              who seek a deeper understanding of the world.
            </p>
          </div>

          <div className={styles.new_about_ted_right}>
            <div className={styles.redLine_img}>
              <img src={redLine} alt="redLine" />
            </div>
            <p>
              Today, the two annual TED Conferences invite the world's leading
              thinkers and doers to speak for 18 minutes or less and the total
              events conducted till now are more than 6000. Many of these talks
              are then made available, free, at TED.com in more than a 100
              languages.
            </p>

            <p>
              This has led to a global community focused on change through the
              power of ideas, thus forming a trinity of ideas from- Technology,
              Entertainment, and Design, and has recently taken up a broader
              scope ranging from science and business to global issues in more
              than a 100 languages.
            </p>
          </div>
        </div>

        <div className={styles.new_about_tedx}>
          <div className={styles.new_about_tedx_left}>
            <div className={styles.tedx_redLine_img}>
              <img src={redLine} alt="redLine" />
            </div>
            <p>
              In the spirit of ideas worth spreading, TEDx is a TED-created
              program of local, self-organised events that bring people together
              to share a TED-like experience. These events are open-source and
              local-community driven organised by passionate individuals who
              seek to uncover new ideas and share the latest research in their
              local areas that spark conversations in their communities and
              ultimately elevate them to a global stage.
            </p>
          </div>

          <div className={styles.new_about_tedx_right}>
            <h1>What is</h1>

            <img src={tedx} alt="tedx" />

            <p>
              TEDx events aim to integrate ideas from every nook and corner of
              the world, thus, extending the boundaries of views and ideas.
            </p>
            <p>
              Our event is named TEDxVITPune, where x= independently organised
              TED event. The TED Conference provides general guidance for the
              TEDx program, but individual TEDx events, including ours, are
              self-organised.
            </p>
          </div>
        </div>

        <div className={styles.new_tedxVitpune}>
          <div className={styles.new_tedxVitpune_flex}>
            <div className={styles.new_tedxVitpune_flex_left}>
              <h1>What is</h1>

              <img src={tedxVit} alt="ted" />
            </div>

            <div className={styles.new_tedxVitpune_flex_right}>
              <img src={redLine} alt="redLine" />
            </div>
          </div>

          <p>
            TEDxVITPune was among the first TEDx events in Pune and has grown to
            be a premier platform for furthering TED's mission of 'Ideas Worth
            Spreading', within its local community. Over the past eight events,
            TEDxVITPune has brought together visionaries, thinkers, and doers of
            different disciplines from around the country to create a one-day
            event filled with ideas and discussions that contribute to
            meaningful change.
          </p>

          <p>
            The event has hosted the likes of Amira Gill, Avinash Ramanathan,
            Debanshu Roy, Jishnu Chatterjee, Mark Hannant, Ajit Kembhavi,
            Avinash Dharmadhikari, Niranjan Pedanekar. Cumulatively, the event
            has garnered an extensive following around the country and has been
            recognized as an exemplary TEDx event in India.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
