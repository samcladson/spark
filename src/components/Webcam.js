import React from "react";
import Details from "../components/Details";
import { Image, Typography } from "antd";
import { useSelector } from "react-redux";
import useWindowDimension from "../utilities/useWindowDimension";
const { Title } = Typography;

const Webcam = () => {
  const entry = useSelector((state) => state.Entry);
  const isVideoPLaying = useSelector((state) => state.Webcam);
  const staff = useSelector((state) => state.Staff);
  const progressValue = useSelector((state) => state.Progress);
  const windowWidth = useWindowDimension();

  return (
    <div style={style.constainer}>
      {isVideoPLaying ? (
        <div>
          {entry ? (
            <Title level={3} type="secondary">
              {entry}
            </Title>
          ) : null}
          <div
            style={{
              position: "relative",
              height: windowWidth.width < 480 ? 350 : 375,
              width: windowWidth.width < 480 ? 350 : 500,
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 24px 50px 0px",
              overflow: "hidden",
            }}
          >
            <video
              style={style.video}
              width={windowWidth.width < 480 ? 400 : 500}
              height={windowWidth.width < 480 ? 250 : 375}
            />
            {progressValue > 20 && progressValue < 95 ? (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: windowWidth.width < 480 ? 350 : "100%",
                  height: windowWidth.width < 480 ? 350 : 375,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              >
                <h2 style={{ color: "white" }}>
                  Come little closer..!<br></br>or<br></br>Stand Still and look
                  ath the camera..!
                </h2>
              </div>
            ) : null}
            {staff ? <Details /> : null}
          </div>
        </div>
      ) : (
        <Image
          preview={false}
          width={windowWidth.width < 480 ? "100%" : 500}
          height={windowWidth.width < 480 ? "auto" : 375}
          src="https://cdn.dribbble.com/users/2159400/screenshots/8290728/facerecognite_iconanimation.gif"
        />
      )}
    </div>
  );
};

const style = {
  constainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: 10,
  },
};

export default Webcam;
