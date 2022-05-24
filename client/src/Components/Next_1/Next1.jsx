import "../SignUp/SignUp.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Next1({step , setStep}) {
    return (
      <div className="cont-img" style={{display : step === 1 ? "block" :"none"}}>
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
            <button className="btn-next1" onClick={() => setStep(2)}>Next</button>
          <FontAwesomeIcon
            className="icon-next"
            icon={faAngleRight}
            size="2x"
          />
        </div>
    </div>
    );
  }
export default Next1;
