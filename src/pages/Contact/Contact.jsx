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
              Harshada Belgi:<a href="tel:+919168404840" target="_blank" rel="noreferrer"> +91 (916) 84 04840</a> 
              <br />
              Atharva Kulkarni:<a href="tel:+91973278541" target="_blank" rel="noreferrer"> +91 (973) 02 78541</a> 
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
              Harshada Belgi:<a href="tel:+919168404840" target="_blank" rel="noreferrer"> +91 (916) 84 04840</a> 
              <br />
              Atharva Kulkarni:<a href="tel:+91973278541" target="_blank" rel="noreferrer"> +91 (973) 02 78541</a> 
            </p>
            <h4>
              Reach out to us:
              <a href="mailto:tedxvitpune@gmail.com" target="_blank" rel="noreferrer"> tedxvitpune@gmail.com</a>
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
              Harshada Belgi:<a href="tel:+919168404840" rel="noreferrer" target="_blank"> +91 (916) 84 04840</a> 
              <br />
              Mugdha Pendse:<a href="tel:+917768897971" rel="noreferrer" target="_blank"> +91 (776) 88 97971</a>
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
