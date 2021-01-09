import React from 'react';
import {Row, Col, Button, Layout, Menu, Typography} from 'antd'
import {Link} from 'react-router-dom';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;
export default function Home(){
return (
<Layout className="layout">
<Header>
    <div style={styles.logo} />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">Home</Menu.Item>
    <Menu.Item key="2">About us</Menu.Item>
    <Menu.Item key="3">Contact</Menu.Item>
    </Menu>
</Header>
<Content style={{ padding: '0 50px' }}>
    <div style={styles.siteLayoutContent}>
    <Row style={{justifyContent : "center"}}>
    <   Title> Spark</Title>      
        {/* <Video/> */}
    </Row>
    <Row >
    <Link to={`/Video/${"checkin"}`}>
        <Button style={{backgroundColor : "green",...styles.button}}>Check In</Button>
    </Link>
    <Link to={`/Video/${"checkout"}`}>
        <Button style={{backgroundColor : "orange",...styles.button}}>Check Out</Button>
    </Link>
    </Row>
    
    </div>
</Content>
<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
)
}

const styles  = {
siteLayoutContent : {
height: "90vh",
padding: 24,
background: "#fff",
},
logo : {
float: "left",
width: 120,
height: 31,
margin: "16px 24px 16px 0",
background: "rgba(255, 255, 255, 0.3)",
},
button : {
    color : "white", 
}


}