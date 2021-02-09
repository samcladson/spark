import { drawerClose } from "../action/drawerAction";
import { clearEntry } from "../action/entryAction";
import { progress } from "../action/progressAction";
import { clearStaff } from "../action/staffAction";
import { status } from "../action/statusAction";
import { cameraOff, cameraOn } from "../action/webcamAction";
import { clearVariable, Recognition } from "./Recognition";
import { stopCountDown } from "./Timer";

var loop = null;

export const startVideo = () => {
  cameraOn();
  setTimeout(() => {
    const video = document.querySelector("video");

    navigator.getUserMedia(
      { video: {}, audio: false },
      (stream) => ((video.srcObject = stream), video.play()),
      (err) => console.log(err)
    );
    loop = Recognition(video);
  }, 10);
};

export const stopVideo = () => {
  // function allocation

  const video = document.querySelector("video");
  video.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  clearVariable();
  stopCountDown();
  clearInterval(loop);
  drawerClose();
  progress(0);
  cameraOff();
  clearEntry();
  clearStaff(null);
  // setStatus(-1);
  status(-1);
};

export const stopDetection = () => {
  progress(0);
  clearInterval(loop);
  return true;
};

export const retake = (data) => {
  clearInterval(loop);
  clearVariable();
  stopCountDown();
  drawerClose();
  progress(0);
  clearStaff(null);
  if (data === "normal") {
    status(2);
  }
  setTimeout(() => {
    if (data === "normal") {
      status(3);
    }
    const video = document.querySelector("video");
    loop = Recognition(video);
  }, 2000);
};
