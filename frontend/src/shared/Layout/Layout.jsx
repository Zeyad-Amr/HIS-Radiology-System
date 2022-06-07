import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import "./Layout.css";
import NavBar from "../NavBar/NavBar";
import SideBar from "../../SideBar/SideBar";
const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = (toggle) => {
    setCollapsed(toggle);
  };

  //   if (!Object.keys(authHeader()).length) {
  //     return <Redirect to="/login" />;
  //   }
  return (
    <Container fluid>
      <Row>
        <Col
          xs={collapsed ? 1 : 2}
          md={collapsed ? 1 : 2}
          lg={collapsed ? 1 : 2}
          style={{
            height: "100vh",
          }}
        >
          <SideBar toggle={toggleCollapsed} />
        </Col>

        <Col
          xs={collapsed ? 11 : 10}
          md={collapsed ? 11 : 10}
          lg={collapsed ? 11 : 10}
          style={{ padding: "0rem" }}
        >
          <div
            style={{
              backgroundColor: "#f0f0f0",
              width: "100%",
              height: "100vh",
              padding: "30px 30px 50px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
              // overflow: "hidden",
            }}
          >
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

//   <NavMenu collapsed={collapsed} />

// <Row>
//   <NavBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
// </Row>
