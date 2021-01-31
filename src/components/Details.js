import React, { useState } from "react";
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

const Details = ({ staff, isDrawerOpen, setIsDrawerOpen, staffNameList }) => {
  const [options, setOptions] = useState();
  const [count, setCount] = useState(5);
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

  return staff ? (
    <Drawer
      style={{ position: "absolute" }}
      getContainer={false}
      width={350}
      mask={false}
      placement="right"
      closable={false}
      onClose={() => setIsDrawerOpen(false)}
      visible={isDrawerOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "c",
        }}
      >
        <Image width={75} height="auto" src={staff.img} />
        <div>
          <h1>{staff.Name}</h1>
          <div style={style.retake}>
            <h2 style={{ margin: 10 }}>Not You?</h2>
            <Button type="primary" size="large" danger>
              Retake
            </Button>
          </div>
        </div>
      </div>
      <Divider />
      <h3 style={{ textAlign: "start" }}>Enter Manually</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AutoComplete
          size="large"
          style={{ width: "70%" }}
          placeholder="Enter your name.."
          onSearch={searchOption}
          onSelect={handleInput}
          options={options}
        />
        <Button style={{ width: "25%" }} type="primary" size="large">
          Submit
        </Button>
      </div>
      <div style={{ textAlign: "start" }}>
        <h3>Attendance will be marked in..{count}</h3>
      </div>
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
