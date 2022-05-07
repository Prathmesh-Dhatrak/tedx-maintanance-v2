import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/base.scss";
import ScrollToTop from 'react-router-scroll-top'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <ScrollToTop>
    <App />
    </ScrollToTop>
  </Router>
);

