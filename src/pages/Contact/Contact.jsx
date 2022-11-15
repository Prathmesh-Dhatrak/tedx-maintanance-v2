import React from "react";
import styles from "./Contact.module.scss";
const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg';

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
            Niharika Rathi:<a href="tel:+919689898018" target="_blank" rel="noreferrer"> +91 (968) 98 98018</a> 
              <br />
            Asawari Bapat:<a href="tel:+917666345498" target="_blank" rel="noreferrer"> +91 (766) 63 45498</a> 
            </p>

            <form action="https://submit-form.com/KPISJyf7">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Your Email"
                className="email"
                name="email"
                required=""
                id="email"
              />

              <label htmlFor="answer"></label>
              <input
                type="text"
                placeholder="Enter your message"
                className="answer"
                name="answer"
                required=""
                id="answer"
              ></input>

              <button type="submit">Send</button>
            </form>
          </div>
          <div className={styles.touch_right}>
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650301560/Website%20Content/Contact/touch_aw2tup_sbc2tv.jpg"
              alt="touch"
            />
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
              Niharika Rathi:<a href="tel:+919689898018" target="_blank" rel="noreferrer"> +91 (968) 98 98018</a> 
              <br />
              Asawari Bapat:<a href="tel:+917666345498" target="_blank" rel="noreferrer"> +91 (766) 63 45498</a> 
            </p>
            <h4>
              Reach out to us:
              <a href="mailto:tedx@vit.edu" target="_blank" rel="noreferrer"> tedx@vit.edu</a>
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
              Niharika Rathi:<a href="tel:+919689898018" target="_blank" rel="noreferrer"> +91 (968) 98 98018</a> 
              <br />
              Asawari Bapat:<a href="tel:+917666345498" target="_blank" rel="noreferrer"> +91 (766) 63 45498</a> 
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

        
      </div>
    </>
  );
};

export default Contact;
