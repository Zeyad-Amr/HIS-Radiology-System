import "./SignUp.css";
import React, { useState } from "react";
import Next1 from "../Next_1/Next1";
import Next2 from "../Next_2/Next2";
import Next3 from "../Next_3/Next3";
import Next4 from "../Next_4/Next4";
import Photo from "../SignUp/Images/doctorpatient.svg"

function Signup() {
  const [step, setStep] = useState(1);

  return (
    <div className="signup">

      <section className="main">

        <div className="signup-container">
        <form className="form-signup">
          <Next1 setStep={setStep} step={step} />
          <Next2 setStep={setStep} step={step} />
          <Next3 setStep={setStep} step={step} />
          <Next4 setStep={setStep} step={step} />
        </form>
        </div>
      </section>
      <section className="side-1">
        <img src={Photo} alt="" />
      </section>
    </div>

  );
}

export default Signup;
