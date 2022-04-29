import React from "react";
import { Route } from "react-router-dom";
import { Header, Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
} from "./pages";

import {
  Endeavour,
  Edition1,
  Edition2,
  Edition3,
  Edition4,
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
    path: "/endeavour",
    darkHader: false,
    name: "Endeavour",
    Component: Endeavour,
  },
  {
    path: "/community-conversations",
    darkHader: false,
    name: "Community Conversations",
    Component: CommunityConversations,
  },
  {
    path: "/unfold",
    darkHader: false,
    name: "Unfold",
    Component: Unfold,
  },
  {
    path: "/edition1",
    darkHader: false,
    name: "Edition 1",
    Component: Edition1,
  },
  {
    path: "/edition2",
    darkHader: false,
    name: "Edition 2",
    Component: Edition2,
  },
  {
    path: "/edition3",
    darkHader: false,
    name: "Edition 1",
    Component: Edition3,
  },
  {
    path: "/edition4",
    darkHader: false,
    name: "Edition1",
    Component: Edition4,
  },
  {
    path: "/edition5",
    darkHader: false,
    name: "Edition1",
    Component: Edition5,
  },
  {
    path: "/edition6",
    darkHader: false,
    name: "Edition1",
    Component: Edition6,
  },
];

function App() {
  return (
    <div className="App">
      {routes.map(({ darkHader, path, Component }) => (
        <Route key={path} exact path={path}>
          <Header dark={darkHader} />
          <Component dark={darkHader} />
        </Route>
      ))}
      <Footer />
    </div>
  );
}

export default App;

