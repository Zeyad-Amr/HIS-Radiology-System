import React from 'react'

function DevicesDetails() {

 const data = {
    name: "X-ray",
    arrival_date: "null",
    installation_date: "null",
    serial_number: "null",
    last_checkup:"null"
     }

  return (
    <form className="signup-form">
    <div className="serv-cont">
      <div className="text" style={{    textAlign: "center",
        fontSize: "xx-large"}}>Devices</div>

      <div class="input-field">
          <input type="text" required value={data.name}></input>
          <label>Name</label>
        </div>
      <div class="input-field">
          <input type="text" required value={data.arrival_date}></input>
          <label>ArrivalDate</label>
        </div>
      <div class="input-field">
          <input type="text" required value={data.installation_date}></input>
          <label>InstallationDate</label>
        </div>
      <div class="input-field">
          <input type="text" required value={data.serial_number}></input>
          <label>SerialNumber</label>
        </div>

        <div class="input-field">
          <input type="text" required value={data.last_checkup}></input>
          <label >LastCheckup</label>
        </div>
        </div>
    </form>
  )
}

export default DevicesDetails