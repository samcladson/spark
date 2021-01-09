  import {Row, Col, Button, Select, Typography} from 'antd'
  import React, { useState, useEffect } from "react";
  import Video from "react-webcam";
  import Recognition from "./Recognition";
  import StaffListFn from "../api/ApiList";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {staffListFn} from '../api/ApiList';

  const { Title } = Typography;
  const { Option } = Select;

  const Webcam = (props) => {

    const [isVideoPLaying, setIsVideoPlaying] = useState(false);
    const [checkType, setCheckType] = useState(props.match.params.id)
    const [webcam , setWebcam] = useState(document.querySelector("video"))
    const [staffList, setStaffList] = useState([])
    const [todayPresent, setTodayPresent] = useState([])

    function todayPresentList(){
      axios.get("https://face-recognition-siet.herokuapp.com/todayPresent")
      .then((res)=>
      setTodayPresent(res.data.Today))
    }
    useEffect(() => {
      // setStaffList(staffListFn())
      todayPresentList()
      axios.get("https://face-recognition-siet.herokuapp.com/getName")
      .then((res)=>
      setStaffList(res.data.staffName))
    }, [])
    return (
      <div >
        <Row style={{display : "flex", height : "100vh"}}>
      <Col span={6}>
      <div style={{margin : "65px 15px 0px", padding : 20, height : "80vh", boxShadow : "0px 0px 15px rgba(0,0,0,0.2)"}}>
            <Title style={{textAlign : "center"}} level={2}>Today's Attendane List</Title>
            <hr />

            {todayPresent.map((item, i)=>{
              return (
                <div key={i}>
                  <p>{item.Name} - {item.Check_in_Time}</p>
                </div>
              )
            })}
        </div>
      </Col>
      <Col span={12}>
      <div style={{textAlign : "center"}}>
        <Title>Spark Attendance</Title>
      </div>
      
      <Video
            audio={false}
            onPlaying={console.log("started")}
            style={styles.videoBox}
          />
      </Col>
      <Col span={6}>
        <div style={{margin : "65px 15px 0px", padding : 20, boxShadow : "0px 0px 15px rgba(0,0,0,0.2)"}}>
            <Title style={{textAlign : "center"}} level={2}>Display Name</Title>
            <hr />
            <p >Checkin Time : {Date.now()}</p>
        </div>
        
        <Row style={{margin : "50px 15px"}}>
          <Col style={{paddingRight : 10, fontSize : 20}}>
          <p>Mark Manually </p>
          </Col>
          <Col>
          <Select defaultValue="Select" style={{ width: 250 }} onChange={console.log("selected")}>
          {staffList.map((staffName)=>{
             return  <Option value={staffName}>{staffName}</Option>
          })}
        </Select>
          </Col>
          <div style={{textAlign : "center"}}>
            <Button style={{backgroundColor : "gold", color : "black"}}>Mark</Button>
          </div>
        </Row>

        <Row style={{ justifyContent : "center"}}>

          <Col>
          <Link to="/">
          <Button style={{backgroundColor : "red", color : "white"}}>Close</Button>
          </Link>
          
          </Col>
          <Col>
          <Button style={{backgroundColor : "grey", color : "white"}}>Retake</Button>
          </Col>
        </Row>
        
      </Col>
        </Row>
      </div>
    );
  };
  export default Webcam;

  const styles = {
    videoBox : {
      height : "80%",
      width : "100%",
    }
  }