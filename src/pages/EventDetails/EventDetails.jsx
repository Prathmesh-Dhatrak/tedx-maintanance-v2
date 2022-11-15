import React from "react";
import "./EventDetails.scss";
import Accordian from "../Faqs/Accordian";


const grid =
  "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg";
const timelineData = [
  {
    text: "Come To VIT",
    date: "11:15",
    category: {
      tag: "app-ideas",
      color: "#FFDB14",
    },
    link: {
      question: "View more",
      answer: "Reporting",
    },
  },
  {
    text: "Registration and Lunch",
    date: "11:15 to 12:30",
    category: {
      tag: "blog",
      color: "#e17b77",
    },
    link: {
      question: "View more",
      answer: " <li>Registration</li> <li>Lunch<li>",
    },
  },
  {
    text: "Session 1",
    date: "12:30 to 15:00",
    category: {
      tag: "twitter",
      color: "#1DA1F2",
    },
    link: {
      question: "View more",
      answer: " <li>Boomwhackers</li> <li>Speaker 1:Sandeep Godbole<li> <li>Small Activity</li> <li>Speaker 2:Deepak Krishnan</li> <li>Small Activity</li> <li>Speaker 3:Sonal Barmecha</li> <li>Small Activity</li> ",
    },
  },
  {
    text: "Workshops",
    date: "15:00 to 16:00",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Break</li> <li>Workshops<li> <li>Yarn Activity</li><li> Photobooth</li>",
    },
  },
  {
    text: "Session 2",
    date: "16:20 to 17:20",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Settling in Audi</li> <li>Speaker 4:Karan Arjun Singh<li> <li>Speaker 5:Abhinav Kafare</li> <li>Break for refreshments</li>",
    },
  },
  {
    text: "Refreshments",
    date: "17:20 to 18:00",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Refreshments Break</li>",
    },
  },
  {
    text: "Session 3",
    date: "18:00 to 20:45",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Band</li> <li>Speaker 6:Samar Nakhate<li> <li>Break</li> <li>Speaker 7:Suchita Champak<li> <li>Break</li> <li>Speaker 8:Swanadi Tikekar<li> <li>Break</li> ",
    },
  },
  {
    text: "Networking Activity",
    date: "20:45 to 21:00",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Dinner Activity</li>",
    },
  },
  {
    text: "Dinner",
    date: "21:00 onwards",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      question: "View more",
      answer: " <li>Dinner</li>",
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
        
      <Accordian
      question={data.link.question}
      answer={data.link.answer}
    />



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
