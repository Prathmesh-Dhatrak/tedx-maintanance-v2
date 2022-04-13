import React from "react";
import Accordian from "./Accordian";
import styles from "./Faqs.module.scss";

const Faqs = () => {
  const faqStyle = {
    backgroundColor: "white",
  };
  return (
    <>
      <div className="page" style={faqStyle}>
        <h2 className={styles.faqs}>Frequently Asked Questions</h2>

        <h2 className={styles.category}>About TEDxVITPune</h2>

        <Accordian
          question="What is TEDx?"
          answer="TEDxVITPune is an event where live talks with unique ideas and performances are shared with the community to educate and engage them."
        />
        {/*<Accordian question="How can I reach out to the organising team of TEDxVITPune?" 
      answer="
  <p style=color:red>You can reach out to us through our Social Media handles</p>" />*/}

        <Accordian
          question="How can I reach out to the organising team of TEDxVITPune?"
          answer="
      <p>You can reach out to us through our Social Media handles</p>"
        />

        <Accordian
          question="Where can I see previous TEDxVITPune talks?"
          // eslint-disable-next-line no-template-curly-in-string
          answer="
      You can find talks from our previous speakers on the TEDx YouTube Channel.
      <br/>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=`${https://youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi}`>2015, </a>
      "
        />

        <Accordian
          question=" Is TEDxVITPune a part of TED?"
          answer="No, it is an independently organized TEDx event licensed by TED. "
        />
        <Accordian
          question="How do I suggest a Speaker for TEDxVITPune?"
          answer="
      If you’d like to nominate someone to be a speaker at TEDxVITPune, you can fill out our <a href=`{https://tedxvitpune.in/speaker-nomination}`><b>Speaker Nomination Form</b></a>  with a few details about the speaker and their ideas.
      "
        />

        <h2 className={styles.category}>Event specific queries</h2>

        <Accordian
          question="What is the nature of the event?"
          answer="Due to current covid restrictions, TEDxVITPune 2021 will be held in online mode on 29th May, 2021. The platform details will be shared with the attendees a week prior to the event."
        />

        <Accordian
          question="Is there a limit to the number of attendees?"
          answer="Yes, according to the guidelines set by TED, TEDxVITPune has a limit of 100 attendees."
        />

        <Accordian
          question="What all is included in the ticket for TEDxVITPune?"
          answer="The event ticket includes access to all speaker talks and performances, networking activities, workshops, speaker interaction and specially curated merchandise delievered to your doorstep."
        />

        <Accordian
          question="What is the itinerary for the event?"
          answer="TEDxVITPune is a one-day event, the itinerary for which will be intimated to the attendees via email before the event."
        />

        <Accordian
          question="Is the ticket refundable or transferable?"
          answer="The ticket to TEDxVITPune is non-transferable and non-refundable."
        />

        <Accordian
          question="How do I buy a ticket from Townscript?"
          answer="You can purchase a ticket to the event via Townscript after filling all the necessary details.
      Buy ticket"
        />

        <Accordian
          question="What is the duration of the event?"
          answer="TEDxVITPune is a one-day event. The timings and itinerary will be notified to the selected attendees prior to the event."
        />

        <Accordian
          question=" Can I pick experience sessions to attend? "
          answer="The ticket includes entry to not just one but all the experience sessions. The attendee is free to take benefit of all the networking activities and workshops."
        />
      </div>
    </>
  );
};

export default Faqs;
