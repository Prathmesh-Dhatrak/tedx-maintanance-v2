import React from "react";
import "./Unfold.scss";
import grid from "../../../images/WhiteGrid.svg";
const Unfold = (dark) => {
  const pageStyle = {
    backgroundColor: dark === true ? "black" : "white",
    backgroundImage: 'url("' + grid + '")',
  };
  return (
    <div style={pageStyle} className="unfold-container">
      <div className="img_section">
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651224677/Website%20Content/Endevaour/Unfold_xietdr.png"
          alt="joker"
        />
      </div>

      <div className="unfold_para">
        <p className="para_fold">
          Unfold is an interesting VideoCast series that unveils a unique
          approach towards an idea that was previously most likely a regular one
          to you.
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
  );
};

export default Unfold;