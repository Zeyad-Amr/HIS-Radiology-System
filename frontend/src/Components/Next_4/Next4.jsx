import "../SignUp/Signup";
import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Next4({ step, setStep ,setDate ,setPhone ,setGender ,gender ,phone ,bdate }) {
  return (
    <div
      className="cont-img"
      style={{ display: step === 4 ? "block" : "none" }}
    >
              <p class="title-1">SIGN UP</p>
              <div class="separator-1"></div>
      <div className="input-field-cont">
      <div class="input-field">
      <label className="input-field-cont-1">Gender</label>
    <select class="gender-selection" onChange={(e) => setGender(e.target.value)} value={gender}>
      <option value="Choose Gender">Choose Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
      </div>
      <div class="input-field">
          <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
          <label>Phone number</label>
        </div>
      <div className="input-field">
        <input
          id="birthdate"
          type="date"
          name="birthdate"
          className="birthdate"
          placeholder=""
          onChange={(e) => setDate(e.target.value)} value={bdate}
        ></input>
        <label htmlFor="birthdate">Birthdate</label>
      </div>
      </div>
      <div className="container-3">
        <div className="btns-back">
          <button className="btn-back1" onClick={() => setStep(3)}>Back</button>
        </div>
        
      </div>
  
    </div>
  );
}

export default Next4;
