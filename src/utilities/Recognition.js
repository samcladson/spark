import axios from "axios";
import * as faceapi from "face-api.js";
import { drawerOpen } from "../action/drawerAction";
import { addStaff, addUnknown } from "../action/staffAction";
import { stopDetection } from "./VideoConfig";
import { progress } from "../action/progressAction";
import { status } from "../action/statusAction";

var detectedFace = null;

export const clearVariable = () => {
  detectedFace = null;
};

export const Recognition = (video) => {
  status(0);
  return setInterval(async () => {
    let detection = await faceapi
      .detectSingleFace(video)
      .withFaceLandmarks()
      .withFaceDescriptor();
    if (detection) {
      if (
        !detectedFace &&
        detection.detection.box.width > 175 &&
        detection.detection.box.height > 175
      ) {
        progress(Math.round(detection.detection._score * 100));
        if (detection.detection._score > 0.95) {
          console.log(detection.detection);
          progress(100);
          status(1);
          detectedFace = Array.from(detection.descriptor);
          axios
            .post("https://face-recognition-siet.herokuapp.com/face", {
              encode: detectedFace,
            })
            .then((res) => {
              if (res.status === 200) {
                addStaff(res.data.Name, res.data.img);
              }
            })
            .then(() => drawerOpen())
            .then(() => stopDetection())
            .catch(() => {
              addUnknown(
                "Unknown",
                "https://cdn4.iconfinder.com/data/icons/business-square-gradient-shadow-2/512/xxx012-512.png"
              );
              status(4);
              drawerOpen();
            });
        }
      } else {
        progress(Math.floor(Math.random() * 30) + 5);
      }
    } else {
      progress(0);
    }
  }, 1000);
};
