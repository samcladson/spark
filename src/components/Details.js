import React, { useState, useEffect } from "react";
import { Drawer, Image, Divider, Button, AutoComplete } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { countdown, stopCountDown } from "../utilities/Timer";
import { retake } from "../utilities/VideoConfig";
import { SaveEntry } from "../utilities/SaveEntry";
import { drawerClose } from "../action/drawerAction";
import { addStaff } from "../action/staffAction";

const Details = () => {
  const [options, setOptions] = useState();
  const [count, setCount] = useState(5);
  const [manualEntry, setManualEntry] = useState(false);

  const isDrawerOpen = useSelector((state) => state.Drawer);
  const entry = useSelector((state) => state.Entry);
  const staff = useSelector((state) => state.Staff);
  const staffNameList = useSelector((state) => state.StaffList);

  const searchOption = (value) => {
    var opt = staffNameList.filter((staff) =>
      staff["value"].toLowerCase().includes(value)
    );
    setOptions(opt);
  };

  const handleInput = (value) => {
    addStaff(
      value,
      "https://cdn4.iconfinder.com/data/icons/business-square-gradient-shadow-2/512/xxx012-512.png"
    );
  };

  const enterManualy = () => {
    stopCountDown();
  };

  const submitEntry = () => {
    SaveEntry(staff, entry);
    retake("normal");
  };

  const entryTime = () => {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ist = new Date(currentTime.getTime() + (330 + currentOffset) * 6000);
    var hour = ist.getHours();
    var minute = ist.getMinutes();
    hour = hour % 12 === 0 ? 12 : hour % 12;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    var ampm = ist.getHours() >= 12 ? "PM" : "AM";
    return `${entry} at ${" " + hour} : ${minute + " " + ampm}`;
  };

  useEffect(() => {
    if (staff.Name !== "Unknown") {
      countdown(setCount, staff, entry);
    }
  }, []);

  return staff ? (
    <Drawer
      style={{ position: "absolute" }}
      getContainer={false}
      width={350}
      mask={false}
      placement="right"
      closable={false}
      onClose={() => drawerClose(false)}
      visible={isDrawerOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image width={75} height="auto" src={staff.img} />
        <div>
          <h1>{staff.Name}</h1>

          <div style={style.retake}>
            {staff.Name !== "Unknown" ? (
              <h2 style={{ margin: 10 }}>Not You?</h2>
            ) : null}
            <Button
              block={staff.Name === "Unknown" ? true : false}
              type="primary"
              size="large"
              danger
              onClick={() => retake("error")}
            >
              Retake
            </Button>
          </div>
        </div>
      </div>
      <Divider style={{ margin: 15 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {manualEntry ? (
          <>
            <AutoComplete
              size="large"
              style={{ width: "70%" }}
              placeholder="Enter your name.."
              onSearch={searchOption}
              onSelect={handleInput}
              options={options}
            />
            <Button
              onClick={() => submitEntry()}
              style={{ width: "25%" }}
              type="primary"
              size="large"
            >
              Submit
            </Button>
          </>
        ) : (
          <Button
            type="primary"
            size="large"
            block
            onClick={() => [setManualEntry(true), enterManualy()]}
          >
            Enter Manually
          </Button>
        )}
      </div>
      <Divider style={{ margin: 15 }} />
      {staff.Name !== "Unknown" ? (
        <div style={{ textAlign: "start" }}>
          <span
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <ClockCircleOutlined
              style={{
                marginRight: 15,
                fontSize: 28,
                color: entry === "CheckIn" ? "green" : "red",
              }}
            />
            <h3 style={{ marginBottom: 0 }}>{entryTime()}</h3>
          </span>
          {!manualEntry ? (
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ marginBottom: 0 }}>Saving Entry in..</h2>

              <h1 style={{ color: "green", fontSize: 42, marginBottom: 0 }}>
                <b>{count}</b>
              </h1>
            </span>
          ) : null}
        </div>
      ) : null}
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
