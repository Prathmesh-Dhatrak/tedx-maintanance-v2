import React from "react";
import styles from "./Contact.module.scss";
import Touch from "../../images/Contactpages/touch.jpg";

const Contact = () => {
  const pageStyle = {
    backgroundColor: "white",
    margin:0,
  };
  return (
    <>
      <div className="Contactpage" style={pageStyle}>
        {/*<!-- Contact Us Section -->*/}
        <div className={styles.touch}>
          <div className={styles.touch_left}>
            <h1>
              Get In Touch <br />
              With Us
            </h1>
            <p>
              Would you like to know more about our projects? Here’s how you can
              reach out to us.
            </p>
          </div>
          <div className={styles.touch_right}>
            <img src={Touch} alt="touch" />
          </div>
        </div>

        <div className={styles.contact_para}>
          <div className={styles.cp_left}>
            <h3 id={styles.h_3}>
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
              <a href="mailto:tedxvitpune@gmail.com"> tedxvitpune@gmail.com</a>
            </h4>
          </div>

          <div className={styles.cp_right}>
            <h3 id={styles.h_3}>
              Want to be a speaker
              <br />
              <span id="hight">at our event?</span>
            </h3>
            <p>
              A good idea becomes a great idea when you let it out. Come and
              present your idea at our event.
            </p>
            <h4>
              Reach out to us:
              <a href="mailto:tedxvitpunecuration@gmail.com">
                tedxvitpunecuration@gmail.com
              </a>
            </h4>
          </div>

        </div>

        <div className={styles.line}>
          <svg
            width="1225"
            height="1"
            viewBox="0 0 1225 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1225" y1="0.5" y2="0.5" stroke="#333333" />
          </svg>
        </div>

        <div className={styles.contact_para}>
          <div className={styles.cp_left}>
            <h3 id={styles.h_3}>
              Want to know more
              <br />
              <span id="hight">about us?</span>
            </h3>
            <p>
              Want to get more details about the event? <br />
              Give us a call on any of the contacts below.
            </p>
          </div>

          <div className={styles.cp_right}>
            <p>
              We’d love to hear from you. Please fill the following form for
              more questions.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
