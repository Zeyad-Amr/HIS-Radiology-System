import React, { useState }  from "react";
import "./UserDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button/Button";

import axios from "../../globals/API/axios";



function UserDetails({userObj}) {
  const [fname, setFirst] = useState("");
  const [lname, setLast] = useState("");
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [SSN, setNationalId] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [dep, setDep] = useState("");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("");
  const [bdate, setBdate] = useState("");
  // ({fname,lname,username,email,SSN,country,address,gender,phone,bdate,role,dep,salary,shift} = userObj)
  const data = {
    username,
    email,
    fname,
    lname,
    bdate,
    gender,
    phone,
    SSN,
    country,
    address,
    role,
    dep,
    salary,
    shift,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/users/${userObj.id}`, data);
    // localStorage.setItem("token", response.token)
    console.log(response);
    // window.location.href='/';
    // navigate("/");
  };

  function handleClick(event) {
    event.preventDefault();
    alert("Button Clicked");
  }
  return (
    <div className="log">
      <div className="text">Momen</div>
      <form className="signup-form" id="dataDisplay" onSubmit={handleSubmit}>
        <div class="input-field" id="inputField">
          <input type="text" required value={fname} ></input>
          <label>First Name</label>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={lname}></input>
          <label>Last Name</label>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={username}></input>
          <label>Username</label>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={email}></input>
          <label>Email</label>
        </div>

        <div class="input-field" id="inputField">
          <input type="text" required value={SSN}></input>
          <label>National ID</label>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={phone}></input>
          <label>Phone number</label>
        </div>
        <div className="input-field" id="inputField">
          <input
            id="birthdate"
            type="text"
            name="birthdate"
            className="birthdate"
            placeholder=""
            value={bdate}
          ></input>
          <label htmlFor="birthdate">Birthdate</label>
        </div>
        <div class="input-field" id="inputField">
          <label>Gender</label>
          <select class="gender-selection">
            <option value="Choose Gender" disabled selected hidden>
              {gender}
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="input-field" id="inputField">
          <label>Role</label>
          <select class="gender-selection">
            <option value="Choose Role" disabled selected hidden>
              {role}
            </option>
            <option value="patient">patient</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        <div class="input-field" id="inputField">
          <input type="text" required value={country}></input>
          <label>Country</label>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={address}></input>
          <label>Address</label>
        </div>
        <div className="fady"></div>

        <div className="text">Momen</div>
        <div class="input-field" id="inputField">
          <label>Department</label>
          <select class="gender-selection">
            <option value="Choose Department" disabled selected hidden>
              {dep}
            </option>
            <option value="Radiology">Radiology</option>
            <option value="Lab">Lab</option>
          </select>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={salary}></input>
          <label>Salary</label>
        </div>
        <div class="input-field" id="inputField">
          <label className="input-field-cont-1">Shift</label>
          <select class="gender-selection">
            <option value="Choose Shift" disabled selected hidden>
              {shift}
            </option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="fady"></div>
        <Button onClick={handleClick} value="Click me!" />
      </form>
    </div>
  );
}

export default UserDetails;
