import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const basename = "/Portfolio-Nathan"; // set the base URL for your app

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
