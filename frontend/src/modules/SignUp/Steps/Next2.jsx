import "../SignUp/Signup";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";



function Next2({step , setStep ,setEmail ,setPassword ,setConfirmPassword ,email ,password ,confirm_password}) {

    return (
        <div className="cont-img" style={{display : step === 2 ? "block" :"none"}} >
              <p class="title-1">SIGN UP</p>
              <div class="separator-1"></div>
          <div className="input-field-cont">
            <div class="input-field">
              <input type="text" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
              <FontAwesomeIcon className="signup-icon" icon={faEnvelopeCircleCheck} color="white" size="2x"/>
              <label>Email</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
              <FontAwesomeIcon className="signup-icon" icon={faLock} color="white" size="2x"/>
              <span class="show">SHOW</span>
              <label>Password</label>
            </div>
            <div class="input-field">
              <input class="pswrd" type="password" required onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password}></input>
              <FontAwesomeIcon className="signup-icon" icon={faKey} color="white" size="2x"/>
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