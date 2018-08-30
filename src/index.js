// Modules
import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// Components
import App from "./components/App";
// Styles
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/sass/index.css";

render(<App />, document.querySelector("#root"));
registerServiceWorker();
