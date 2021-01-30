import React, { useState, useEffect } from "react";
import { Button, Progress, Space } from "antd";

const Timer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   if (isDrawerOpen) saveTimer(timer);
  // }, [isDrawerOpen]);

  const saveTimer = (timing) => {
    setTimeout(async () => {
      setIsDrawerOpen(false);
      clearInterval(savetimer);
      setTimer(0);
    }, 5500);

    const savetimer = setInterval(() => {
      timing += 20;
      setTimer(timing);
    }, 1000);
  };
  return (
    <div>
      <Progress percent={timer} type="circle" size="small" />

      {/* <Button onClick={() => saveTimer(timer)}>Start timer</Button> */}
    </div>
  );
};

export default Timer;
