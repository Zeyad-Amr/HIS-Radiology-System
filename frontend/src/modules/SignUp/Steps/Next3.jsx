import "../SignUp.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faIdCard,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Next3({
  step,
  setStep,
  setNationalId,
  setCountry,
  setAddress,
  SSN,
  country,
  address,
}) {
  return (
    <div
      className="cont-img"
      style={{ display: step === 3 ? "block" : "none" }}
    >
      <p class="title-1">SIGN UP</p>
      <div class="separator-1"></div>
      <div className="input-field-cont">
        <div class="input-field">
          <input
            type="text"
            required
            onChange={(e) => setNationalId(e.target.value)}
            value={SSN}
          ></input>
          <FontAwesomeIcon
            className="signup-icon"
            icon={faIdCard}
            color="white"
            size="2x"
          />
          <label>National ID</label>
        </div>
        <div class="input-field">
          <input
            type="text"
            required
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          ></input>
          <FontAwesomeIcon
            className="signup-icon"
            icon={faEarthAmericas}
            color="white"
            size="2x"
          />
          <label>Country</label>
        </div>
        <div class="input-field">
          <input
            type="text"
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
          <FontAwesomeIcon
            className="signup-icon"
            icon={faMapLocation}
            color="white"
            size="2x"
          />
          <label>Address</label>
        </div>
      </div>
      <div className="container-3">
        <div className="btns-back">
          <button className="btn-back1" onClick={() => setStep(2)}>
            Back
          </button>
        </div>
        <div className="btns-signup">
          <button className="btn-next1" onClick={() => setStep(4)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Next3;
