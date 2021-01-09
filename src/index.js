import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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
]).then(() => console.log("loaded"));

ReactDOM.render(<App />, document.getElementById("root"));