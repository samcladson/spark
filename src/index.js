import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  loadSsdMobilenetv1Model,
} from "face-api.js";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

Promise.all([
  loadSsdMobilenetv1Model("/models"),
  loadFaceRecognitionModel("/models"),
  loadFaceLandmarkModel("/models"),
]).then(() => console.log("loaded"));

ReactDOM.render(<App />, document.getElementById("root"));
