import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Drawer,
  Image,
  Timeline,
  Divider,
  Button,
  Space,
  AutoComplete,
} from "antd";

import axios from "axios";
import apis from "../config/ApiConfig";
import Timer from "../utilities/SaveTimer";

const Details = ({ isDrawerOpen, setIsDrawerOpen, staff }) => {
  const [staffNameList, setStaffNameList] = useState();
  const [options, setOptions] = useState();
  const [selectStaffName, setSelectStaffName] = useState();

  const searchOption = (value) => {
    var opt = staffNameList.filter((staff) =>
      staff["value"].toLowerCase().includes(value)
    );
    setOptions(opt);
  };

  const handleInput = (value) => {
    setSelectStaffName(value);
  };

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
          setStaffNameList(stafflist);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return staff ? (
    <Drawer
      width={650}
      placement="right"
      closable={true}
      onClose={() => setIsDrawerOpen(false)}
      visible={isDrawerOpen}
    >
      <Row>
        <Col span={12}>
          <Image width={120} height="auto" src={staff.img} />
        </Col>
        <Col span={12}>
          <h1>{staff.Name}</h1>
          <h3>Computer Science And Engineering</h3>
          <div style={style.retake}>
            <h2 style={{ marginTop: 10, marginRight: 10 }}>Not You?</h2>
            <Button type="primary" size="large" danger>
              Retake
            </Button>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row style={style.timerContainer}>
        <Col span={12}>
          <h2>Attendance will be marked in..</h2>
        </Col>
        <Col span={12}>
          <Timer
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <AutoComplete
          style={{ width: "100%" }}
          placeholder="Enter your name.."
          onSearch={searchOption}
          onSelect={handleInput}
          options={options}
        />
      </Row>
    </Drawer>
  ) : null;
};

const style = {
  retake: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  timerContainer: {
    alignItems: "center",
  },
};

export default Details;
