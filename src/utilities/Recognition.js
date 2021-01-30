import axios from "axios";
import * as faceapi from "face-api.js";

import { retake } from "./VideoConfig";

var detectedFace = null;

export const clearVariable = () => {
  detectedFace = null;
};

export const Recognition = (
  video,
  canvas,
  setIsDrawerOpen,
  setProgressValue,
  setStaff,
  setStatus
) => {
  setStatus(1);
  return setInterval(async () => {
    let detection = await faceapi
      .detectSingleFace(video)
      .withFaceLandmarks()
      .withFaceDescriptor();
    if (detection) {
      // var resizedDetections = faceapi.resizeResults(detection, {
      //   width: video.width,
      //   height: video.height,
      // });
      // faceapi.matchDimensions(canvas, {
      //   width: video.width,
      //   height: video.height,
      // });

      if (!detectedFace) {
        setProgressValue(Math.round(detection.detection._score * 100));
        if (detection.detection._score > 0.95) {
          setProgressValue(100);
          setStatus(2);
          detectedFace = Array.from(detection.descriptor);
          axios
            .post("https://face-recognition-siet.herokuapp.com/face", {
              encode: detectedFace,
            })
            .then((res) => {
              if (res.status === 200) {
                setStaff(res.data);
              }
            })
            .then(() => retake(setProgressValue, setStatus))
            .then(() => {
              setIsDrawerOpen(true);
            });
        }

        // canvas.getContext("2d").clearRect(0, 0, video.width, video.height);
        // const detectionFrame = new faceapi.draw.DrawBox(
        //   resizedDetections.detection.box,
        //   {
        //     boxColor: "blue",
        //   }
        // );
        // detectionFrame.draw(canvas);
      }
      // else {
      //   canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      //   const labeledFrame = new faceapi.draw.DrawBox(
      //     resizedDetections.detection.box,
      //     {
      //       boxColor: "green",
      //       label: staffName,
      //       drawLabelOptions: {
      //         padding: 5,
      //       },
      //     }
      //   );
      //   labeledFrame.draw(canvas);
      // }
    } else {
      setProgressValue(0);
    }
  }, 1000);
};
