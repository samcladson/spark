import React from "react";
import { Progress, Space, Button, Divider } from "antd";

import { startVideo, stopVideo } from "../utilities/VideoConfig";
import { checkIn, checkOut, clearEntry } from "../action/entryAction";
import { useSelector } from "react-redux";

const Controls = () => {
  const isVideoPlaying = useSelector((state) => state.Webcam);
  const progressValue = useSelector((state) => state.Progress);

  return (
    <div style={style.container}>
      <h2>Controls</h2>
      <p>Manage CheckIn / CheckOut here</p>
      <Divider />
      <Space direction="vertical" style={{ width: "100%" }} align="center">
        <Progress percent={progressValue} type="dashboard" />
        <p>Match Percentage</p>
        {isVideoPlaying ? (
          <Button
            type="primary"
            danger
            size="large"
            style={{ width: "100%" }}
            onClick={() => [clearEntry(), stopVideo()]}
          >
            Close
          </Button>
        ) : (
          <Space>
            <Button
              type="primary"
              size="large"
              width={250}
              onClick={() => [checkIn(), !isVideoPlaying ? startVideo() : null]}
            >
              Check In
            </Button>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "orangered",
                color: "white",
                border: "none",
              }}
              width={250}
              onClick={() => [
                checkOut(),
                !isVideoPlaying ? startVideo() : null,
              ]}
            >
              Check Out
            </Button>
          </Space>
        )}
      </Space>
    </div>
  );
};

const style = {
  container: {
    width: "100%",
    height: "auto",
    padding: 25,
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 24px 50px 0px",
    borderRadius: "5px",
  },
};

export default Controls;
