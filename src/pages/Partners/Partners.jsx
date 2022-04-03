import React from "react";
// import "../styles/pages/partners.scss";
// import alt1 from "../assets/img/at1.jpg";
// import alt2 from "../assets/img/at2.jpg";
// import alt3 from "../assets/img/at3.jpg";
// import VACPL from "../assets/img/at3.jpg";
// import rohit from "../assets/img/spons/rohit.png";
// import spons2 from "../assets/img/spons/spons2.png";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

const Partners = () => {
  return (
    <>Partners</>
    // <div className="page" style={{ color: "#000" }}>
    //   <h1 id="spons">Our Sponsors</h1>
    //   <div className="countdown-spons">
    //     <h1>
    //       <span style={{ fontFamily: "Rotunda_Bold", fontWeight: "900" }}>
    //         TEDxVITPune
    //       </span>
    //       2021 Sponsors
    //     </h1>
    //     <div className="cs-wrapper">
    //       <div className="cs-left">
    //         <h3>Title Sponsor</h3>
    //         <img src={VACPL} alt="VACPL" />
    //       </div>
    //       <div className="cs-middle">
    //         <h3>Powered By</h3>
    //         <img src={rohit} alt="Rohit Krishi" />
    //       </div>
    //       <div className="cs-right">
    //         <h3>Associate Sponsor</h3>
    //         <img src={spons2} alt="CEO capital traders" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="at-tedx">
    //     <div className="at-left">
    //       <img alt="" src={alt1} />
    //     </div>
    //     <div className="at-right">
    //       <h1>
    //         Partnering with
    //         <span style={{ fontFamily: "Rotunda_Bold", fontWeight: "900" }}>
    //           TEDxVITPune
    //         </span>
    //       </h1>
    //       <p>
    //         TEDxVITPune’s audience comprises of educated, affluent and curious
    //         individuals who wish to discover the methods of meaningful change.
    //         Our Audience includes students from various disciplines and
    //         universities across the country and people from all walks of life
    //         such as corporate employees, entrepreneurs, teachers and public
    //         officials to name a few.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="at-tedx" id="at-center">
    //     <div className="at-left" id="id-mobile">
    //       <img alt="" src={alt2} />
    //     </div>
    //     <div className="at-right">
    //       <p>
    //         Through our event we intend to showcase strong ideas pertinent to
    //         the issues of our local community, that are relevant on a global
    //         scale.
    //       </p>
    //       <br />
    //       <p>
    //         We also take pride in providing a memorable event experience,
    //         curated specifically for our audience, speakers and sponsors,
    //         through food, venue setup, merchandise and engagement. We also
    //         capture our talks in spectacular quality to facilitate sharing of
    //         our endeavor with 13 million TED enthusiasts around the world.
    //       </p>
    //     </div>
    //     <div className="at-left" id="img-man">
    //       <img alt="" src={alt2} />
    //     </div>
    //   </div>

    //   <div className="at-tedx">
    //     <div className="at-left">
    //       <img alt="" src={alt3} />
    //     </div>
    //     <div className="at-right">
    //       <p>
    //         We believe in forging strong and long-lasting partnerships with
    //         speakers, sponsors and attendees to uphold and elevate the
    //         TEDxVITPune brand identity.
    //       </p>
    //       <br />

    //       <p>
    //         Over the years, TEDxVITPune has tried to tackle the toughest
    //         questions of the local community, trying to answer them with
    //         innovation, enterprise and enduring optimism. All of this has been
    //         possible because of partners that have been committed to our common
    //         goal of Ideas Worth Spreading.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="counter">
    //     <VisibilitySensor partialVisibility offset={{ bottom: 300 }}>
    //       {({ isVisible }) => {
    //         return (
    //           <>
    //             <div className="partners-line">
    //               <div className="numbers">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="7">
    //                     {isVisible ? <CountUp duration={2} end={7} /> : 0} +
    //                   </p>
    //                 </div>
    //                 <p className="para">Events</p>
    //               </div>
    //               <div className="numbers">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="50">
    //                     {isVisible ? <CountUp duration={2} end={50} /> : 0} +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Speakers and Performers</p>
    //               </div>
    //               <div className="numbers">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="700">
    //                     {isVisible ? <CountUp duration={2} end={700} /> : 0} +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Attendees</p>
    //               </div>
    //               <div className="numbers">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="600000">
    //                     {isVisible ? <CountUp duration={2} end={600000} /> : 0}{" "}
    //                     +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Total Video Views</p>
    //               </div>
    //             </div>
    //             <div className="partners-line second">
    //               <div className="numbers2">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="10000">
    //                     {isVisible ? <CountUp duration={2} end={10000} /> : 0} +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Online Followers</p>
    //               </div>
    //               <div className="numbers2">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="100000">
    //                     {isVisible ? <CountUp duration={2} end={100000} /> : 0}{" "}
    //                     +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Organic Reach</p>
    //               </div>
    //               <div className="numbers2">
    //                 <div className="partners-line">
    //                   <p className="num" data-target="50">
    //                     {isVisible ? <CountUp duration={2} end={50} /> : 0} +
    //                   </p>
    //                   {/* <p className="plus">+</p> */}
    //                 </div>
    //                 <p className="para">Partners and Sponsors</p>
    //               </div>
    //             </div>
    //           </>
    //         );
    //       }}
    //     </VisibilitySensor>
    //   </div>

    //   <div className="partner-speaker">
    //     <div className="ps-left">
    //       <h3>
    //         Want to partner
    //         <br />
    //         <span id="hight">with us?</span>
    //       </h3>
    //       <p>
    //         Partner with us and be a part of a community brimming with
    //         innovation and ideas.
    //       </p>
    //       <h4>
    //         Reach out to us:
    //         <a href="mailto:tedxvitpune@gmail.com">tedxvitpune@gmail.com</a>
    //       </h4>
    //     </div>
    //     <div className="ps-right">
    //       <div className="btn-push">
    //         <a
    //           className="typeform-share button"
    //           href="https://form.typeform.com/to/Y3huuz38?typeform-medium=embed-snippet"
    //           data-mode="drawer_right"
    //           data-submit-close-delay="3"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Drop A Message
    //         </a>
    //         {/* <script>
    //         (function () {
    //           var qs,
    //             js,
    //             q,
    //             s,
    //             d = document,
    //             gi = d.getElementById,
    //             ce = d.createElement,
    //             gt = d.getElementsByTagName,
    //             id = "typef_orm_share",
    //             b = "https://embed.typeform.com/";
    //           if (!gi.call(d, id)) {
    //             js = ce.call(d, "script");
    //             js.id = id;
    //             js.src = b + "embed.js";
    //             q = gt.call(d, "script")[0];
    //             q.parentNode.insertBefore(js, q);
    //           }
    //         })();
    //       </script> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Partners;

