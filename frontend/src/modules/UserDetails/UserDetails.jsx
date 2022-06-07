import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button/Button";
import { useParams } from "react-router-dom";
import axios from "../../globals/API/axios";
import { padding } from "@mui/system";

function UserDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [bdate, setBdate] = useState("");
  // const [SSN, setSSN] = useState("");
  // const [gender, setGender] = useState("");
  // const [country, setCountry] = useState("");
  // const [role, setRole] = useState("");
  // const [dep, setDep] = useState("");
  // const [salary, setSalary] = useState("");
  // const [shift, setShift] = useState("");

  const getData = async () => {
    const response = await axios
      .get(`/users`, {
        params: { id: id },
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
        },
      })
      .then((response) => {
        const result = response.data;

        setData({ ...result[0], gender: "Male" });
      });
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  function handleClick(event) {
    event.preventDefault();
    alert("Button Clicked");
  }
  return (
    <div className="log" style={{ padding: "10px 30px" }}>
      <div className="text">User Profile</div>
      <form className="signup-form" id="dataDisplay">
        <div class="input-field" id="inputField">
          <input
            type="text"
            required
            value={data.fname}
            disabled="true"
            style={{ backgroundColor: "white" }}
          ></input>
          <label>First Name</label>
        </div>
        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.lname}
          ></input>
          <label>Last Name</label>
        </div>
        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.username}
          ></input>
          <label>Username</label>
        </div>
        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.email}
          ></input>
          <label>Email</label>
        </div>

        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.SSN}
          ></input>
          <label>National ID</label>
        </div>
        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.phone}
          ></input>
          <label>Phone number</label>
        </div>
        <div className="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            id="birthdate"
            type="text"
            name="birthdate"
            className="birthdate"
            placeholder=""
            value={data.bdate}
          ></input>
          <label htmlFor="birthdate">Birthdate</label>
        </div>

        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.gender}
          ></input>
          <label>Gender</label>
        </div>

        <div class="input-field" id="inputField">
          <input
            disabled="true"
            style={{ backgroundColor: "white" }}
            type="text"
            required
            value={data.address}
          ></input>
          <label>Address</label>
        </div>

        <div class="input-field" id="inputField">
          <label>Role</label>
          <select class="gender-selection">
            <option value="Choose Role" disabled selected hidden>
              {data.role}
            </option>
            <option value="patient">patient</option>
            <option value="doctor">doctor</option>
            <option value="technician">technician</option>
            <option value="receptionist">receptionist</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div className="fady"></div>
        <div className="fady"></div>
        <div className="text">Employment Data</div>
        <div class="input-field" id="inputField">
          <label>Department</label>
          <select class="gender-selection">
            <option value="Choose Department" disabled selected hidden>
              {data.dep}
            </option>
            <option value="Radiology">Radiology</option>
            <option value="Lab">Lab</option>
          </select>
        </div>
        <div class="input-field" id="inputField">
          <input type="text" required value={data.salary}></input>
          <label>Salary</label>
        </div>
        <div class="input-field" id="inputField">
          <label className="input-field-cont-1">Shift</label>
          <select class="gender-selection">
            <option value="Choose Shift" disabled selected hidden>
              {data.shift}
            </option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="fady"></div>
        <div className="fady"></div>

        <div
          style={{
            padding: "30px",
            marginRight: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={handleClick} value="Save" />
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
