import { clearVariable, Recognition } from "./Recognition";
import { stopCountDown } from "./Timer";

var loop = null;

const functions = {
  isDrawerOpen: null,
  progressValue: null,
  staff: null,
  status: null,
};

export const startVideo = (
  setIsVideoPlaying,
  setIsDrawerOpen,
  setProgressValue,
  setStaff,
  setStatus
) => {
  // function allocation
  functions.isDrawerOpen = setIsDrawerOpen;
  functions.progressValue = setProgressValue;
  functions.staff = setStaff;
  functions.status = setStatus;

  setIsVideoPlaying(true);
  setTimeout(() => {
    const video = document.querySelector("video");
    // const canvas = document.querySelector("canvas");

    navigator.getUserMedia(
      { video: {}, audio: false },
      (stream) => ((video.srcObject = stream), video.play()),
      (err) => console.log(err)
    );
    loop = Recognition(
      video,
      // canvas,
      setIsDrawerOpen,
      setProgressValue,
      setStaff,
      setStatus
    );
  }, 10);
};

export const stopVideo = (
  setIsVideoPlaying,
  setIsDrawerOpen,
  setProgressValue,
  setEntry,
  setStaff,
  setStatus
) => {
  // function allocation

  const video = document.querySelector("video");
  video.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  clearVariable();
  stopCountDown();
  clearInterval(loop);
  setIsDrawerOpen(false);
  setProgressValue(0);
  setIsVideoPlaying(false);
  setEntry(undefined);
  setStaff(undefined);
  setStatus(-1);
};

export const stopDetection = (setProgressValue) => {
  setProgressValue(0);
  clearInterval(loop);
  return true;
};

export const retake = (data) => {
  clearInterval(loop);
  clearVariable();
  stopCountDown();
  functions.isDrawerOpen(false);
  functions.progressValue(0);
  functions.staff(undefined);
  if (data === "normal") {
    functions.status(2);
  }
  setTimeout(() => {
    if (data === "normal") {
      functions.status(3);
    }
    const video = document.querySelector("video");
    // const canvas = document.querySelector("canvas");
    loop = Recognition(
      video,
      // canvas,
      functions.isDrawerOpen,
      functions.progressValue,
      functions.staff,
      functions.status
    );
  }, 2000);
};
