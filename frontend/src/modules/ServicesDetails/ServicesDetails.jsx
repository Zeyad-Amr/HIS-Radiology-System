import React from "react";
import Button from "../Button/Button";
import './Services.css'

function ServicesDetails() {
  const data = [
    {
      name: "cat scan",
      cost: 5000,
      dep_name: "Radiology",
      device_name: "CT",
    },
  ];

  function handleClick(event) {
    event.preventDefault();
    alert('Button Clicked');
  };

  return (
    <section id="backG">
      <form className="signup-form">
        <div className="serv-cont">
          <div className="text" style={{
            textAlign: "center",
            fontSize: "xx-large",
            // marginTop: "80%"
          }}>Services</div>
          <div class="input-field">
            <input type="text" required value={data[0].name}></input>
            <label>Name</label>
          </div>
          <div class="input-field">
            <label>Department</label>
            <select class="gender-selection">
              <option value="Choose Department" disabled selected hidden>
                {data[0].dep_name}
              </option>
              <option value="Radiology">Radiology</option>
              <option value="Lab">Lab</option>
            </select>
          </div>
          <div class="input-field">
            <input type="text" required value={data[0].cost}></input>
            <label >Cost</label>
          </div>
          <div class="input-field">
            <label>DeviceName</label>
            <select class="gender-selection">
              <option value="Choose DeviceName" disabled selected hidden>
                {data[0].device_name}
              </option>
              <option value="CT">CT</option>
              <option value="MRI">MRI</option>
            </select>
          </div>
          <Button
            onClick={handleClick}
            value='Click me!'
          />
        </div>
      </form>
    </section>
  );
}

export default ServicesDetails;
