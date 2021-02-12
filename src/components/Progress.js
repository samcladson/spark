import React from "react";
import { Space, Steps, Divider } from "antd";
import {
  SolutionOutlined,
  ScanOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import useWindowDimension from "../utilities/useWindowDimension";

const { Step } = Steps;

const Progress = () => {
  const windowWidth = useWindowDimension();
  const status = useSelector((state) => state.Status);
  return windowWidth.width > 480 ? (
    <div
      style={{
        width: windowWidth.width < 480 ? 350 : "100%",
        height: "auto",
        padding: 25,
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 24px 50px 0px",
        borderRadius: "5px",
      }}
    >
      <Space direction="vertical" wrap>
        <h2>Progress</h2>
        <p>Wait untill all the process is executed!</p>
      </Space>
      <Divider />
      <Steps size="default" direction="vertical" current={status}>
        <Step
          status={status < 0 ? "wait" : status === 0 ? "process" : "finish"}
          title="Detecting Face"
          description="Please keep your face still."
        />
        <Step
          status={
            status < 1
              ? "wait"
              : status === 1
              ? "process"
              : status === 4
              ? "error"
              : "finish"
          }
          title="Verifing"
          description="Wait till we verify you"
        />

        <Step
          status={
            status < 2 || status === 4
              ? "wait"
              : status === 2
              ? "process"
              : "finish"
          }
          title="Done"
          description="Have a great day!"
        />
      </Steps>
    </div>
  ) : (
    <Steps size="default" current={status}>
      <Step
        status={status < 0 ? "wait" : status === 0 ? "process" : "finish"}
        title="Detect"
        icon={<ScanOutlined />}
      />
      <Step
        status={
          status < 1
            ? "wait"
            : status === 1
            ? "process"
            : status === 4
            ? "error"
            : "finish"
        }
        title="Verifing"
        icon={<SolutionOutlined />}
      />

      <Step
        status={
          status < 2 || status === 4
            ? "wait"
            : status === 2
            ? "process"
            : "finish"
        }
        title="Done"
        icon={<LikeOutlined />}
      />
    </Steps>
  );
};

export default Progress;
