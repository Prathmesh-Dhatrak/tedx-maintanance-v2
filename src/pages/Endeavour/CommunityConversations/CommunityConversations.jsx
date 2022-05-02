import "./CommunityConversations.scss";
const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg';

const CommunityConversations = (dark) => {
  const pageStyle = {
    backgroundColor: dark === true ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <div style={pageStyle} className={"communityConversations-container"}>
      <div className="endeavour">
        <div className="cc_banner">
          <h2>Community Conversation</h2>
        </div>

        <div className="tri_questions">
          <h2>What?</h2>
          <p>
            “Community Conversations” is a platform to share your ideas, get
            yourself collaborating, and become a part of meaningful
            conversations to create memories for a lifetime!{" "}
          </p>
        </div>

        <div className="tri_questions">
          <h2>Why?</h2>
          <p>
            At TEDxVITPune we believe in forging strong and ever-lasting bonds,
            bringing together people from all different walks of life to natter
            and exchange ideas in whole different dimensions.
          </p>
        </div>

        <div className="tri_questions">
          <h2>Who can participate?</h2>
          <p>
            Anyone at all! Get your friends, interact with the TEDx community
            and look forward to unforgettable colloquies as we smile our way
            through Community Conversations!
          </p>
        </div>

        <div className="img_section">
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651226514/Website%20Content/Endevaour/History_e4aoa4.png"
            alt="History"
          />
        </div>

        <div className="end_chapters">
          <h2>Chapter 1</h2>
          <div className="chapters_1">
            <div className="chapters_1_left">
              <h3>“Let's talk music”</h3>
              <p>
                Music has always been close to everyone's heart. For some music
                heals, and motivates, for others, it is a source of happiness
                even in the saddest times. Audiences embraced their thoughts,
                gained perspective and indulged in a soulful dialogue while
                letting their minds wander.
              </p>
            </div>

            <div className="chapters_1_right">
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651486152/Website%20Content/Endevaour/DSC_9390_i3kmtd.jpg"
                alt="music"
              />
            </div>
          </div>

          <h2>Chapter 2</h2>
          <div className="chapters_2">
            <div className="chapters_2_left">
              <h3>“Let's talk humour” </h3>
              <p>
                Chapter 2 was more power-packed than ever! This time, the
                audiences spoke humour. The attendees came to depart with
                gleeful smiles, a sense of inner fulfilment, and strangers-
                turned friends, for a lifetime!
              </p>
              <p>
                Free up your weekends! Join Community Conversations- where we
                meet, share ideas, let the dialogue flow and build memorable
                experiences forevermore. To register: &nbsp;
                <a href="https://tedxvitpune.in/community-conversations">
                  Register
                </a>
              </p>
              <p>
                Continue being a part of our coterie and engage in Community
                Conversations by clicking the link below &nbsp;
                <a href="https://forms.gle/GKbVFJ4vdQKstaqS9">Link</a>
              </p>
            </div>

            <div className="chapters_2_right">
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651487185/Website%20Content/Endevaour/DSC_9658_vhqfk0.jpg"
                alt="humor"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img_section">
            <img
              src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651226276/Website%20Content/Endevaour/BTS_qjbpvn.png"
              alt="bts"
            />
          </div>

          <div className="year2019-container">
            <div className="gallery-3img-column">
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295152/Website%20Content/Lookbook/2019imgBig-1_ldmjg7_ag9rex.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295374/Website%20Content/Lookbook/2019imgBig-2_v1ovta_vwk5xg.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300143/Website%20Content/Lookbook/2018imgBig-3_lnzahc_qrm8xb.png"
                alt=""
              />
            </div>
            <div className="gallery-4img-column">
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300865/Website%20Content/Lookbook/2018Liveimgsmall-1_soelbw_c3vmhm.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650295750/Website%20Content/Lookbook/2019imgsmall-3_kcne8y_tbacta.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650300363/Website%20Content/Lookbook/2018imgsmall-3_snevbl_en8zbq.png"
                alt=""
              />

              <img
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650296002/Website%20Content/Lookbook/2019imgsmall-4_mfy71g_exzoj5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityConversations;
