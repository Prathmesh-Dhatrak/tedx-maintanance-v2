import React from "react";
import styles from "./Banner.module.scss";
// import xxx from "../../../images/Home/xx.png";

const Banner = () => {
  const stage =
    "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1668507636/Website%20Content/Home/Home_banner_nsjuy7.png";
  return (
    <>
      {/*<!-- Contact Us Section -->*/}
      {/* <div className={styles.touch}>
        <div className={styles.xxx}>
          <img src={xxx} alt="xxx" />
        </div>

        <div className={styles.touch_left}>
          <h1
            style={{
              color: "white",
            }}
          >
            Embracing the Pandemonium
          </h1>
        </div>

        <div className={styles.touch_right}>
          <video src={video} muted autoPlay loop />
        </div>
      </div> */}
      <div className={styles.touch}>
        <div className={styles.touch_left}>
          <h1
            style={{
              color: "white",
            }}
          >
            Embracing the Pandemonium
          </h1>
        </div>
        <div className={styles.touch_right}>
          <img src={stage} alt="x_logo-banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
