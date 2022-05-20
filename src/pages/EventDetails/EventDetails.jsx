import React from "react";
import "./EventDetails.scss";

const grid =
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg";
const timelineData = [
  {
    text: "Started working on the app-ideas repository",
    date: "February 25 2019",
    category: {
      tag: "app-ideas",
      color: "#FFDB14",
    },
    link: {
      url: "#!",
      text: "Check it out on GitHub",
    },
  },
  {
    text: "Started the Weekly Coding Challenge program",
    date: "March 04 2019",
    category: {
      tag: "blog",
      color: "#e17b77",
    },
    link: {
      url: "#!",
      text: "Check it out here",
    },
  },
  {
    text: "Got 1.000 followers on Twitter",
    date: "March 07 2019",
    category: {
      tag: "twitter",
      color: "#1DA1F2",
    },
    link: {
      url: "#!",
      text: "See profile",
    },
  },
  {
    text: "I published my first article in the FreeCodeCamp Medium Publication",
    date: "March 18 2019",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "#!",
      text: "Check it out here",
    },
  },
  {
    text: "Over 12.000 views in a single day on my Medium posts",
    date: "April 05 2019",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "#!",
      text: "See profile",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

const Map = ({ dark }) => {
  return (
    <div
      className="map-container"
      style={{
        backgroundImage: 'url("' + grid + '")',
        backgroundColor: dark ? "dark" : "white",
      }}
    >
      <div className="container">
        {/* <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1652772322/Website%20Content/EventDetails/ComingSoon_mbp7w5.jpg"
          alt=""
        /> */}
        <Timeline />
      </div>
    </div>
  );
};

export default Map;
