import React from "react";
import "./Endeavour.scss";
const grid = 'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021025/Website%20Content/WhiteGrid_xcidhq.svg'


const Endeavour = ({ dark }) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <div style={pageStyle}>
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
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651134793/Website%20Content/Endevaour/History__wfxmhz.png"
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

        <div className="img_section">
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651141675/Website%20Content/Endevaour/Unfold_l3x2zt.png"
            alt="joker"
          />
        </div>

        <div className="unfold_para">
          <p className="para_fold">
            Unfold is an interesting VideoCast series that unveils a unique
            approach towards an idea that was previously most likely a regular
            one to you.
          </p>

          <div className="unfold">
            <h3>
              Unfold Episode: 01 | The Climate Change Conundrum with Dr. Anoop
              Mahajan
            </h3>

            <div className="unfold_flex">
              <div className="unfold_flex_left">
                <p>
                  A scientist at work and a protagonist at heart, Dr. Anoop
                  Mahajan leveraged his know-how in Atmospheric Chemistry
                  innovating at the Centre for Climate Change Research, IITM &
                  founded Pune Science on Tap to disseminate science to the
                  masses. Tune in to the video to know how climate change is
                  affecting our lives.
                </p>
                <button>
                  <a href="https://www.youtube.com/watch?v=ZZoDpZpeAfo&list=PL0687I2dEWcn5GkhLdrPsje7r8QxE46XX&index=1">
                    Watch{" "}
                  </a>
                </button>
              </div>
              <div className="unfold_flex_right">
                <img
                  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                  alt="mki"
                />
              </div>
            </div>
          </div>

          <div className="unfold_1">
            <h3>Unfold Episode: 02 | Talking Theatre with Dr. Ajay Joshi</h3>

            <div className="unfold_flex_1">
              <div className="unfold_flex_left_1">
                <p>
                  A renowned theatre critic, a doctorate holder and a practising
                  dentist. Dr. Ajay Joshi is an accomplished personality in
                  multi-dimensional fields. He is a highly passionate individual
                  who has been instrumental in carrying forward the legacy of
                  theatre by educating the majority.
                </p>
                <button>
                  <a href="https://www.youtube.com/watch?v=p3F8ja16EFU&list=PL0687I2dEWcn5GkhLdrPsje7r8QxE46XX&index=2">
                    Watch{" "}
                  </a>
                </button>
              </div>
              <div className="unfold_flex_right_1">
                <img
                  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                  alt="mki"
                />
              </div>
            </div>
          </div>

          <div className="unfold">
            <h3>Unfold Episode: 03 | Demystifying AI with Priyanka Kasture</h3>

            <div className="unfold_flex">
              <div className="unfold_flex_left">
                <p>
                  A budding woman entrepreneur with deep knowledge in artificial
                  intelligence as well as business management. With her two
                  startups Quinkle AI and ML India, she aims to create an AI
                  ecosystem in India. Her work is a testimony of her conviction
                  toward building, expanding and empowering communities.
                </p>
                <button>
                  <a href="https://www.youtube.com/watch?v=NF_ooJwQKUA&list=PL0687I2dEWcn5GkhLdrPsje7r8QxE46XX&index=3">
                    Watch{" "}
                  </a>
                </button>
              </div>
              <div className="unfold_flex_right">
                <img
                  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                  alt="mki"
                />
              </div>
            </div>
          </div>

          <div className="unfold_1">
            <h3>Unfold Episode: 04 | 3 Circles of Life </h3>

            <div className="unfold_flex_1">
              <div className="unfold_flex_left_1">
                <p>
                  In conversation with Mr. Sameer Agashe, unravelling his
                  mind-blowing theories on how maintaining the optimum balance
                  between three important circles of life can help anyone to
                  achieve success.
                </p>
                <button>
                  <a href="https://www.youtube.com/watch?v=VPixQDKP6IA&list=PL0687I2dEWcn5GkhLdrPsje7r8QxE46XX&index=4">
                    Watch{" "}
                  </a>
                </button>
              </div>
              <div className="unfold_flex_right_1">
                <img
                  src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021526/Website%20Content/About/about3_y4ec6j.png"
                  alt="mki"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endeavour;
