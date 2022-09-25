import React,{useState,useRef} from 'react'
import styles from "./Toggle.scss";

const Accordian = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);
    function toggleAccor() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        
    }


  return (
    <div className={styles.questions_sections}>

        <div className={`${styles.questions} ${styles.active}`} onClick={toggleAccor}>
          {" "}
          <p>{props.question}</p>
        </div>


        <div className={styles.answer} ref={content} style={{maxHeight:`${setHeight}`}}>
          <p
          dangerouslySetInnerHTML={{__html: props.answer}} 
          >
            
          </p>
        </div>
        <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021483/Website%20Content/Faqs/lineMobile_va7sfj.svg" alt="lineSvg" />
      </div>
  )
}

export default Accordian