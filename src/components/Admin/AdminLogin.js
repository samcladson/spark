import React, { useState } from "react";
import { Input, Card, Space, Button, Image, message } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import axios from "axios";
import { login as loginSuccess } from "../../action/AuthAction";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username && password) {
      axios
        .post("https://face-recognition-siet.herokuapp.com/login", {
          userName: username,
          password: password,
        })
        .then((res) => {
          if (res.data.status) {
            message.success("Login successfull");
            loginSuccess(username, true);
          } else {
            message.error("Incorrect username or password");
          }
        })
        .catch((err) => {
          message.error("Login failed");
        });
    } else {
      message.warning(
        !username && !password
          ? "Username and Password canot be empty"
          : !username
          ? "Enter Username"
          : !password
          ? "Enter Password"
          : null
      );
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: 500,
          height: 500,
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Admin Login</h1>
          <Image
            preview={false}
            src="https://hack.codingblocks.com/_nuxt/img/d688d5e.gif"
            style={{ width: "100%", height: "auto" }}
          />
          <Input
            prefix={<UserOutlined />}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            prefix={<UnlockOutlined />}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="primary" block onClick={() => login()}>
            Login
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default AdminLogin;
