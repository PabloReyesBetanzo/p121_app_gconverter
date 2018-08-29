// Modules
import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// Components
import App from "./components/App";
// Styles
import "./assets/sass/index.css";

render(<App />, document.querySelector("#root"));
