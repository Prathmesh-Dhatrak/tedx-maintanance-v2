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
  { path: "/", name: "Home", Component: Home },
  { path: "/partners", name: "Partners", Component: Partners },
  { path: "/faqs", name: "Faqs", Component: Faqs },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/newsletter", name: "Newsletter", Component: Newsletter },
  { path: "/about", name: "about", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/privacy", name: "Privacy", Component: Privacy },
];

function App() {
  return (
    <>
      <Header />

      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;

