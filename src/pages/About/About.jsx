import React from "react";
import styles from "./About.module.scss";
import ABout1 from "../../images/Aboutpages/about1.png";
import LineSVG from "../../images/Aboutpages/line.svg";
import LineMobile from "../../images/Aboutpages/line-mobile.svg";
import About2 from "../../images/Aboutpages/about2.jpg";
import About3 from "../../images/Aboutpages/about3.png";
import About4 from "../../images/Aboutpages/about4.png";

const About = () => {
  const pageStyle = {
    backgroundColor: "white",
  };
  return (
    <>
      <div className="AboutPage" style={pageStyle}>
        {/*<!-- About Us Section -->*/}

        <div className={styles.aboutUs_wrapper}>
          <div className={styles.aboutUs_wrapper_left}>
            <img src={ABout1} alt="About1" />
          </div>

          <div className={styles.aboutUs_wrapper_right}>
            <h1>About Us</h1>
            <p>
            In the spirit of Ideas Worth Spreading, we, at TEDxVITPune, solely believe in the power of ideas to change attitudes, lives, and ultimately, the world at large. 
            </p>
            <p>
            We're bringing together people from all different walks of life to come, confer and confabulate ideas in whole different dimensions by spreading the word through campaigns, events, creatives, and exploring mindsets from multidisciplinary domains.
            </p>

            <div className={styles.line}>
              <img src={LineSVG} alt="LineSVG" />
            </div>
          </div>
        </div>

        {/*<!-- About Section TED -->*/}
      
        <h1 className={styles.three_pillars_trio}>TED, TEDx, TEDxVITPune - The Trio Pack
      </h1>
        <div className={styles.ted_wrapper}>
        
          <h1>What is TED? </h1>

          <div className={styles.ted_line}>
            <img src={LineMobile} alt="line-mobile" />
          </div>

          <div className={styles.ted_para}>
            <div className={styles.ted_para_left}>
              <p>
              TED is a non-profit organisation devoted to Ideas Worth Spreading. 
              It started as a four-day conference in California 30 years ago, 
              believing passionately in the power of ideas to change attitudes, 
              and lives and welcoming people from every discipline and culture who 
              seek a deeper understanding of the world. Today, the two annual 
              TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less and the total events conducted till now are more than 6000. Many of these talks are then made available, free, at TED.com in more than a 100 languages.
              </p>
            </div>
            <div className={styles.ted_para_right}>
              <p>
                {" "}
                This has led to a global community focused on change through the power of ideas, 
                thus forming a trinity of ideas from- Technology, Entertainment, and Design, 
                and has recently taken up a broader scope ranging from science and business to 
                global issues in more than a 100 languages.

              </p>
            </div>
          </div>

          <button className={styles.btn_1}>
            <a href="https://ted.com">
              <span>Visit ted.com</span>
            </a>
          </button>
        </div>

        {/*<!-- what is tedx new-->*/}
        <div className={styles.about_tedx_news}>
          <div className={styles.about_tedx_left}>
            <img src={About2} alt="About2" />
          </div>
          <div className={styles.about_tedx_right}>
            <h2>What is TEDx ?</h2>

            <div className={styles.aboutus_line}>
              <img src={LineSVG} alt="Line" />
            </div>

            <p>
            In the spirit of ideas worth spreading, TEDx is a TED-created program of local,
             self-organised events that bring people together to share a TED-like experience. 
             These events are open-source and local-community driven organised by passionate
              individuals who seek to uncover new ideas and share the latest research in their
               local areas that spark conversations in their communities and ultimately elevate 
               them to a global stage. TEDx events aim to integrate ideas from every nook and 
               corner of the world, thus, extending the boundaries of views and ideas.

            </p>
            <p>
            Our event is named TEDxVITPune, where x= independently organised TED event. 
            The TED Conference provides general guidance for the TEDx program, but individual 
            TEDx events, including ours, are self-organised.

            </p>
          </div>
        </div>




        {/*<!-- TedxVITPune Section -->*/}
        <div className={styles.about_tedx_section_wrapper}>

          <div className={styles.about_section_wrapper_left}>

          <h2>What is TEDxVITPune?</h2>

          <div className={styles.about_section_wrapper_line}>
            <img src={LineSVG} alt="Line" />
          </div>

          <p>
          TEDxVITPune was among the first TEDx events in Pune and has grown to be a premier platform
           for furthering TED's mission of 'Ideas Worth Spreading', within its local community.
            Over the past eight events, TEDxVITPune has brought together visionaries, thinkers, 
            and doers of different disciplines from around the country to create a one-day event
             filled with ideas and discussions that contribute to meaningful change.
          </p>
          </div>



          <div className={styles.about_section_wrapper_right}>

              <div className={styles.tedxImage}>
                <img src={About3} alt="About3" />
              </div>
              
              <p>
              The event has hosted the likes of Amira Gill, Avinash Ramanathan, Debanshu Roy, 
              Jishnu Chatterjee, Mark Hannant, Ajit Kembhavi, Avinash Dharmadhikari, Niranjan Pedanekar.
               Cumulatively, the event has garnered an extensive following around the country and 
               has been recognized as an exemplary TEDx event in India.

              </p>
          </div>

        </div>



      {/*Three pillars*/ }
      <h1 className={styles.three_pillars}>The Three Pillars of TEDxVITPune</h1>

        <div className={styles.about_tedx_community}>
          <div className={styles.comm_left}>
            <h2>Ideas</h2>

            <div className={styles.community_line}>
              <img src={LineSVG} alt="Line" />
            </div>
            <p>
            <i>"Everything begins with an idea"</i>
            -Earl Nightingale
            <br/>
            We, here at TEDxVITPune, believe that the simplest of ideas uphold the ability to 
            change the world entirely. Such captivating ideas encourage, inspire and hold the 
            power to bring individuals together and bridge the gaps between communities. 

            </p>
            <p>
            The preeminent purpose of all our events, social media campaigns, and community 
            newsletters is to put together, exchange and brainstorm ground-breaking ideas. 
            Ideas that originate from different minds, different ideologies, and paramountly, 
            different beings. 

            </p>
            <p id="about-para" style={{ paddingBottom: "30px" }}>
              At TEDxVITPune we cherish and celebrate our local community, our
              audience and engage them in varied ways. As a souvenir of this all
              encompassing experience, we also curate merchandise for our
              attendees.
            </p>
          </div>
          <div className={styles.comm_right}>
            <img src={About4} alt="About4" />
          </div>
        </div>
        

        <div className={styles.about_tedx_community_experience}>
          <div className={styles.comm_left_experience}>
            <h2>Community</h2>

            <div className={styles.community_line}>
              <img src={LineSVG} alt="Line" />
            </div>

            <p>
            <i>"Many ideas grow better when transplanted into another mind than the one where they sprang up."</i>
            -Oliver Wendell Holmes
            <br/>
            Our community forms the heart and soul of TEDx. Be it the power echoed by the unification of different minds, or the warmth experienced owing to a feeling of togetherness. With constant engagement all throughout the year, our local community partakes in novel initiatives, taken to share striking ideas.
            </p>
            <p id="about-para-exp" style={{ paddingBottom: "30px" }}>
            Over a span of 6 editions, TEDxVITPune has truly evolved and works religiously towards putting forth a holistic experience, one in which people from all disciplines of life and culture connect and interact. 
            </p>

          </div>
          <div className={styles.comm_right_experience}>

          <h2>Experience:</h2>

            <div className={styles.community_line}>
              <img src={LineSVG} alt="Line" />
            </div>

            <p>
            <i>"We don’t remember days. We remember moments."</i>
            -Cesare Pavese.
            <br/>
            Forming one of the three crucial pillars of TEDxVITPune is the enthralling experience that we hope to put out for all the attendees. 
            </p>
            <p id="about-para-exp" style={{ paddingBottom: "30px" }}>
            We believe in putting forth a panoramic experience for all and sundry. From live talks to workshops and connections that last a lifetime, TEDx aims at providing an escapade for you, and your mind. 
As a souvenir and a token of gratitude, we also curate personalised merchandise for all our attendees.

            </p>
            
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
