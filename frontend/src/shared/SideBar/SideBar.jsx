import React, { useState } from "react";
import "./SideBar.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

function SideBar({ toggle }) {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
    console.log("momen");
  }
  let items = [];
  const role = localStorage.role;
  switch (role) {
    case "admin":
      items = [
        {
          role: "Admin",
          roleIcon: <BsIcons.BsClipboardData />,
        },
        {
          name: "Dashboard",
          route: "/dashboard",
          icon: <BsIcons.BsClipboardData />,
        },
        {
          name: "Users",
          route: "/users",
          icon: <FaIcons.FaUsers />,
        },
        {
          name: "Departments",
          route: "/departments",
          icon: <FaIcons.FaHospital />,
        },
        {
          name: "Services",
          route: "/services",
          icon: <MdIcons.MdMedicalServices />,
        },
        {
          name: "Orders",
          route: "/orders",
          icon: <HiIcons.HiDocumentReport />,
        },
        {
          name: "Appointments",
          route: "/appointments",
          icon: <AiIcons.AiFillSchedule style={{ fontSize: "50px" }} />,
        },
        {
          name: "Devices",
          route: "/devices",
          icon: <FaIcons.FaLaptopMedical />,
        },
      ];
      break;
    case "technician":
      items = [
        {
          role: "Technician",
          roleIcon: <BsIcons.BsClipboardData />,
        },

        {
          name: "Orders",
          route: "/orders",
          icon: <HiIcons.HiDocumentReport />,
        },
        {
          name: "Services",
          route: "/services",
          icon: <MdIcons.MdMedicalServices />,
        },

        {
          name: "Appointments",
          route: "/appointments",
          icon: <AiIcons.AiFillSchedule style={{ fontSize: "50px" }} />,
        },
      ];
      break;
    case "doctor":
      items = [
        {
          role: "Doctor",
          roleIcon: <BsIcons.BsClipboardData />,
        },

        {
          name: "Orders",
          route: "/orders",
          icon: <HiIcons.HiDocumentReport />,
        },
        {
          name: "Services",
          route: "/services",
          icon: <MdIcons.MdMedicalServices />,
        },

        {
          name: "Appointments",
          route: "/appointments",
          icon: <AiIcons.AiFillSchedule style={{ fontSize: "50px" }} />,
        },
        {
          name: "Devices",
          route: "/devices",
          icon: <FaIcons.FaLaptopMedical />,
        },
      ];
      break;
    case "receptionist":
      items = [
        {
          role: "Reciptionist",
          roleIcon: <BsIcons.BsClipboardData />,
        },
        {
          name: "Orders",
          route: "/orders",
          icon: <HiIcons.HiDocumentReport />,
        },
        {
          name: "Departments",
          route: "/departments",
          icon: <FaIcons.FaHospital />,
        },
        {
          name: "Services",
          route: "/services",
          icon: <MdIcons.MdMedicalServices />,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <nav className={sidebar ? "sideNav toggle" : "sideNav close"}>
      <header className="sideHeader">
        <div className="pic-textNav">
          <span className="pic">
            <img src={logo} alt="" />
          </span>

          <div className="textNav logo-textNav">
            {/* <FaBeer /> */}
            <span className="name">{items[0].role}</span>
            {/* <span className="profession">Web developer</span> */}
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
            {items.map((item, index) => {
              if (index !== 0) {
                return (
                  <li className="nav-link" style={{ padding: "0" }} key={index}>
                    <Link to={item.route}>
                      {item.icon}
                      <span className="textNav nav-textNav">{item.name}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a style={{cursor:'pointer'}} onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              localStorage.removeItem("id");
              localStorage.removeItem("role");
              navigate("/login")
              }}>
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
