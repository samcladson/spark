import React, { useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";

// component Import
import Video from "./Webcam";
import Progress from "./Progress";
import Header from "./Header";
import Controls from "./Controls";

import apis from "../config/ApiConfig";
import { clearStaffList, setStaffList } from "../action/staffListAction";

const Home = () => {
  useEffect(() => {
    axios
      .get(apis.url + "getName")
      .then((res) => {
        if (res.status === 200) {
          var stafflist = [];

          const list = res.data.staffName;
          list.map((staff) => {
            const obj = {};
            obj["value"] = staff;
            stafflist.push(obj);
          });
          setStaffList(stafflist);
        }
      })
      .catch((err) => console.error(err));

    return () => clearStaffList(null);
  }, []);

  return (
    <div>
      <Header />
      <Row
        gutter={[12, 12]}
        style={style.container}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={6}>
          <Progress />
        </Col>
        <Col sm={24} md={12} style={{ textAlign: "center" }}>
          <Video />
        </Col>
        <Col sm={24} md={6}>
          <Controls />
        </Col>
      </Row>
    </div>
  );
};

const style = {
  container: {
    width: "100vw",
    height: "90vh",
    padding: 20,
  },
};

export default Home;
