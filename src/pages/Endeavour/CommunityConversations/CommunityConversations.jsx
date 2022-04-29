import "./CommunityConversations.scss";
import grid from "../../../images/WhiteGrid.svg";
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
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651224469/Website%20Content/Endevaour/History_tnn5gi.png"
            alt="joker"
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
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                alt="ko"
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
                src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                alt="ko"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommunityConversations;
