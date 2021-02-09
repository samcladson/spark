import React from "react";
import Details from "../components/Details";
import { Space, Card, Image, Typography } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

const Webcam = () => {
  const entry = useSelector((state) => state.Entry);
  const isVideoPLaying = useSelector((state) => state.Webcam);
  const staff = useSelector((state) => state.Staff);
  const progressValue = useSelector((state) => state.Progress);

  return (
    <Space direction="vertical" style={style.constainer}>
      {isVideoPLaying ? (
        <Space
          direction="vertical"
          style={{ width: "100%", textAlign: "center" }}
        >
          {entry ? (
            <Title level={3} type="secondary">
              {entry}
            </Title>
          ) : null}
          <Card style={style.card}>
            <video style={style.video} width={500} height={375} />
            {progressValue > 50 && progressValue < 95 ? (
              <div style={style.info}>
                <h2 style={{ color: "white" }}>
                  Come little closer..!<br></br>or<br></br>Stand Still and look
                  ath the camera..!
                </h2>
              </div>
            ) : null}
            {staff ? <Details /> : null}
          </Card>
        </Space>
      ) : (
        <Image
          width={500}
          src="https://cdn.dribbble.com/users/2159400/screenshots/8290728/facerecognite_iconanimation.gif"
        />
      )}
    </Space>
  );
};

const style = {
  constainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "relative",
    width: 500,
    height: 375,
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 24px 50px 0px",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: 10,
  },
  info: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 450,
    height: 325,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};

export default Webcam;
