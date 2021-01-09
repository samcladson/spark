import React, { useState } from "react";
import Video from "react-webcam";
import Recognition from "./Recognition";

const Webcam = () => {
  const [isVideoPLaying, setIsVideoPlaying] = useState(false);

  if (isVideoPLaying) {
    setTimeout(() => {
      const webcam = document.querySelector("video");
      Recognition(webcam);
    }, 2500);
  }

  return (
    <div>
      {isVideoPLaying && (
        <Video
          audio={false}
          onPlaying={console.log("started")}
          width="500px"
          height="500px"
        />
      )}
      <button onClick={() => setIsVideoPlaying(true)}>Capture</button>
      <button onClick={() => setIsVideoPlaying(false)}>Close</button>
    </div>
  );
};
export default Webcam;
