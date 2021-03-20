import React, { useState } from "react";
import { Layout, Menu, Space, Image, Button } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  FileDoneOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import { logout } from "../../action/AuthAction";
import spark_logo from "../../images/sparklogo.jpg";

const Pages = {
  1: { name: "Dashboard", component: <Dashboard /> },
  2: { name: "Add Staff", component: null },
  3: { name: "Start Encoding", component: null },
  4: { name: "Generate Reports", component: <Reports /> },
};

const { Sider, Content, Header } = Layout;
const AdminPanel = () => {
  const [collapse, setCollapse] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          onCollapse={() => setCollapse(!collapse)}
          collapsible
          collapsed={collapse}
        >
          <div
            style={{
              height: 60,
              margin: 15,
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Space>
              <Image
                src={spark_logo}
                preview={false}
                style={{ height: 45, width: "auto" }}
              />
              {collapse ? null : <h2 style={{ margin: 0 }}>Spark</h2>}
            </Space>
          </div>
          <Menu
            onSelect={(e) => setCurrentPage(parseInt(e.key))}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key={1} icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key={2} icon={<UserOutlined />}>
              Add Staff
            </Menu.Item>
            <Menu.Item key={3} icon={<QrcodeOutlined />}>
              Start Encoding
            </Menu.Item>
            <Menu.Item key={4} icon={<FileDoneOutlined />}>
              Get Reports
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: 15 }}>
          <Header
            style={{
              backgroundColor: "white",
              padding: "0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <h1 style={{ margin: 0 }}>
              {currentPage ? Pages[currentPage].name : null}
            </h1>
            <Space>
              <UserOutlined />
              <h3 style={{ margin: 0 }}>{sessionStorage.getItem("user")}</h3>
              <Button type="dashed" onClick={() => logout()}>
                Logout
              </Button>
            </Space>
          </Header>
          <Content style={{ backgroundColor: "white", padding: 15 }}>
            {currentPage ? Pages[currentPage].component : null}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPanel;
