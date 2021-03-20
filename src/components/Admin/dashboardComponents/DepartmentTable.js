import { Card, Space } from "antd";
import React from "react";

const DepartmentTable = () => {
  return (
    <Card
      title="Department wise attendance"
      style={{
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }}
    >
      <Space>
        <p>Computer Science And Engineering</p>
        <p>11</p>
      </Space>
      <Space>
        <p>Electronic And Communication Engineering</p>
        <p>20</p>
      </Space>
      <Space>
        <p>Biomedical Engineering</p>
        <p>11</p>
      </Space>
      <Space>
        <p>Agricultural Engineering</p>
        <p>11</p>
      </Space>
      <Space>
        <p>Electronic And Electrical Engineering</p>
        <p>12</p>
      </Space>
    </Card>
  );
};

export default DepartmentTable;
