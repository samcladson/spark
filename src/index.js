import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import {
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  loadSsdMobilenetv1Model,
} from "face-api.js";

Promise.all([
  loadSsdMobilenetv1Model("/models"),
  loadFaceRecognitionModel("/models"),
  loadFaceLandmarkModel("/models"),
]).then(() => ReactDOM.render(<App />, document.getElementById("root")));
