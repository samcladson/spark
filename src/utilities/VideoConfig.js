import { clearVariable, Recognition } from "./Recognition";

var loop = null;

export const startVideo = (
  setIsVideoPlaying,
  setIsDrawerOpen,
  setProgressValue,
  setStaff,
  setStatus
) => {
  setIsVideoPlaying(true);
  setTimeout(() => {
    const video = document.querySelector("video");
    const canvas = document.querySelector("canvas");
    video.width = 500;
    video.height = 375;

    navigator.getUserMedia(
      { video: {}, audio: false },
      (stream) => ((video.srcObject = stream), video.play()),
      (err) => console.log(err)
    );
    loop = Recognition(
      video,
      canvas,
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
  const video = document.querySelector("video");
  video.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  clearVariable();
  clearInterval(loop);
  setIsDrawerOpen(false);
  setProgressValue(0);
  setIsVideoPlaying(false);
  setEntry(undefined);
  setStaff(undefined);
  setStatus(0);
};

export const retake = (setProgressValue, setStatus) => {
  setProgressValue(0);
  setStatus(3);
  clearInterval(loop);
  return true;
};
