import React from "react";
import { Space, Statistic, Card, Progress } from "antd";
import { UserOutlined, UserDeleteOutlined } from "@ant-design/icons";

const Statistics = ({ todayData }) => {
  return (
    <Space
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}>
        <Statistic
          title="Today Present"
          value={todayData && todayData.totalPresent}
          prefix={<UserOutlined />}
          valueStyle={{ color: "green" }}
        />
      </Card>
      <Card style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}>
        <Statistic
          title="Today Absent"
          value={todayData && todayData.totalAbsent}
          prefix={<UserDeleteOutlined />}
          valueStyle={{ color: "orangered" }}
        />
      </Card>
      <Card style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}>
        <Progress
          percent={todayData && todayData.presentPercentage}
          width={65}
          size="default"
          type="circle"
        />
      </Card>
    </Space>
  );
};

export default Statistics;
