import "../SignUp/SignUp.css";
import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Next1({step , setStep , setUser , setLast, setFirst ,fname ,lname ,username}) {


  
    return (
      <div className="cont-img" style={{display : step === 1 ? "block" :"none"}}>
              <p class="title-1">SIGN UP</p>
              <div class="separator-1"></div>
        <div className="input-field-cont">
          <div class="input-field">
            <input type="text" required onChange={(e) => setFirst(e.target.value)} value={fname}></input>
            <FontAwesomeIcon className="icon" icon={faPerson} color="white" size="2x"/>
            <label>First Name</label>
          </div>
          <div class="input-field">
            <input type="text" required onChange={(e) => setLast(e.target.value)} value={lname}></input>
            <FontAwesomeIcon className="icon" icon={faPerson} color="white" size="2x"/>
            <label>Last Name</label>
          </div>
          <div class="input-field">
            <input type="text" required onChange={(e) => setUser(e.target.value)} value={username}></input>
            <FontAwesomeIcon className="icon" icon={faUser} color="white" size="2x"/>
            <label>Username</label>
          </div>
        </div>
        <div className="btns-signup">
            <button className="btn-next1-1" onClick={() => setStep(2)}>Next</button>
          {/* <FontAwesomeIcon
            className="icon-next"
            icon={faAngleRight}
            size="2x"
          /> */}
        </div>
    </div>
    );
  }
export default Next1;
