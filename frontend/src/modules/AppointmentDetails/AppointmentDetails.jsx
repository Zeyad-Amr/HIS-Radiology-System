import React from "react";
import Button from "../../shared/Button/Button";
import { useParams } from "react-router-dom";

function AppointmentDetails() {
  const { id } = useParams();

  const data = {
    start_time: "2022-06-04",
    end_time: "2022-06-04",
    services_name: "null",
    device_name: "null",
  };

  function handleClick(event) {
    event.preventDefault();
    alert("Button Clicked");
  }

  return (
    <section id="appoint">
      <form className="signup-form">
        <div className="serv-cont">
          <div
            className="text"
            style={{
              textAlign: "center",
              fontSize: "xx-large",
            }}
          >
            Appointment Details
          </div>
          <div class="input-field">
            <input type="text" required value={data.start_time}></input>
            <label>StartTime</label>
          </div>
          <div class="input-field">
            <input type="text" required value={data.end_time}></input>
            <label>EndTime</label>
          </div>
          <div class="input-field">
            <label>Devices</label>
            <select class="gender-selection">
              <option value="Choose Device" disabled selected hidden>
                {data.device_name}
              </option>
              <option value="CT">CT</option>
              <option value="MRI">MRI</option>
            </select>
          </div>
          <div class="input-field">
            <label>Services</label>
            <select class="gender-selection">
              <option value="Choose Service" disabled selected hidden>
                {data.services_name}
              </option>
              <option value="CT">Akwa</option>
              <option value="MRI">Mix</option>
            </select>
          </div>
          <Button onClick={handleClick} value="Click me!" />
        </div>
      </form>
    </section>
  );
}

export default AppointmentDetails;
