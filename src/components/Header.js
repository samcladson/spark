import React from "react";
import logo from "../images/sietlogo.png";

const Header = () => {
  return (
    <div style={style.header}>
      <img src={logo} style={{ width: 50, height: "auto", marginRight: 15 }} />
      <h2>Sri Shakthi Institute Of Engineering And Technology</h2>
    </div>
  );
};
const style = {
  header: {
    width: "100vw",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 24px 50px 0px",
  },
};
export default Header;
