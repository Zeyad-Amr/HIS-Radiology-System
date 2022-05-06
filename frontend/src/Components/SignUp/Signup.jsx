import "./SignUp.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Signup extends Component {
  render() {
    return (
      <div className="cont-img">
        <form className="form-signup">
          <div className="text-SignUp">
            <h3>SignUp</h3>
            <FontAwesomeIcon
              className="icon-login"
              icon={faArrowRightToBracket}
              size="2x"
            />
          </div>
          <div className="input-field-cont">
            <div class="input-field">
              <input type="text" required></input>
              <label>First Name</label>
            </div>
            <div class="input-field">
              <input type="text" required></input>
              <label>Last Name</label>
            </div>
            <div class="input-field">
              <input type="text" required></input>
              <label>Username</label>
            </div>
          </div>
          <div className="btns-signup">
            <Link className="next" to="/next1">
              <button className="btn-next1">Next</button>
            </Link>
            <FontAwesomeIcon
              className="icon-next"
              icon={faAngleRight}
              size="2x"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
