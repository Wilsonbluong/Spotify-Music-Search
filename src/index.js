import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
