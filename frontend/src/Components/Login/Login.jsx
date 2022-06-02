import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "../API/axios";

function Login() {

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", { user, pwd });
    // localStorage.setItem("token", response.data.token)
    console.log(response)
  };

  

  return (
    <div
      className="container"
      style={{ margin: "0", width: "100%", maxWidth: "100%" }}
    >
      <div className="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <FontAwesomeIcon
          className="icon-login"
          icon={faArrowCircleRight}
          size="2x"
        />
        <div class="input-field-L">
          <input
            type="text"
            id="username"
            required
            onChange={(e) => setUser(e.target.value)}
            value={user}
          ></input>
          <label>Username</label>
        </div>
        <div class="input-field-L">
          <input
            class="pswrd"
            type="password"
            required
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          ></input>
          <span class="show">SHOW</span>
          <label>Password</label>
        </div>
        <Link to="/forgetpass">
          <button className="btn-forget">Forget Password?</button>
        </Link>
        <div className="btns-login">
            <button className="btn-login">Login</button>
          <div className="icon-google">
            <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/>
          </div>
          <Link className="SignUp" to="/SignUp">
            <button className="btn-signup">Creat an account</button>
          </Link>
        </div>
        <div className="or-block">
          <hr className="lines" size="1"></hr>
          <div className="or">Or</div>
          <hr className="lines" size="1"></hr>
        </div>
      </form>
    </div>
  );
}

export default Login;
