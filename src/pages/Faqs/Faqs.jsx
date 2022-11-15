import React from "react";
import Accordian from "./Accordian";
import styles from "./Faqs.module.scss";
const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg';

const Faqs = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <>
      <div className="page" style={pageStyle}>
        <h2 className={styles.faqs}>Frequently Asked Questions</h2>

        <h2 className={styles.category}>About TEDxVITPune</h2>

        <Accordian
          question="What is TEDxVITPune?"
          answer="TEDxVITPune is an event where live talks with unique ideas and performances are shared with the community to educate and engage them.
      "
        />
        <Accordian
          question="How can I reach out to the organising team of TEDxVITPune?"
          answer="
      <p>You can reach out to us through our Social Media handles</p>
      Check out our Contact page to know more about our endeavours and reach out to the organising team.
      
      "
        />

        <Accordian
          question="Where can I see previous TEDxVITPune talks?"
          answer="
      You can find talks from our previous speakers on the TEDx YouTube Channel.
      <br/>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi>2015, </a>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://www.youtube.com/playlist?list=PL0687I2dEWclNQ5LLwulDH20FUvGDsSlG>2016, </a>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://www.youtube.com/playlist?list=PL0687I2dEWcm2PSEaGCYzm_mok3pfVVkT>2017, </a>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://www.youtube.com/playlist?list=PLsRNoUx8w3rNNKU261Gx7oEemGRuY_kFB>2018, </a>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://www.youtube.com/playlist?list=PLsRNoUx8w3rPXX5LlzJQQNYrvIvz5nhOz>2019, </a>
      <a style=`text-decoration:none;color:red;font-weight: 600;` href=https://www.youtube.com/playlist?list=PL0687I2dEWckuZn6AEuZF8FOnr7T1QcVV>2021 </a>
      "
        />

        <Accordian
          question=" Is TEDxVITPune a part of TED?"
          answer="No, it is an independently organised TEDx event licensed by TED. "
        />

        {/*<Accordian
          question="How do I suggest a Speaker for TEDxVITPune?"
          answer="
      If you’d like to nominate someone to be a speaker at TEDxVITPune, you can fill out our <a href=http://tedxvitpune.in/speaker-nomination><b>Speaker Nomination Form</b></a>  with a few details about the speaker and their ideas.
      "
  />*/}

        <h2 className={styles.category}>Event specific queries</h2>

        <Accordian
          question="What is the nature of the event?"
          answer="TEDxVITPune 2022 will be held in an offline mode. Other event-specific details will be shared with the attendees a week before the event.
      "
        />

        <Accordian
          question="Is there a limit to the number of attendees?"
          answer="Yes, according to the guidelines set by TED, TEDxVITPune has a limit of 100 attendees.
      "
        />

        <Accordian
          question="Is TEDxVITPune a paid event? "
          answer="Yes. We, here at TEDx, believe in a holistic experience that lasts a lifetime. From workshops to event merchandise, we promise to put forth an invaluable experience for all the attendees.
      "
        />

        <Accordian
          question="What all is included in the ticket for TEDxVITPune?"
          answer="The event ticket includes access to all speaker talks and performances, networking activities, workshops, speaker interaction, and specially curated merchandise for all the attendees."
        />

        <Accordian
          question="What is the itinerary for the event?"
          answer="TEDxVITPune is a one-day event, the itinerary for which will be intimated to the attendees via email before the event."
        />

        <Accordian
          question="Is the ticket refundable or transferable?
      "
          answer="The ticket to TEDxVITPune is non-transferable and non-refundable."
        />

     {/*}   <Accordian
          question="How do I buy a ticket from Townscript?"
          answer="Upon the selection of your attendee application, you can purchase your ticket to the event via Townscript after filling in all the necessary details.
      Apply as an attendee here!
      <a href=http://tedxvitpune.in/speaker-nomination><b>Register link</b></a>
      "
/>*/}

        <Accordian
          question="What is the duration of the event?"
          answer="TEDxVITPune is a one-day event. The timings and itinerary will be notified to the selected attendees prior to the event."
        />

        <Accordian
          question="Who can attend the offline event?"
          answer="Anyone interested can register by filling out an Attendee Application Form. However, only top 100 forms will be selected for further attending the event."
        />

        <Accordian
          question="Are there any experience activities included along with the talks?"
          answer="Yes! We have a host of experience activities planned for our attendees.
      "
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
