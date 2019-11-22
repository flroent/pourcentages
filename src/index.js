import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "src/components/App";
import store from "src/store";
import "src/styles/index.scss";

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById("root");

render(rootComponent, target);
