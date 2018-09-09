import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// import { ConnectionStrings } from "./components/connectionstrings";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
