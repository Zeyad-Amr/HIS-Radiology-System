import "../SignUp/Signup";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";



function Next2({step , setStep}) {

    return (
        <div className="cont-img" style={{display : step === 2 ? "block" :"none"}} >
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
          <div className="container-3">
          <div className="btns-back">
              <button className="btn-back1" onClick={() => setStep(1)}>Back</button>
            {/* <FontAwesomeIcon
              className="icon-back"
              icon={faAngleLeft}
              size="1x"
            /> */}
          </div>
          <div className="btns-signup">
              <button className="btn-next1" onClick={() => setStep(3)}>Next</button>
            {/* <FontAwesomeIcon
              className="icon-next"
              icon={faAngleRight}
              size="2x"
            /> */}
          </div>

          </div>

      </div>
    );
  }
export default Next2;