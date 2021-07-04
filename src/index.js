import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Carousel from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Carousel />
  </StrictMode>,
  rootElement
);
