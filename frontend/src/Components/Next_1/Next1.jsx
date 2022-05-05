import "../SignUp/Signup";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";

class Next1 extends Component {
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
              <label>Email</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required></input>
              <span class="show">SHOW</span>
              <label>Password</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required></input>
              <span class="show">SHOW</span>
              <label>Confirm Password</label>
            </div>
          </div>
          <div className="btns-signup">
            <Link className="next" to="/next2">
              <button className="btn-next1">Next</button>
            </Link>
            <FontAwesomeIcon
              className="icon-next"
              icon={faAngleRight}
              size="2x"
            />
          </div>
          <div className="btns-back">
            <Link className="back" to="/SignUp">
              <button className="btn-back1">Back</button>
            </Link>
            <FontAwesomeIcon
              className="icon-back"
              icon={faAngleLeft}
              size="1x"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Next1;
