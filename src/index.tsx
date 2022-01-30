import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";

console.log(
  "I will love you till the end of time, \nI would wait a million years. \nPromise you'll remember that you're mine."
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
