import React, { useState } from "react";
import { Row, Col } from "antd";

// component Import
import Video from "./Webcam";
import Progress from "./Progress";
import VerifyDetails from "./Details";
import Header from "./Header";
import Controls from "./Controls";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [staff, setStaff] = useState(undefined);
  const [isVideoPLaying, setIsVideoPlaying] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [entry, setEntry] = useState(undefined);
  const [status, setStatus] = useState(0);

  return (
    <div>
      <VerifyDetails
        staff={staff}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Header />
      <Row
        gutter={[12, 12]}
        style={style.container}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={6}>
          <Progress status={status} />
        </Col>
        <Col sm={24} md={12}>
          <Video
            entry={entry}
            isVideoPLaying={isVideoPLaying}
            progressValue={progressValue}
          />
        </Col>
        <Col sm={24} md={6}>
          <Controls
            progressValue={progressValue}
            setProgressValue={setProgressValue}
            isVideoPlaying={isVideoPLaying}
            setIsVideoPlaying={setIsVideoPlaying}
            setIsDrawerOpen={setIsDrawerOpen}
            setEntry={setEntry}
            setStaff={setStaff}
            setStatus={setStatus}
          />
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
