import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import store from "../src/store/MyStore";
import {
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  loadSsdMobilenetv1Model,
} from "face-api.js";
import { Provider } from "react-redux";

Promise.all([
  loadSsdMobilenetv1Model("/models"),
  loadFaceRecognitionModel("/models"),
  loadFaceLandmarkModel("/models"),
]).then(() =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
);
