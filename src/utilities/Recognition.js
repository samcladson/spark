import axios from "axios";
import * as faceapi from "face-api.js";
import { stopDetection } from "./VideoConfig";

var detectedFace = null;

export const clearVariable = () => {
  detectedFace = null;
};

export const Recognition = (
  video,
  // canvas,
  setIsDrawerOpen,
  setProgressValue,
  setStaff,
  setStatus
) => {
  setStatus(0);
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
          setStatus(1);
          detectedFace = Array.from(detection.descriptor);
          axios
            .post("https://face-recognition-siet.herokuapp.com/face", {
              encode: detectedFace,
            })
            .then((res) => {
              if (res.status === 200) {
                setStaff(res.data);
              } else {
                setStaff({ Name: "Unknown", img: "error" });
              }
            })
            .then(() => setIsDrawerOpen(true))
            .then(() => stopDetection(setProgressValue, setStatus))
            .catch(() => {
              setStaff({
                Name: "Unknown",
                img:
                  "https://cdn4.iconfinder.com/data/icons/business-square-gradient-shadow-2/512/xxx012-512.png",
              });
              setStatus(4);
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

// const Details = ({ data }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//       }}
//     >
//       <Image width={80} height="auto" src={data.img} />
//       <div>
//         <h1>{data.Name}</h1>
//         <Space>
//           <h2>Not You?</h2>
//           <Button type="primary" danger>
//             Retake
//           </Button>
//         </Space>
//       </div>
//     </div>
//   );
// };
