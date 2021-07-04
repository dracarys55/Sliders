import { StrictMode } from "react";
import ReactDOM from "react-dom";

//引入在 App.js製作的 Carousel 元件 作為使用
import App from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* 使用 StrictMode  進行開發*/}
    <App /> {/* 引入在App.js製作的 Carousel 元件*/}
  </StrictMode>,
  rootElement
);
