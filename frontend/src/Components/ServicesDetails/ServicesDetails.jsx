import React from "react";

function ServicesDetails() {
  const data = [
    {
      name: "cat scan",
      cost: 5000,
      dep_name: "Radiology",
      device_name: "CT",
    },
    {
        name: "cat scan",
        cost: 5000,
        dep_name: "Radiology",
        device_name: "CT",
    }
  ];
  return (
    <form className="signup-form">
      <div className="input-field-cont">
        <div class="input-field">
          <label className="input-field-cont-1">Department</label>
          <select class="gender-selection">
            <option value="Choose Department" disabled selected hidden>
              {data.dep}
            </option>
            <option value="Radiology">Radiology</option>
            <option value="Lab">Lab</option>
          </select>
        </div>
        <div class="input-field">
          <input type="text" required value={data.cost}></input>
          <label>Cost</label>
        </div>
        <div class="input-field">
          <label className="input-field-cont-1">Shift</label>
          <select class="gender-selection">
            <option value="Choose Shift" disabled selected hidden>
              {data.shift}
            </option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default ServicesDetails;
