import './SignUp.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <form className="form">
        <div className="text-SignUp">
          <span>SignUp</span>
        </div>
        <div className="first-name">
          <label htmlFor="first">First Name :</label>
          <input
            id="first"
            type="text"
            placeholder="write your First Name"
            name="firstname"
          />
        </div>
        <div className="Last-name">
          <label htmlFor="Last">Last Name :</label>
          <input
            id="Last"
            type="text"
            placeholder="write your Last Name"
            name="lastname"
          />
        </div>
        <div className="Username">
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            placeholder="write your Username"
            name="username"
          />
        </div>
        <div className="password">
          <label htmlFor="pass">Password :</label>
          <input
            id="pass"
            type="password"
            placeholder="write your password"
            name="password"
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="confirm-pass">Confirm Password :</label>
          <input
            id="confirm-pass"
            type="password"
            placeholder="Confirm your password"
            name="confirm-password"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            placeholder="write your Email"
            name="Email"
          />
        </div>
        <div className="National-ID">
          <label htmlFor="N-ID">National-ID :</label>
          <input
            id="N-ID"
            type="text"
            placeholder="write your National ID"
            name="National-ID"
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone :</label>
          <input
            id="phone"
            type="text"
            placeholder="write your phone"
            name="phone"
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address :</label>
          <input
            id="address"
            type="text"
            placeholder="write your address"
            name="address"
          />
        </div>
        <div className="birthdate">
          <label htmlFor="birthdate">Birthdate :</label>
          <input id="birthdate" type="date" name="birthdate" />
        </div>
        <div>
          <label htmlFor="gender">Gender :</label>
          <input list="gender_" id="gender" name="gender" />
          <datalist id="gender_">
            <option value="male"></option>
            <option value="female"></option>
          </datalist>
        </div>
        <div className="buttons-signup">
          <Link to="/submit">
            <input type="submit" value="Submit" />
          </Link>
          <input type="reset" value="Reset" />
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Signup;
