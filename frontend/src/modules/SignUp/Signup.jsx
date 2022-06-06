import "./SignUp.css";
import React, { useState } from "react";
import Next1 from "./Steps/Next1";
import Next2 from "./Steps/Next2";
import Next3 from "./Steps/Next3";
import Next4 from "./Steps/Next4";
import Photo from "../../assets/images/doctorpatient.svg";
import axios from "../../globals/API/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  // useDebugValue(bdate, date => date.toDateString());

  const [fname, setFirst] = useState("");
  const [lname, setLast] = useState("");
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [SSN, setNationalId] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  // const [bdate, setDate] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/users", {
      fname,
      lname,
      username,
      email,
      password,
      confirm_password,
      SSN,
      country,
      address,
      gender,
      phone,
    });
    // localStorage.setItem("token", response.data.token)
    console.log(response);
    // window.location.href='/';
    navigate("/");
  };

  return (
    <div className="signup">
      <section className="main">
        <div className="login-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <Next1
              setStep={setStep}
              step={step}
              setFirst={setFirst}
              setLast={setLast}
              setUser={setUser}
              fname={fname}
              lname={lname}
              username={username}
            />
            <Next2
              setStep={setStep}
              step={step}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              email={email}
              password={password}
              confirm_password={confirm_password}
            />
            <Next3
              setStep={setStep}
              step={step}
              setNationalId={setNationalId}
              setCountry={setCountry}
              setAddress={setAddress}
              SSN={SSN}
              country={country}
              address={address}
            />
            <Next4
              setStep={setStep}
              step={step}
              setGender={setGender}
              setPhone={setPhone}
              gender={gender}
              phone={phone}
            />
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
