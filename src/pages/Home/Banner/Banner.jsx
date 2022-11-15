import React from 'react'
import styles from "./Banner.module.scss";
import xxx from "../../../images/Home/xx.png";


const Banner = () => {
  return (
 <>
        {/*<!-- Contact Us Section -->*/}
        <div className={styles.touch}>

          <div className={styles.xxx}>
            <img
            src={xxx}
            alt='xxx'
            />
          
          </div>                

          <div className={styles.touch_left}>
            <h1 style={{
                color:"white"
            }}>Embarcing the Pandemonium</h1>
            
          </div>

          {/*<div className={styles.touch_right}>
          <video src={video} muted autoPlay loop />
        </div>*/}
        </div>

       

        </>
   
  )
}

export default Banner