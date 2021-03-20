import React, { useState, useEffect } from "react";
import { Row, Col, Skeleton, Space } from "antd";
import axios from "axios";
import DepartmentTable from "./dashboardComponents/DepartmentTable";
import Statistics from "./dashboardComponents/Statistics";
import TableDetails from "./dashboardComponents/TableDetails";
const Dashboard = () => {
  const [todayData, setTodayData] = useState();
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => setSkeleton(false), 4500);
    var getTodaysData = setInterval(() => {
      axios
        .get("https://face-recognition-siet.herokuapp.com/todayData")
        .then((res) => (res.status === 200 ? setTodayData(res.data) : null))
        .catch((err) => console.error(err));
    }, 5000);

    return () => {
      clearInterval(getTodaysData);
      console.log("clear", getTodaysData);
    };
  }, []);

  return (
    <>
      <Row gutter={[12, 12]}>
        <Col span={10}>
          {skeleton ? (
            <Skeleton active />
          ) : (
            <Space direction="vertical" style={{ width: "100%" }}>
              <Statistics todayData={todayData} />
              <DepartmentTable />
            </Space>
          )}
        </Col>
        <Col span={14}>
          {skeleton ? (
            <Skeleton active />
          ) : (
            <TableDetails todayData={todayData} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
