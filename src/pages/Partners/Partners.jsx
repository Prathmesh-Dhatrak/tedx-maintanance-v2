import React from "react";
import styles from "./Partners.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg';
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
            TEDxVITPune{` `}
          </span>
          2021 Sponsors
        </h1>

        <div className={styles.cs_wrapper}>
          <div className={styles.cs_wrapper_up}>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021223/Website%20Content/Partner/VACPL_o7wzia.png" alt="VACPL" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651295762/Website%20Content/Partner/airtel-logo-vector_wihykw.png" alt="airtel" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651295648/Website%20Content/Partner/COG-Logo-2022_wzbm6w.svg" alt="cog" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021221/Website%20Content/Partner/chopras_dazjn9.png" alt="chopras" />
            </div>
            
          </div>

          <div className={styles.cs_wrapper_down}>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651296151/Website%20Content/Partner/finiq_ub5yht.png" alt="finiq" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021222/Website%20Content/Partner/nestle_nxybdz.png" alt="nestle" />
            </div>
            <div className={styles.cs_image}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021222/Website%20Content/Partner/pepsico_tdyt8x.png" alt="pepsico" />
            </div>
            <div className={styles.cs_image} style={{width:"156px"}}>
              <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651295762/Website%20Content/Partner/Swiggy-logo_ifbr4k.png" alt="swiggy" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.at_tedx}>
        <div className={styles.at_left}>
          <img alt="Alt1" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301977/Website%20Content/Partner/at1_nlvjv3_r0hymy.jpg" />
        </div>
        <div className={styles.at_right}>
          <h1>
            Partnering with{` `}
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
          <img alt="partner_bottle" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651311981/Website%20Content/Partner/partner_bottle_lqr9uz.png" />
        </div>
      </div>

      <div className={styles.at_tedx_2}>
        <div className={styles.at_left_2}>
          <img alt="partner3" src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651312172/Website%20Content/Partner/partner_3_p69eyf.jpg" />
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
                      
                    </div>
                    <p className={styles.para}>Speakers and Performers</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="800">
                        {isVisible ? <CountUp duration={2} end={800} /> : 0} +
                      </p>
                      
                    </div>
                    <p className={styles.para}>Attendees</p>
                  </div>

                  <div className={styles.numbers}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="600000">
                        {isVisible ? <CountUp duration={2} end={600000} /> : 0}{" "}
                        +
                      </p>
                      
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
                      
                    </div>
                    <p className={styles.para}>Online Followers</p>
                  </div>
                  <div className={styles.numbers2}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="100000">
                        {isVisible ? <CountUp duration={2} end={100000} /> : 0}{" "}
                        +
                      </p>
                      
                    </div>
                    <p className={styles.para}>Organic Reach</p>
                  </div>
                  <div className={styles.numbers2}>
                    <div className={styles.partners_line}>
                      <p className={styles.num} data-target="60">
                        {isVisible ? <CountUp duration={2} end={60} /> : 0} +
                      </p>
                      
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
            
            <p className={styles.contact_para}>Asawari Bapat:<a href="tel:+917666345498" target="_blank" rel="noreferrer"> +91 (766) 63 45498</a></p>
            <p className={styles.contact_para}>Kewal Barhate:<a href="tel:+917722091910" target="_blank" rel="noreferrer"> +91 (772) 20 91910</a></p>
          </h4>
        </div>

        <div className={styles.partners_speakers_right}>
          <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651296623/Website%20Content/Partner/collaba_sttyys_pqgqet.png" alt="altt" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
