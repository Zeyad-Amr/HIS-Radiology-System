import '../SignUp/Signup'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";



class Next2 extends Component {
  render() {
    return (
      <div className="cont-img">
        <form className="form-signup">
        <div className="text-SignUp">
          <h3>SignUp</h3>
          <FontAwesomeIcon className="icon-login" icon={faArrowRightToBracket} size="2x" />
        </div>
        <div className="input-field-cont">
        <div class="input-field">
            <input type="text" required></input>
            <label>National ID</label>
          </div>
          <div class="input-field">
            <input type="text" required></input>
            <label>Phone number</label>
          </div>
          <div class="input-field">
            <input type="text" required></input>
            <label>Address</label>
          </div>
          <div class="input-field">
            <input list="gender_" id="gender" name="gender" required></input>
            <datalist id="gender_">
              <option value="Male"></option>
              <option value="Female"></option>
            </datalist>
            <label>Gender</label>
          </div>
          <div className="input-field">
            <input id="birthdate" type="date" name="birthdate" className='birthdate' placeholder=''></input>
            <label htmlFor="birthdate">Birthdate</label>
          </div>
          </div>
          <div className="btns-signup">
            <Link className="submit" to="/submit">
              <button className="btn-next2">Submit</button>
            </Link>
            <FontAwesomeIcon className="icon-submit" icon={faAngleRight} size="2x" />
          </div>
          <div className="btns-back">
            <Link className="back" to="/next1">
              <button className="btn-back2">Back</button>
            </Link>
            <FontAwesomeIcon className="icon-back2" icon={faAngleLeft} size="1x" />
          </div>
          </form>
      </div>
    );
  }
}
export default Next2;