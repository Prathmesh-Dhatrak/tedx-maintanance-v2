import React from "react";
import styles from "./Partners.module.scss";

import grid from "../../images/WhiteGrid.svg";
import collab from "../../images/PartnerPages/collaba.jpg";
import airtel from "../../images/PartnerPages/airtel.png";
import finiq from "../../images/PartnerPages/finiq.png";


import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Partners = ({ dark }) => {
  const partnerStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
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
          <div className={styles.cs_wrapper_up}>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021223/Website%20Content/Partner/VACPL_o7wzia.png" alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src={airtel} alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021221/Website%20Content/Partner/cogni_aph7zj.png" alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021221/Website%20Content/Partner/chopras_dazjn9.png" alt="VACPL" />
            </div>
            
          </div>

          <div className={styles.cs_wrapper_down}>
            <div className={styles.cs_image}>
              <img src={finiq} alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021222/Website%20Content/Partner/nestle_nxybdz.png" alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021222/Website%20Content/Partner/pepsico_tdyt8x.png" alt="VACPL" />
            </div>
            <div className={styles.cs_image} style={{width:"156px"}}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650042694/Website%20Content/Partner/swiggy_af5bol.png" alt="VACPL" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.at_tedx}>
        <div className={styles.at_left}>
          <img alt="Alt1" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021220/Website%20Content/Partner/at1_nlvjv3.jpg" />
        </div>
        <div className={styles.at_right}>
          <h1>
            Partnering with
            <span style={{ fontFamily: "Rotunda_Bold", fontWeight: "900" }}>
              TEDxVITPune
            </span>
          </h1>
          <p>
            We at TEDxVITPune believe in forging strong and ever-lasting
            partnerships with speakers, sponsors, and attendees to uphold and
            elevate the TEDxVITPune brand identity. The team provides nothing
            but the best experiences to anyone and everyone, be it our orators
            or one of the many people from our well-knit community.
          </p>
        </div>
      </div>

      <div className={styles.at_tedx_1}>
        <div className={styles.at_left_1}>
          <p>
            Community calls bring people together from all over the world and
            serve as a social and cultural touchstone. We swear by associating
            and exploring minds- full of ideas. Hence we are growing, reaching
            out to more people, furthering our community, and calling speakers
            from multidisciplinary fields.
          </p>
          <br />
          <p>
            TEDxVITPune includes and indulges performers, sponsors, and
            attendees in networking sessions, exciting workshops, specially
            curated memoranda, delish food, and of course the aura which we
            carry in our brand name.
          </p>
        </div>
        <div className={styles.at_right_1}>
          <img alt="Alt1" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021221/Website%20Content/Partner/at2_w2bgrx.jpg" />
        </div>
      </div>

      <div className={styles.at_tedx_2}>
        <div className={styles.at_left_2}>
          <img alt="Alt3" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021221/Website%20Content/Partner/at3_xb75u1.jpg" />
        </div>
        <div className={styles.at_right_2}>
          <p>
            All of this has only been possible because of our partners, whose
            commitment and constancy have immensely contributed to making
            TEDxVITPune one of the finest and most premier events in the
            country.
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
                      <p className={styles.num} data-target="8">
                        {isVisible ? <CountUp duration={2} end={8} /> : 0} +
                      </p>
                    </div>
                    <p className={styles.para}>Events</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="60">
                        {isVisible ? <CountUp duration={2} end={60} /> : 0} +
                      </p>
                      {/* <p className="plus">+</p> */}
                    </div>
                    <p className={styles.para}>Speakers and Performers</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="800">
                        {isVisible ? <CountUp duration={2} end={800} /> : 0} +
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
                      <p className={styles.num} data-target="12000">
                        {isVisible ? <CountUp duration={2} end={12000} /> : 0} +
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
                      <p className={styles.num} data-target="60">
                        {isVisible ? <CountUp duration={2} end={60} /> : 0} +
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
            <br />
            Atharva Kulkarni: +91 (973) 02 78541
            <br />
            Kewal Barhate: +91 (772) 20 91910
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
