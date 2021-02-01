import React, { useState, useEffect } from "react";
import { Drawer, Image, Divider, Button, AutoComplete } from "antd";

import { countdown, stopCountDown } from "../utilities/Timer";
import { retake } from "../utilities/VideoConfig";
import { SaveEntry } from "../utilities/SaveEntry";

const Details = ({
  staff,
  setStaff,
  entry,
  isDrawerOpen,
  setIsDrawerOpen,
  staffNameList,
}) => {
  const [options, setOptions] = useState();
  const [count, setCount] = useState(5);
  const [manualEntry, setManualEntry] = useState(false);

  const searchOption = (value) => {
    var opt = staffNameList.filter((staff) =>
      staff["value"].toLowerCase().includes(value)
    );
    setOptions(opt);
  };

  const handleInput = (value) => {
    setStaff({
      Name: value,
      img:
        "https://cdn4.iconfinder.com/data/icons/business-square-gradient-shadow-2/512/xxx012-512.png",
    });
  };

  const enterManualy = () => {
    stopCountDown();
  };

  const submitEntry = () => {
    SaveEntry(staff, entry);
    retake("normal");
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
      <Divider />
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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Saving Entry in..</h2>

            <h1 style={{ color: "green", fontSize: 42 }}>
              <b>{count}</b>
            </h1>
          </span>
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
