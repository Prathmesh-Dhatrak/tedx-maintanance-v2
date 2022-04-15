import React from "react";
import styles from "./Contact.module.scss";
import Touch from "../../images/Contactpages/touch.jpg";
import grid from "../../images/WhiteGrid.svg";
const Contact = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
    margin: 0,
  };
  return (
    <>
      <div className="Contactpage" style={pageStyle}>
        {/*<!-- Contact Us Section -->*/}
        <div className={styles.touch}>
          <div className={styles.touch_left}>
            <h1>For event-specific queries reach out to:</h1>
            <p>
              Harshada Belgi: +91 (916) 84 04840
              <br />
              Tanya Agarwal: +91 (777) 40 06263
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
              Work with us to build long-term collaborations and coherent bonds
              for years to come.
              <br />
              Contact :
              <br />
              Harshada Belgi: +91 (916) 84 04840
              <br />
              Atharva Kulkarni: +91 (973) 02 78541
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
              TEDx is your chance to motivate thinkers, dreamers, and
              visionaries by presenting your idea at our event.
              <br />
              Contact :
              <br />
              Harshada Belgi: +91 (916) 84 04840
              <br />
              Mugdha Pendse: +91 (776) 88 97971
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

        <div className={styles.contact_form}>

          {/*<div className={styles.cp_left}>
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
  </div>*/}

          <h2>Drop a message</h2>
          <form>
            <div className={styles.form_input}>
              <label for="email"></label>
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                required=""
              />

              <label for="answer"></label>
              <textarea
                type="text"
                placeholder="Enter your message"
                id="answer"
                name="answer"
                required=""
              ></textarea>
              <button className={styles.submit_btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
