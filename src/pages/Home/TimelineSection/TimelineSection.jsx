import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./TimelineSection.scss";

const EXAMPLE = [
  {
    date: "2015",
    title: "TEDxVITPune Growth | The Pilot | 2015",
    paragraph: ` The "Growth" of TEDxVITPune began in April 2015, as we aspired to put forth the best of all events with a mission to bring together brilliant minds competent in "Spreading Ideas". With a 9 speaker line-up, the pilot event garnered attention all across Pune and was set to embark on a journey to seek inspiration from revolutionary ideas.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi`,
  },
  {
    date: "2016-04-09",
    title: "TEDxVITPune Let’s Crossover | Traversing All Hurdles | 2016",
    paragraph: ` After "Growth" came the moment to "Crossover". The moment to foster the fire within us and fight all barriers for seeking answers to challenging existing norms. With an exceptional lineup of speakers and an elevated event experience, the second edition of TEDxVITPune carried the legacy forward with an intent to put together a marvellous experience.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWclNQ5LLwulDH20FUvGDsSlG`,
  },
  {
    date: "2017-03-15",
    title: "TEDxVITPune Connecting the Dots | Pause & Take a Step Back | 2017",
    paragraph:
      "From an award-winning national singer to numerous eminent speakers, the third edition witnessed the unification of ingenious minds, be it innovators, filmmakers, or entertainers. Our alumni graced the event by sharing their motivational life stories and helping us “Connect the Dots” to find the magic in our mundane lives. Speakers like Aniruddha Sen, Sachin Sanghe, Ramesh Botaljee, and several others, enhanced the experience by truly exhibiting the power of ideas.",
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWcm2PSEaGCYzm_mok3pfVVkT`,
  },
  {
    date: "2018-03-22",
    title:
      "TEDxVITPune Walking the Wire | To Countless Risks And No What-ifs | 2018",
    paragraph: `"Courage is what drives us, and you never know what is waiting until you complete your journey and reach the destination."  The fourth edition of TEDxVITPune was not simply an event, but an exquisite experience altogether. Powerful speakers, unprecedented ideas, and melodious musicians helped raise the bar to showcase what a TEDx experience truly feels like. The offline event took place in October 2018, with remarkable orators like Girish Narayandass, Sameer Agashe, Anusree Raha, Stefano Pele, and many others.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PLsRNoUx8w3rNNKU261Gx7oEemGRuY_kFB`,
  },
  {
    date: "2019-11-16",
    title:
      "TEDxVITPune Unravelling The Parallax | Looking At The Bigger Picture | 2019",
    paragraph:
      "Discovering the endless realm of possibilities, the 5th Edition of TEDxVITPune trod on a path of exciting revelations. From a never-before-seen amalgamation of science and art to understanding the importance of psychological well-being, the event witnessed notable narrations and brainstormed splendid ideas. The attendees spent the evening rejoicing as they engaged in engrossing activities through coffee brewing, decoupage & miniature art, and many other workshops!",
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PLsRNoUx8w3rPXX5LlzJQQNYrvIvz5nhOz`,
  },
  /*{
    date: "2020",
    title: "TEDxVITPune Countdown | Towards Climate Change | 2020",
    paragraph:
      "It's now or never. We can change climate change. Keeping these words in mind, TEDxVITPune joined the Countdown with a vision to spread ideas for a change. Guest speakers, Stephan Crawford, Ulka Kelkar, and Shikhar Kamat imparted valuable cognizance, and musicians, Flavio Lopez and Daniel Waples added a spark of musical notes to the Sunday evening.",
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg`,
  }*/
  {
    date: "2021-05-29",
    title: "TEDxVITPune Reemergence | Resurfacing Amidst Turmoil | 2021",
    paragraph:
      "Delineating the perseverance to re-emerge stronger despite times of turmoil, the 6th edition of TEDxVITPune aimed at inciting social impact and endowed guidance to help resurface as the finest version of yourself. The online event unravelled as the remarkable lineup of speakers including Amira Gill, Debanshu Roy, Jishnu Chatterjee, Mark Hannant, and Avinash Ramanathan, put forth their striking ideas.",
    imgURL:`https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg`,  
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWckuZn6AEuZF8FOnr7T1QcVV`,
  },
];

export default class TimelineSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    };
  }

  render() {
    const { curIdx } = this.state;
    const title = EXAMPLE[curIdx].title;
    const paragraph = EXAMPLE[curIdx].paragraph;
    const imgURL = EXAMPLE[curIdx].imgURL;
    const videoLink = EXAMPLE[curIdx].videoLink;

    return (
      <div className="time-container" data-scroll-section>
        <h2>Past Editions: Our Journey </h2>
        <div className="time-inner-container">
          <div
            className="timeline-inner"
            style={{
              width: "90%",
              height: "100px",
              margin: "auto auto",
              marginTop: "5rem",
              fontSize: "15px",
            }}
          >
            <HorizontalTimeline
              styles={{
                background: "#f8f8f8",
                foreground: "#E62B1E",
                outline: "#dfdfdf",
              }}
              fillingMotion={{ stiffness: 150, damping: 25 }}
              slidingMotion={{ stiffness: 150, damping: 25 }}
              labelWidth={200}
              linePadding={100}
              index={this.state.curIdx}
              indexClick={(index) => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}
              values={EXAMPLE.map((x) => x.date)}
            />
          </div>
          <div className="events-text-center">
            {imgURL && <img src={imgURL} alt={imgURL}></img>}
            <div className="time-text-info">
              <h2>{title}</h2>
              <p>{paragraph}</p>
              {videoLink && (
                <a
                  href={videoLink}
                  alt={videoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Our Talks Here
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}