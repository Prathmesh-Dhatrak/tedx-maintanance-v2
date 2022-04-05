import React from "react";
import styles from "./Partners.module.scss";

import alt1 from "../../images/PartnerPages/at1.jpg";
import alt2 from "../../images/PartnerPages/at2.jpg";
import alt3 from "../../images/PartnerPages/at3.jpg";
import collab from "../../images/PartnerPages/collaba.jpg";
import VACPL from "../../images/PartnerPages/VACPL.png";
import rohit from "../../images/PartnerPages/rohit.png";
import spons2 from "../../images/PartnerPages/spons2.png";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Partners = () => {
  const partnerStyle = {
    backgroundColor: "white",
  };
  return (
    <div className={styles.page} style={partnerStyle}>
      <h1 className={styles.h_1}>Our Sponsors</h1>

      <div className={styles.countdown_spons}>
        <h1>
          <span style={{ fontFamily: "Rotunda_Bold", fontWeight: "900" }}>
            TEDxVITPune
          </span>
          2021 Sponsors
        </h1>

        <div className={styles.cs_wrapper}>
          <div className={styles.cs_left}>
            <h3>Title Sponsor</h3>
            <img src={VACPL} alt="VACPL" />
          </div>
          <div className={styles.cs_middle}>
            <h3>Powered By</h3>
            <img src={rohit} alt="Rohit Krishi" />
          </div>
          <div className={styles.cs_right}>
            <h3>Associate Sponsor</h3>
            <img src={spons2} alt="CEO capital traders" />
          </div>
        </div>
      </div>

      <div className={styles.at_tedx}>
        <div className={styles.at_left}>
          <img alt="Alt1" src={alt1} />
        </div>
        <div className={styles.at_right}>
          <h1>
            Partnering with
            <span style={{ fontFamily: "Rotunda_Bold", fontWeight: "900" }}>
              TEDxVITPune
            </span>
          </h1>
          <p>
            TEDxVITPune’s audience comprises of educated, affluent and curious
            individuals who wish to discover the methods of meaningful change.
            Our Audience includes students from various disciplines and
            universities across the country and people from all walks of life
            such as corporate employees, entrepreneurs, teachers and public
            officials to name a few.
          </p>
        </div>
      </div>

      <div className={styles.at_tedx_1}>
        <div className={styles.at_left_1}>
          <p>
            Through our event we intend to showcase strong ideas pertinent to
            the issues of our local community, that are relevant on a global
            scale.
          </p>
          <br />
          <p>
            We also take pride in providing a memorable event experience,
            curated specifically for our audience, speakers and sponsors,
            through food, venue setup, merchandise and engagement. We also
            capture our talks in spectacular quality to facilitate sharing of
            our endeavor with 13 million TED enthusiasts around the world.
          </p>
        </div>
        <div className={styles.at_right_1}>
          <img alt="Alt1" src={alt2} />
        </div>
      </div>

      <div className={styles.at_tedx_2}>
        <div className={styles.at_left_2}>
          <img alt="Alt3" src={alt3} />
        </div>
        <div className={styles.at_right_2}>
          <p>
            We believe in forging strong and long-lasting partnerships with
            speakers, sponsors and attendees to uphold and elevate the
            TEDxVITPune brand identity.
          </p>
          <br />
          <p>
            Over the years, TEDxVITPune has tried to tackle the toughest
            questions of the local community, trying to answer them with
            innovation, enterprise and enduring optimism. All of this has been
            possible because of partners that have been committed to our common
            goal of Ideas Worth Spreading.
          </p>
        </div>
      </div>

      <div className={styles.counter}>
        <VisibilitySensor partialVisibility offset={{ bottom: 300 }}>
          {({ isVisible }) => {
            return (
              <>
                <div className={styles.partners_line}>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="7">
                        {isVisible ? <CountUp duration={2} end={7} /> : 0} +
                      </p>
                    </div>
                    <p className={styles.para}>Events</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="50">
                        {isVisible ? <CountUp duration={2} end={50} /> : 0} +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Speakers and Performers</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="700">
                        {isVisible ? <CountUp duration={2} end={700} /> : 0} +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Attendees</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="600000">
                        {isVisible ? <CountUp duration={2} end={600000} /> : 0}{" "}
                        +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Total Video Views</p>
                  </div>
                  
                </div>

                <div className={`${styles.partners_line} ${styles.second}`}>
                  <div className={styles.numbers2}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="10000">
                        {isVisible ? <CountUp duration={2} end={10000} /> : 0} +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Online Followers</p>
                  </div>
                  <div className={styles.numbers2}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="100000">
                        {isVisible ? <CountUp duration={2} end={100000} /> : 0}{" "}
                        +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Organic Reach</p>
                  </div>
                  <div className={styles.numbers2}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="50">
                        {isVisible ? <CountUp duration={2} end={50} /> : 0} +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Partners and Sponsors</p>
                  </div>
                </div>
              </>
            );
          }}
        </VisibilitySensor>
      </div>

      <div className={styles.partners_speakers}>
        <div className={styles.partners_speakers_left}>
          <h3>
            Want to partner
            <br />
            <span id="hight">with us?</span>
          </h3>
          <p>
            Partner with us and be a part of a community brimming with
            innovation and ideas.
          </p>
          <h4>
            Reach out to us:
            <a href="mailto:tedxvitpune@gmail.com">tedxvitpune@gmail.com</a>
          </h4>
        </div>

        <div className={styles.partners_speakers_right}>
          <img src={collab} alt="altt" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
