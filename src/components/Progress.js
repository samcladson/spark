import React from "react";
import { Space, Steps, Divider } from "antd";

const { Step } = Steps;

const Progress = ({ status }) => {
  return (
    <div style={style.container}>
      <Space direction="vertical" wrap>
        <h2>Progress</h2>
        <p>Wait untill all the process is executed!</p>
      </Space>
      <Divider />
      <Steps direction="vertical" current={status} style={style.steps}>
        <Step
          status={status > 0 ? "finish" : "wait"}
          title="Detecting Face"
          description="Please keep your face still."
        />
        <Step
          status={status > 1 ? "finish" : "wait"}
          title="Verifing"
          description="Wait till we verify you"
        />
        {/* <Step
          status={status > 2 ? "finish" : "wait"}
          title="Confriming"
          description="Waiting for your comfirmation"
        /> */}
        <Step
          status={status > 2 ? "finish" : "wait"}
          title="Done"
          description="Have a great day!"
        />
      </Steps>
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
export default Progress;
