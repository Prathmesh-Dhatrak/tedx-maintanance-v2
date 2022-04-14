import React from "react";
import styles from "./About.module.scss";
import ABout1 from "../../images/Aboutpages/about1.png";
import LineSVG from "../../images/Aboutpages/line.svg";
import LineMobile from "../../images/Aboutpages/line-mobile.svg";
import About2 from "../../images/Aboutpages/about2.jpg";
import About3 from "../../images/Aboutpages/about3.png";
import About4 from "../../images/Aboutpages/about4.png";
import grid from "../../images/WhiteGrid.svg";
const About = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <>
      <div className="AboutPage" style={pageStyle}>
        {/*<!-- About Us Section -->*/}

        <div className={styles.aboutUs_wrapper}>
          <div className={styles.aboutUs_wrapper_left}>
            <img src={ABout1} alt="About1" />
          </div>

          <div className={styles.aboutUs_wrapper_right}>
            <h1>About Us</h1>
            <p>
              We believe passionately in the power of ideas to change attitudes,
              lives and ultimately, the world.
            </p>
            <p>
              So we’re building here a clearinghouse that offers free knowledge
              and inspiration from the world’s most inspired thinkers, and also
              a community of curious souls to engage with ideas and each other.
            </p>

            <div className={styles.line}>
              <img src={LineSVG} alt="LineSVG" />
            </div>
          </div>
        </div>

        {/*<!-- About Section TED -->*/}
        <div className={styles.ted_wrapper}>
          <h1>What is TED? </h1>

          <div className={styles.ted_line}>
            <img src={LineMobile} alt="line-mobile" />
          </div>

          <div className={styles.ted_para}>
            <div className={styles.ted_para_left}>
              <p>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. Today, the two annual TED Conferences invite the
                world's leading thinkers and doers to speak for 18 minutes or
                less. Many of these talks are then made available, free, at
                TED.com in more than 100 languages.
              </p>
            </div>
            <div className={styles.ted_para_right}>
              <p>
                {" "}
                This has led to a global community focused on change through the
                power of ideas, bringing together the best from three worlds –
                Technology, Entertainment and Design and has recently taken up a
                broader scope ranging from science and business to global
                issues.
              </p>
            </div>
          </div>

          <button className={styles.btn_1}>
            <a href="https://ted.com">
              <span>Visit ted.com</span>
            </a>
          </button>
        </div>

        {/*<!-- what is tedx new-->*/}
        <div className={styles.about_tedx_news}>
          <div className={styles.about_tedx_left}>
            <img src={About2} alt="About2" />
          </div>
          <div className={styles.about_tedx_right}>
            <h2>What is TEDx ?</h2>

            <div className={styles.aboutus_line}>
              <img src={LineSVG} alt="Line" />
            </div>

            <p>
              In the spirit of ideas worth spreading, TEDx is a TED created
              program of local, self-organized events that bring people together
              to share a TED-like experience. These events are open-source and
              community driven that inspire innovation, through leadership and
              visionary insight.
            </p>
            <p>
              Our event is named TEDxVITPune, where x = independently organized
              TED event. The TED conference provides general guidance for the
              TEDx program, but individual TEDx events, including ours, are
              self-organized.
            </p>
          </div>
        </div>

        {/*<!-- TedxVITPune Section -->*/}
        <div className={styles.about_tedx_section_wrapper}>
          <div className={styles.about_section_wrapper_left}>
            <h2>TEDxVITPune</h2>

            <div className={styles.about_section_wrapper_line}>
              <img src={LineSVG} alt="Line" />
            </div>

            <p>
              TEDxVITPune is an independent TED event organized in Vishwakarma
              Institute of Technology, an autonomous institute affiliated to
              Savitribai Phule University. Started in 2015, TEDxVITPune was
              among the first TEDx events in Pune and has grown to be a premier
              platform for furthering TED’s mission of ‘Ideas Worth Spreading’,
              within its local community. Over the past five events, TEDxVITPune
              has brought together visionaries, thinkers and doers of different
              disciplines from around the country to create a one-day event
              filled with ideas and discussions that contribute to meaningful
              change.
            </p>
          </div>

          <div className={styles.about_section_wrapper_right}>
            <div className={styles.tedxImage}>
              <img src={About3} alt="About3" />
            </div>

            <p>
              The event has hosted the likes of Stefano Pelle, Mahesh Kale,
              Rohit Pandharkar, Avinash Dharmadhikari, Niranjan Pedanekar,
              Anusree Raha, Nupur Dhakephalkar and Adithya Narayanan.
              Cumulatively, the event has garnered an extensive following around
              the country and has been recognized as an exemplary TEDx event in
              India.
            </p>
          </div>
        </div>

        <div className={styles.about_tedx_community}>
          <div className={styles.comm_left}>
            <h2>Community</h2>

            <div className={styles.community_line}>
              <img src={LineSVG} alt="Line" />
            </div>
            <p>
              Community forms the essence of a TEDx event. Being a part of one
              makes us feel as though we are a part of something greater than
              ourselves. It gives us opportunities to connect with people and
              supports our common interests.
            </p>
            <p>
              The TEDxVITPune community has developed over a span of 6 editions,
              welcoming people from all disciples of life and cultures who seek
              powerful thoughts, those that can revolutionise.
            </p>
            <p id="about-para" style={{ paddingBottom: "30px" }}>
              At TEDxVITPune we cherish and celebrate our local community, our
              audience and engage them in varied ways. As a souvenir of this all
              encompassing experience, we also curate merchandise for our
              attendees.
            </p>
          </div>
          <div className={styles.comm_right}>
            <img src={About4} alt="About4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
