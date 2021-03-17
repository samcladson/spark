import { Input, Card, DatePicker, Space, Button, message } from "antd";
import React, { useState } from "react";
import axios from "axios";

const Reports = () => {
  const [data, setData] = useState({ from: "", to: "", email: "" });

  const sendMail = () => {
    axios
      .post("https://face-recognition-siet.herokuapp.com/getReport", data)
      .then((res) =>
        res.status === 200
          ? message.success("Sent successfully")
          : message.error("Not Sent")
      )
      .catch((err) => console.error(err));
  };
  const downloadFile = (name, blob) => {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, name);
      message.success("Downloaded successfully");
    } else {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      message.success("Downloaded successfully");
    }
  };
  const downloadReport = (e) => {
    const payload = {
      from: data.from,
      to: data.to,
    };
    var blob;
    axios
      .post("https://face-recognition-siet.herokuapp.com/getReport", payload)
      .then((res) => {
        if (res.status === 200) {
          blob = new Blob([res.data], { type: "text/csv;charset=utf-8;" });
          downloadFile("reports.csv", blob);
        } else {
          message.error("download failed");
        }
      })
      .catch(() => message.error("download failed"));
  };

  return (
    <Card style={{ width: 350, height: 200 }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          size="large"
          placeholder="E-Mail"
          type="email"
          onChange={(e) =>
            setData((state) => ({
              ...state,
              email: e.target.value,
            }))
          }
        />
        <Space>
          <DatePicker
            onChange={(e) =>
              setData((state) => ({
                ...state,
                from: e
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-"),
              }))
            }
            size="large"
            placeholder="Start Date"
          />
          <DatePicker
            size="large"
            placeholder="End Date"
            onChange={(e) =>
              setData((state) => ({
                ...state,
                to: e
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-"),
              }))
            }
          />
        </Space>
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button type="primary" onClick={() => sendMail()}>
            Email This Report
          </Button>
          <Button type="primary" onClick={(e) => downloadReport(e)} danger>
            Download Report
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default Reports;
