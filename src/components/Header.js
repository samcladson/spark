import { Image, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/sietlogo.png";
import spark_logo from "../images/sparklogo.jpg";
import useWindowDimension from "../utilities/useWindowDimension";

const Header = () => {
  const windowWidth = useWindowDimension();
  return (
    <div style={style.header}>
      <Space>
        <Image
          src={spark_logo}
          preview={false}
          style={{ height: 45, width: "auto" }}
        />
        <h2>Spark</h2>
      </Space>

      <Space>
        <img
          src={logo}
          style={{ width: 50, height: "auto", marginRight: 15 }}
          alt="logo"
        />
        {windowWidth.width > 480 ? (
          <h2>Sri Shakthi Institute Of Engineering And Technology</h2>
        ) : null}
      </Space>
      <Link to="/admin" style={{ border: "1px solid blue", padding: 15 }}>
        Admin
      </Link>
    </div>
  );
};
const style = {
  header: {
    width: "100vw",
    height: "10vh",
    display: "flex",
    padding: "0px 15px",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  },
};
export default Header;
