import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div className="container">
      <div className="background">
         <div class="shape"></div>
          <div class="shape"></div>
      </div>
        <form className="form">
          <div className="text-login">
            <h3>Login</h3>
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
            <label htmlFor="pass">Password :</label>
            <input
              id="pass"
              type="password"
              placeholder="write your password"
              name="password"
            />
          </div>
          <Link to="/forgetpass">
            <button className="btn-forget">Forget Password?</button>
          </Link>
          <div className="btns-login">
            <Link className="save" to="/submit">
              <button className="btn-login">Login</button>
            </Link>
            <div className="icon-google">
            <FontAwesomeIcon className='icon' icon={faTree}/>
            </div>
            <Link className="SignUp" to="/SignUp">
              <button className="btn-signup">Creat an account</button>
            </Link>
          </div>
          <div className='or-block'> 
        <hr className='lines' size="1"></hr>
        <div className='or'>Or</div>
        <hr className='lines' size="1"></hr>
          </div>
          </form>
        </div>
         );
  }
}

export default Login;
