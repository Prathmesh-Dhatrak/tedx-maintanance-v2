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
    statusB: "Growth 2015",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2016",
    status: "status",
    statusB: "Growth 2016",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2017",
    status: "status",
    statusB: "Growth 2017",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2018",
    status: "status",
    statusB: "Growth 2018",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2019",
    status: "status",
    statusB: "Growth 2019",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2020",
    status: "status",
    statusB: "Growth 2020",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.",
  },
  {
    data: "2021",
    status: "status",
    statusB: "Growth 2021",
    statusE:
      "It all started in 2015, a seed was sown with the intent of spreading wonderful ideas and bringing the brightest minds of college together. With an enormous checklist and a great deal of ambiguity- we embarked on a journey that set a precedent for years of innovation to follow. With a 9 speaker line-up, the pilot event of TEDxVITPune managed to garner attention all across Pune.th",
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
