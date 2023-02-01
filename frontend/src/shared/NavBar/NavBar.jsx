import React from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import logo from "../../assets/images/doctorpatient.svg";
// import authHeader from "../../globals/auth-header";
// import { logout } from "../../modules/Login/Services";

const NavBar = ({ toggleCollapsed, collapsed }) => {
  return (
    <Navbar
      style={{
        background: "#010e30",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 20,
      }}
      expand={false}
    >
      <Container fluid bg="#010e30">
        <Row xs={4}>
          <Col xs={2}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "3.3em",
                margin: "-5px 0 -5px 0",
                padding: "0",
              }}
            />
          </Col>
          <Col xs={6}>
            <h2 style={{ color: "white", marginBottom: 0 }}>Dashboard</h2>
          </Col>
          <Col xs={1}>
            {
              <div
                onClick={toggleCollapsed}
                style={{
                  marginLeft: "0.4em",
                  color: "#fff",
                  fontSize: "1.3em",
                  cursor: "pointer",
                }}
                type="ghost"
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
            }
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
