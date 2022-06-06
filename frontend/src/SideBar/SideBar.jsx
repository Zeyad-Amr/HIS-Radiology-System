import React, { useState } from "react";
import "../SideBar/side.css";
import { logo } from "../assets/images/logo.png";
function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
    console.log("momen");
  }

  const items = [
    {
      name: "Dashboard",
      icon: "icon",
    },
    {
      name: "Users",
      icon: "icon",
    },
    {
      name: "Departments",
      icon: "icon",
    },
    {
      name: "Services",
      icon: "icon",
    },
    {
      name: "Orders",
      icon: "icon",
    },
    {
      name: "Appointments",
      icon: "icon",
    },
    {
      name: "Devices",
      icon: "icon",
    },
  ];
  return (
    <section style={{ backgroundColor: "red", width: "100%", height: "100vh" }}>
      <nav className={sidebar ? "sideNav toggle" : "sideNav close"}>
        <header>
          <div className="pic-text">
            <span className="pic">
              <img src={logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle" onClick={showSidebar}></i>
        </header>

        <div className="pro-bar">
          <div className="pro">
            <ul className="pro-links">
              {items.map((item, index) => (
                <li className="nav-link" key={index}>
                  <a href="#">
                    <i className="bx bx-bar-chart-alt-2 icon"></i>
                    <span className="text nav-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SideBar;
