import "./SignUp.css";
import React, { useState } from "react";
import Next1 from "../Next_1/Next1";
import Next2 from "../Next_2/Next2";
import Next3 from "../Next_3/Next3";
import Next4 from "../Next_4/Next4";
import Photo from "../SignUp/Images/doctorpatient.svg"
import axios from "../API/axios";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nationalId, setNationalId] = useState()
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState()
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/SignUp", { first, last , user ,email ,password
                                                 ,confirmPassword ,nationalId, country 
                                                 ,address ,gender ,phone ,date});
    // localStorage.setItem("token", response.data.token)
    console.log(response)
    // window.location.href='/';
    navigate('/');
  };

  return (
    <div className="signup">

      <section className="main">

        <div className="signup-container">
        <form className="form-signup" onSubmit={handleSubmit}>
          <Next1 setStep={setStep} step={step} setFirst={setFirst} setLast={setLast} setUser={setUser}/>
          <Next2 setStep={setStep} step={step} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword}/>
          <Next3 setStep={setStep} step={step} setNationalId={setNationalId} setCountry={setCountry} setAddress={setAddress}/>
          <Next4 setStep={setStep} step={step} setGender={setGender} setPhone={setPhone} setDate={setDate}/>
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
