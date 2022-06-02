import "../SignUp/Signup";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";



function Next2({step , setStep ,setEmail ,setPassword ,setConfirmPassword}) {

    return (
        <div className="cont-img" style={{display : step === 2 ? "block" :"none"}} >
              <p class="title-1">SIGN UP</p>
              <div class="separator-1"></div>
          <div className="input-field-cont">
            <div class="input-field">
              <input type="text" required onChange={() => setEmail}></input>
              <label>Email</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required onChange={() => setPassword}></input>
              <span class="show">SHOW</span>
              <label>Password</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required onChange={() => setConfirmPassword}></input>
              <span class="show">SHOW</span>
              <label>Confirm Password</label>
            </div>
          </div>
          <div className="container-3">
          <div className="btns-back">
              <button className="btn-back1" onClick={() => setStep(1)}>Back</button>
          </div>
          <div className="btns-signup">
              <button className="btn-next1" onClick={() => setStep(3)}>Next</button>
          </div>

          </div>

      </div>
    );
  }
export default Next2;