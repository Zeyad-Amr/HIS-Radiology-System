import './Login.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <form className="form">
        <div className="text-login">
          <span>Login</span>
        </div>
        <div className="input">
          <label htmlFor="user">Username :</label>
          <input
            id="user"
            type="text"
            placeholder="write your username"
            name="username"
          />
        </div>
        <div className="input">
          <label htmlFor="pass">password :</label>
          <input
            id="pass"
            type="password"
            placeholder="write your password"
            name="password"
          />
        </div>
        <Link to="/forgetpass">
          <button>forget password</button>
        </Link>
        <div className="buttons-login">
          <Link className="save" to="/submit">
            <button className="btn-save">submit</button>
          </Link>
          <input type="reset" value="Reset" />
          <Link className="back" to="/">
            <button className="btn-back">Back</button>
          </Link>
          <Link className="SignUp" to="/SignUp">
            <button className="btn-SignUp">SignUp</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Login;
