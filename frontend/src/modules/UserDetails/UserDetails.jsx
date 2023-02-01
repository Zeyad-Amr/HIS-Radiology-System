import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../globals/API/axios";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [role, setRoleData] = useState("");
  // const [role, setRoleData] = useState("");
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
  const [degree, setDegreeData] = useState("");
  const [dep, setDepData] = useState("");
  const [salary, setSalaryData] = useState("");

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

        setData(result[0]);
        setRoleData(result[0].role);
        setDepData(result[0].dep);
        setSalaryData(result[0].salary);
        setDegreeData(result[0].degree);
      });
  };

  const updateData = async () => {
    const response = await axios
      .put(
        `/users/${id}`,
        {
          role: role,
        },
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
          },
        }
      )
      .then((response) => {
        if (role !== "patient") {
          console.log(response);
          navigate("/users");
        } else {
          console.log(response);
          navigate("/users");
          const updateData = async () => {
            const response = await axios
              .put(
                `/emp`,
                {
                  user_id: data.id,
                  salary: salary,
                  degree: degree,
                  dep_id: dep,
                },
                {
                  headers: {
                    "auth-token":
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
                  },
                }
              )
              .then((response) => {});
          };
        }
      });
  };

  useEffect(() => {
    if (role === "") {
      getData();
      console.log(data);
    } else {
      setRoleData(role);
    }
  }, [role]);

  function handleClick(event) {
    // event.preventDefault();
    // alert("Button Clicked");
    if (role !== "") {
      updateData();
    }
  }
  return (
    <div className="log" style={{ padding: "10px 30px" }}>
      <div style={{ display: "flex" }}>
        <div className="text">User Profile</div>{" "}
        <div
          style={{
            padding: "10px",
            marginRight: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={handleClick} value="Save" />
        </div>
      </div>

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
          <select
            class="gender-selection"
            onChange={(event) => {
              setRoleData(event.target.value);
              console.log(role);
            }}
          >
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
          <select
            class="gender-selection"
            onChange={(event) => {
              setDepData(event.target.value);
              console.log(role);
            }}
          >
            <option value="Choose Department" disabled selected hidden>
              {dep}
            </option>
            <option value="Radiology">Radiology</option>
            <option value="Lab">Lab</option>
          </select>
        </div>
        <div class="input-field" id="inputField">
          <input
            type="text"
            required
            value={salary}
            onChange={(event) => {
              setSalaryData(event.target.value);
              console.log(role);
            }}
          ></input>
          <label>Salary</label>
        </div>

        <div class="input-field" id="inputField">
          <input
            type="text"
            required
            value={degree}
            onChange={(event) => {
              setDegreeData(event.target.value);
              console.log(role);
            }}
          ></input>
          <label>Degree</label>
        </div>

        <div className="fady"></div>
      </form>
    </div>
  );
}

export default UserDetails;
