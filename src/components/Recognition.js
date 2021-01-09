import * as faceapi from "face-api.js";
import { loadSsdMobilenetv1Model } from "face-api.js";
const Recognition = async (video) => {
  let detection = await faceapi
    .detectSingleFace(video)
    .withFaceLandmarks()
    .withFaceDescriptor();
  if (detection) {
    console.log(detection.descriptor);
  }
};

export default Recognition;
