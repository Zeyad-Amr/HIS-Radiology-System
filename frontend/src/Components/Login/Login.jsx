import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
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
              <h3>Login</h3>
              <FontAwesomeIcon className="icon-login" icon={faArrowCircleRight} size="2x" />
        <div class="input-field-L">
               <input type="text" required></input>
               <label>Username</label>
            </div>
            <div class="input-field-L">
               <input class="pswrd" type="password" required></input>
               <span class="show">SHOW</span>
               <label>Password</label>
            </div>
           
      <Link to="/forgetpass">
        <button className="btn-forget">Forget Password?</button>
      </Link>
      <div className="btns-login">
        <Link className="save" to="/submit">
          <button className="btn-login">Login</button>
        </Link>
        <div className="icon-google">
            <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/>
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
