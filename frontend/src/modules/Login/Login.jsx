import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../globals/API/axios";
// import {motion} from 'framer-motion/dist/es/index'
import imgLeft from "./Images/login.svg";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/login`, { user, pwd });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      // navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="login">
      <section className="side">
        <img src={imgLeft} alt="" size="2x" />
      </section>

      <section className="main">
        <div className="login-container">
          <p className="title">Welcome back</p>
          <div className="separator"></div>
          <p className="welcome-message">
            Please, provide login credential to proceed and have access to all
            our services
          </p>

          <form class="login-form" onSubmit={handleSubmit}>
            <div class="form-control">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
                color="white"
                size="2x"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
              <FontAwesomeIcon
                className="icon"
                icon={faLock}
                color="white"
                size="2x"
              />
            </div>
            <button className="submit">Login</button>
            <div className="other">
              <Link to="/SignUp">
                <a href="">Creat an account</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
