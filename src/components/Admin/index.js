import React from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import { useSelector } from "react-redux";
const Admin = () => {
  const auth = useSelector((state) => state.Auth);

  return sessionStorage.length > 0 ? <AdminPanel /> : <AdminLogin />;
};

export default Admin;
