import React,{ Suspense } from "react";
import styles from "./About.module.scss";
import { BarWave } from "react-cssfx-loading";

const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg'

const About = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  const stage =
    "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651527621/Website%20Content/About/About_Us_eufnvp.png";
  return (
    <>
    <Suspense  
    fallback={
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BarWave height="50px" color="#FF0000" width="100px" />
      </div>
    }
    >
    <div className="AboutPage" style={pageStyle}>
    {/*<!-- About Us Section -->*/}

    <div className={styles.wrapper_section}>
      <div
        className={styles.new_aboutus_section}
        style={{ backgroundImage: `url(${stage})` }}
      >
        <div className={styles.content}>
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650045146/Website%20Content/Partner/About_Us_py4wte.svg"
            alt="About"
            style={{ width: "60%" }}
          />
          <p>
            In the spirit of Ideas Worth Spreading, we, at TEDxVITPune,
            solely believe in the power of ideas to change attitudes, lives,
            and ultimately, the world at large. We're bringing together
            people from all different walks of life to come, confer and
            confabulate ideas in whole different dimensions.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.about_pillars_title} style={{
      marginBottom: "60px",
    }}>
      TED, TEDx, TEDxVITPune- The Trio Pack
    </div>

    <div className={styles.new_about_ted}>
      <div className={styles.new_about_ted_left}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650037738/Website%20Content/About/What_is_TED__dqrtxo.svg"
          alt="what is"
          style={{ marginBottom: "12px" }}
        />

        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/ted_ybzcpj.svg"
          alt="ted"
        />

        <p>
          TED is a non-profit organization devoted to Ideas Worth Spreading.
          It started as a four-day conference in California 30 years ago,
          believing passionately in the power of ideas to change attitudes,
          and lives and welcoming people from every discipline and culture
          who seek a deeper understanding of the world.
        </p>
      </div>

      <div className={styles.new_about_ted_right}>
        <div className={styles.redLine_img}>
          <img
            style={{ marginTop: "45px", width: "100%" }}
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651294989/Website%20Content/About/new_redline_ujdtet.svg"
            alt="redLine"
          />
        </div>
        <p>
          Today, the two annual TED Conferences invite the world's leading
          thinkers and doers to speak for 18 minutes or less and the total
          events conducted till now are more than 6000. Many of these talks
          are then made available, free, at TED.com in more than 100
          languages.
        </p>

        <p>
          This has led to a global community focused on change through the
          power of ideas, thus forming a trinity of ideas from- Technology,
          Entertainment, and Design, and has recently taken up a broader
          scope ranging from science and business to global issues in more
          than a 100 languages.
        </p>
      </div>
    </div>

    <div className={styles.new_about_tedx}>
      <div className={styles.new_about_tedx_left}>
        <div className={styles.tedx_redLine_img}>
          <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651294989/Website%20Content/About/new_redline_ujdtet.svg" alt="redLine" />
        </div>
        <p>
          In the spirit of ideas worth spreading, TEDx is a TED-created
          program of local, self-organized events that bring people together
          to share a TED-like experience. These events are open-source and
          local-community driven organized by passionate individuals who
          seek to uncover new ideas and share the latest research in their
          local areas that spark conversations in their communities and
          ultimately elevate them to a global stage.
        </p>
      </div>

      <div className={styles.new_about_tedx_right}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650037738/Website%20Content/About/What_is_TED__dqrtxo.svg"
          alt="what is"
          style={{ marginBottom: "12px" }}
        />

        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/tedx_llui22.svg"
          alt="tedx"
        />

        <p>
          TEDx events aim to integrate ideas from every nook and corner of
          the world, thus, extending the boundaries of views and ideas.
        </p>
        <p>
          Our event is named TEDxVITPune, where x= independently organised
          TED event. The TED Conference provides general guidance for the
          TEDx program, but individual TEDx events, including ours, are
          self-organised.
        </p>
      </div>
    </div>

    <div className={styles.new_tedxVitpune}>
      <div className={styles.new_tedxVitpune_flex}>
        <div className={styles.new_tedxVitpune_flex_left}>
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650037738/Website%20Content/About/What_is_TED__dqrtxo.svg"
            alt="what is"
            style={{ marginBottom: "12px" }}
          />

          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021528/Website%20Content/About/tedxVit_oogfsc.svg"
            alt="ted"
          />
        </div>

        <div className={styles.new_tedxVitpune_flex_right}>
          <img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651294989/Website%20Content/About/new_redline_ujdtet.svg" alt="redLine" />
        </div>
      </div>

      <p>
        TEDxVITPune was among the first TEDx events in Pune and has grown to
        be a premier platform for furthering TED's mission of 'Ideas Worth
        Spreading', within its local community. Over the past eight events,
        TEDxVITPune has brought together visionaries, thinkers, and doers of
        different disciplines from around the country to create a one-day
        event filled with ideas and discussions that contribute to
        meaningful change.
      </p>

      <p>
        The event has hosted the likes of Amira Gill, Avinash Ramanathan,
        Debanshu Roy, Jishnu Chatterjee, Mark Hannant, Ajit Kembhavi,
        Avinash Dharmadhikari, Niranjan Pedanekar. Cumulatively, the event
        has garnered an extensive following around the country and has been
        recognized as an exemplary TEDx event in India.
      </p>
    </div>

    <div className={styles.about_pillars_title}>
      The Three Pillars of TEDxVITPune
    </div>

    <div className={styles.about_ideas}>
      <div className={styles.about_images_div}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650032044/Website%20Content/About/ideas_c3weus.svg"
          alt="ideas"
        />
      </div>

      <br />
      <div>
        <i>"Everything begins with an idea"</i>- Earl Nightingale
      </div>
      <p>
        We, here at TEDxVITPune, believe that the simplest of ideas uphold
        the ability to change the world entirely. Such captivating ideas
        encourage, inspire and hold the power to bring individuals together
        and bridge the gaps between communities.
      </p>

      <p>
        The preeminent purpose of all our events, social media campaigns,
        and community newsletters is to put together, exchange and
        brainstorm ground-breaking ideas. Ideas that originate from
        different minds, different ideologies, and paramountly, different
        beings.
      </p>
    </div>

    <div className={styles.about_community}>
      <div className={styles.about_images_div}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650032115/Website%20Content/About/community_c9cqi9.svg"
          alt="community"
        />
      </div>

      <br />
      <div>
        <i>
          "Many ideas grow better when transplanted into another mind than
          the one where they sprang up."
        </i>{" "}
        - Oliver Wendell Holmes
      </div>
      <p>
        Our community forms the heart and soul of TEDx. Be it the power
        echoed by the unification of different minds, or the warmth
        experienced owing to a feeling of togetherness. With constant
        engagement all throughout the year, our local community partakes in
        novel initiatives, taken to share striking ideas.
      </p>
      <p>
        Over a span of 6 editions, TEDxVITPune has truly evolved and works
        religiously towards putting forth a holistic experience, one in
        which people from all disciplines of life and culture connect and
        interact.
      </p>
    </div>

    <div className={styles.about_experience}>
      <div className={styles.about_images_div}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650032185/Website%20Content/About/experience_urjjtt.svg"
          alt="xper"
        />
      </div>

      <br />
      <div>
        <i>"We don’t remember days. We remember moments."</i> - Cesare
        Pavese.
      </div>
      <p>
        Forming one of the three crucial pillars of TEDxVITPune is the
        enthralling experience that we hope to put out for all the
        attendees.
      </p>
      <p>
        We believe in putting forth a panoramic experience for all and
        sundry. From live talks to workshops and connections that last a
        lifetime, TEDxVITPune aims at providing an escapade for you, and
        your mind. As a souvenir and a token of gratitude, we also curate
        personalised merchandise for all our attendees.
      </p>
    </div>
  </div>
    
    </Suspense>
      
    </>
  );
};

export default About;
