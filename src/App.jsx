import React from "react";
import { Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Partners,
  Faqs,
  Blog,
  About,
  Home,
  Newsletter,
  Contact,
  Privacy,
} from "./pages";

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
];

function App() {
  return (
    <div className="App">
      {routes.map(({ darkHader, path, Component }) => (
        <Route key={path} exact path={path}>
          {darkHader ? <Header dark={true} /> : <Header dark={false} />}
          <Component />
        </Route>
      ))}
      <Footer />
    </div>
  );
}

export default App;

