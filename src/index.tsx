import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./style.scss";
import "normalize.css";

const root = ReactDOM.createRoot(document.querySelector(".root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
