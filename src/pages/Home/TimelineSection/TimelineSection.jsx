import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./TimelineSection.scss";
import {
  Event15,
  Event16,
  Event17,
  Event18,
  Event19,
  Event21,
  Event22,
} from "../../../images/Home/eventSVG";
const images = [
  Event15,
  Event16,
  Event17,
  Event18,
  Event19,
  Event21,
  Event22,
  Event18,
];

const EXAMPLE = [
  {
    data: "2015",
    status: "status",
    statusB: "TEDxVITPune Growth |The Pilot | 2015",
    statusE:
      "The 'Growth' of TEDxVITPune began in April 2015, as we aspired to put forth the best of all events with a mission to bring together brilliant minds competent in 'Spreading Ideas'. With a 9 speaker line-up, the pilot event garnered attention all across Pune and was set to embark on a journey to seek inspiration from revolutionary ideas. ",
  },
  {
    data: "2016",
    status: "status",
    statusB: "TEDxVITPune Let’s Crossover | Traversing All Hurdles | 2016",
    statusE:
      "After 'Growth' came the moment to 'Crossover'. The moment to foster the fire within us and fight all barriers for seeking answers to challenging existing norms. With an exceptional lineup of speakers and an elevated event experience, the second edition of TEDxVITPune carried the legacy forward with an intent to put together a marvellous experience.",
  },
  {
    data: "2017",
    status: "status",
    statusB: "TEDxVITPune Connecting the Dots | Pause & Take a Step Back | 2017",
    statusE:
      "From an award-winning national singer to numerous eminent speakers, the third edition witnessed the unification of ingenious minds, be it innovators, filmmakers, or entertainers. Our alumni graced the event by sharing their motivational life stories and helping us “Connect the Dots” to find the magic in our mundane lives. Speakers like Aniruddha Sen, Sachin Sanghe, Ramesh Botaljee, and several others, enhanced the experience by truly exhibiting the power of ideas.",
  },
  {
    data: "2018",
    status: "status",
    statusB: "TEDxVITPune Walking the Wire | To Countless Risks And No What-ifs | 2018",
    statusE:
      "'Courage is what drives us and you never know what is awaiting until you complete your journey and reach the destination.'The fourth edition of TEDxVITPune was not simply an event, but an exquisite experience altogether. Powerful speakers, unprecedented ideas, and melodious musicians helped raise the bar to showcase what a TEDx experience truly feels like. The offline event took place in October 2018, with remarkable orators like Girish Narayandass, Sameer Agashe, Anusree Raha, Stefano Pele, and many others.",
  },
  {
    data: "2019",
    status: "status",
    statusB: "TEDxVITPune Unravelling The Parallax | Looking At The Bigger Picture | 2019",
    statusE:
      "Discovering the endless realm of possibilities, the 5th Edition of TEDxVITPune trod on a path of exciting revelations. From a never-before-seen amalgamation of science and art to understanding the importance of psychological well-being, the event witnessed notable narrations and brainstormed splendid ideas. The attendees spent the evening rejoicing in engrossing activities through coffee brewing and decoupage & miniature art and many other workshops!",
  },
  {
    data: "2020",
    status: "status",
    statusB: "TEDxVITPune Countdown | Towards Climate Change | 2020",
    statusE:
      "It's now or never. We can change climate change. Keeping these words in mind, TEDxVITPune joined the Countdown with a vision to spread ideas for a change. Guest speakers, Stephan Crawford, Ulka Kelkar, and Shikhar Kamat imparted valuable cognizance, and musicians, Flavio Lopez and Daniel Waples added a spark of musical notes to the Sunday evening. ",
  },
  {
    data: "2021",
    status: "status",
    statusB: "TEDxVITPune Reemergence | Resurfacing Amidst Chaos| 2021",
    statusE:
      "Delineating the perseverance to re-emerge stronger despite times of turmoil, the 6th edition of TEDxVITPune aimed at inciting social impact and endowed guidance to help resurface as the finest version of yourself. The online event unravelled as the remarkable lineup of speakers including Amira Gill, Debanshu Roy, Prabhtoj Singh, Mark Hannant, and Avinash Ramanathan, put forth their striking ideas.",
  },
  {
    data: "2022",
    status: "status",
    statusB: "Growth 2022",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.th",
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

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx } = this.state;
    const titleLable = EXAMPLE[curIdx].statusB;
    const paragraph = EXAMPLE[curIdx].statusE;
    return (
      <div className="time-container">
        {" "}
        <h2>Our Previous Events</h2>
        <div className="time-inner-container">
          {/* Bounding box for the Timeline */}
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
              labelWidth={100}
              linePadding={120}
              index={this.state.curIdx}
              indexClick={(index) => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}
              values={EXAMPLE.map((x) => x.data)}
            />
          </div>
          <div className="events-text-center">
            {/* any arbitrary component can go here */}
            <img src={images[curIdx]} alt={images[curIdx]}></img>
            <div className="time-text-info">
              <h2>{titleLable}</h2>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
