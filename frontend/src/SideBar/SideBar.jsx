import React, { useState } from "react";
import "../SideBar/side.css";
import { logo } from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function SideBar({ toggle }) {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
    console.log("momen");
  }

  const items = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: "icon",
    },
    {
      name: "Users",
      route: "/users",
      icon: "icon",
    },
    {
      name: "Departments",
      route: "/departments",
      icon: "icon",
    },
    {
      name: "Services",
      route: "/services",
      icon: "icon",
    },
    {
      name: "Orders",
      route: "/orders",
      icon: "icon",
    },
    {
      name: "Appointments",
      route: "/appointments",
      icon: "icon",
    },
    {
      name: "Devices",
      route: "/devices",
      icon: "icon",
    },
  ];
  return (
    <nav className={sidebar ? "sideNav toggle" : "sideNav close"}>
      <header className="sideHeader">
        <div className="pic-textNav">
          <span className="pic">
            <img src={logo} alt="" />
          </span>

          <div className="textNav logo-textNav">
            <span className="name">Codinglab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i
          className="bx bx-chevron-right toggle"
          onClick={(event) => {
            showSidebar();
            toggle(sidebar);
          }}
        ></i>
      </header>

      <div className="pro-bar">
        <div className="pro">
          <ul className="pro-links" style={{ padding: "0px" }}>
            {items.map((item, index) => (
              <li className="nav-link" style={{ padding: "0" }} key={index}>
                <Link to={item.route}>
                  <i className="bx bx-bar-chart-alt-2 iconNav"></i>
                  <span className="textNav nav-textNav">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-out iconNav"></i>
              <span className="textNav nav-textNav">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
