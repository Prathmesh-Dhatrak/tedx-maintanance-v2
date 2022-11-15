import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Header, Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarWave } from "react-cssfx-loading";

import {
  Partners,
  Faqs,
  Blog,
  About,
  Home,
  Newsletter,
  Contact,
  Privacy,
  Lookbook,
  Creatives,
  NewsletterSignup,
  EventDetails,
} from "./pages";

import {
  // Edition1,
  // Edition2,
  // Edition3,
  // Edition4,
  Edition5,
  Edition6,
  Unfold,
  CommunityConversations,
} from "./pages/Endeavour";

const routes = [
  { path: "/", darkHader: true, name: "Home", Component: Home },
  {
    path: "/partners",
    darkHader: false,
    name: "Partners",
    Component: Partners,
  },
  { path: "/faqs", darkHader: false, name: "Faqs", Component: Faqs },
  { path: "/blog", darkHader: false, name: "Blog", Component: Blog },
  {
    path: "/newsletter",
    darkHader: false,
    name: "Newsletter",
    Component: Newsletter,
  },
  { path: "/about", darkHader: false, name: "about", Component: About },
  { path: "/contact", darkHader: false, name: "Contact", Component: Contact },
  { path: "/privacy", darkHader: false, name: "Privacy", Component: Privacy },
  { path: "/lookbook", darkHader: true, name: "lookbook", Component: Lookbook },
  {
    path: "/creatives",
    darkHader: false,
    name: "Creatives",
    Component: Creatives,
  },
  {
    path: "/endeavour/community-conversations",
    darkHader: false,
    name: "Community Conversations",
    Component: CommunityConversations,
  },
  {
    path: "/endeavour/unfold",
    darkHader: true,
    name: "Unfold",
    Component: Unfold,
  },
  // {
  //   path: "/edition1",
  //   darkHader: false,
  //   name: "Edition 1",
  //   Component: Edition1,
  // },
  // {
  //   path: "/edition2",
  //   darkHader: false,
  //   name: "Edition 2",
  //   Component: Edition2,
  // },
  // {
  //   path: "/edition3",
  //   darkHader: false,
  //   name: "Edition 1",
  //   Component: Edition3,
  // },
  // {
  //   path: "/edition4",
  //   darkHader: false,
  //   name: "Edition1",
  //   Component: Edition4,
  // },
  {
    path: "/endeavour/edition5",
    darkHader: false,
    name: "Edition5",
    Component: Edition5,
  },
  {
    path: "/endeavour/edition6",
    darkHader: true,
    name: "Edition6",
    Component: Edition6,
  },
  {
    path: "/event-details",
    darkHader: true,
    name: "EventDetails",
    Component: EventDetails,
  },
];

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App" style={{ background: "black" }}>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarWave height="50px" color="#FF0000" width="100px" />
        </div>
      ) : (
        <>
          {routes.map(({ darkHader, path, Component }) => (
            <Route key={path} exact path={path}>
              <Header dark={darkHader} />
              <Component dark={darkHader} />
              <Footer />
            </Route>
          ))}
        </>
      )}

      <Route path="/newsletter-signup" component={NewsletterSignup} />
      <Route
        path="/attendee-application"
        component={() => {
          window.location.href = "https://forms.gle/mFp1bRc1r46H1ZBe7";
          return null;
        }}
      />
      <Route
        path="/join-us"
        component={() => {
          window.location.href = "https://forms.gle/uzy3TYa8hSjJLrwA9";
          return null;
        }}
      />
      <Route
        path="/committees"
        component={() => {
          window.location.href =
            "https://drive.google.com/file/d/1qtbo-PLfxc_D0Jm-gKBgC2r8bCiB_9uF/view";
          return null;
        }}
      />
      <Route
        path="/newsletter-ideas"
        component={() => {
          window.location.href = "https://forms.gle/uapC2PTpcvZ9S3i2A";
          return null;
        }}
      />
      <Route
        path="/community-conversations"
        component={() => {
          window.location.href = "https://forms.gle/M9gvDkFNY4DzLvWt7";
          return null;
        }}
      />
      <Route
        path="/speaker-nomination"
        component={() => {
          window.location.href = "https://forms.gle/pZkejYwMKeTBJqcK8";
          return null;
        }}
      />
      <Route
        path="/volunteer"
        component={() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSdFhiZ9s1lBLfoZCe7f1olehZgG9nsGfrRMhfYclMmbu8QuOw/viewform";
          return null;
        }}
      />
      <Route
        path="/fy-recruitment"
        component={() => {
          window.location.href = "https://forms.gle/XqkUaxHw3apudAEZ6";
          return null;
        }}
      />
      <Route
        path="/experience-tedxvitpune"
        component={() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSfEE_KmYqFRMvsYSSWYLfr0NDC1YHjlzvDiMKEr-kP6wBJRfg/viewform";
          return null;
        }}
      />
    </div>
  );
}

export default App;
