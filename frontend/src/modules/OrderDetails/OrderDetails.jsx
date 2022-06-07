import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faUser } from "@fortawesome/free-solid-svg-icons";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import Button from "../../shared/Button/Button";
import { useParams } from "react-router-dom";
import axios from "../../globals/API/axios";
import { useNavigate } from "react-router-dom";
function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState("");
  const [url, setUrl] = useState("");

  const [data, setData] = useState({});
  var [step, setSidebar] = useState(1);

  function handleClick(event) {
    event.preventDefault();
    alert("Button Clicked");
  }

  const getData = async () => {
    const response = await axios
      .get(`/order`, {
        params: { id: id },
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
        },
      })
      .then((response) => {
        const result = response.data;

        setData(result[0]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section className="vh-100">
        <div className="container py-1 h-80">
          <div className="text" id="order">
            Order Details
          </div>
          <div className="row d-flex justify-content-center align-items-flex-start h-50">
            <div className="col-12">
              <div className="card card-stepper text-black">
                <div className="card-body p-5">
                  {/* <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                      <h5 className="mb-0">
                        INVOICE{" "}
                        <span className="text-primary font-weight-bold">
                          #Y34XDHR
                        </span>
                      </h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">
                        Expected Arrival <span>01/12/19</span>
                      </p>
                      <p className="mb-0">
                        USPS{" "}
                        <span className="font-weight-bold">
                          234094567242423422898
                        </span>
                      </p>
                    </div>
                  </div> */}

                  <ul
                    id="progressbar-2"
                    className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2"
                  >
                    <li className={step >= 1 ? "holding1" : ""} id="step1"></li>
                    <li className={step >= 2 ? "holding2" : ""} id="step2"></li>
                    <li className={step >= 3 ? "holding3" : ""} id="step3"></li>
                  </ul>

                  <div
                    className="d-flex justify-content-between"
                    id="icons-bar"
                  >
                    <div className="d-lg-flex align-items-center">
                      <GiIcons.GiArchiveResearch
                        className="fas fa-box-open fa-3x me-lg-4 mb-3 mb-lg-0 ml-3"
                        id="icons-details"
                        // size={'1.5x'}
                      />
                      <div>
                        <p className="fw-bold mb-1">Examining</p>
                        {/* <p className="fw-bold mb-0">Shipped</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <HiIcons.HiDocumentReport
                        className="fas fa-shipping-fast fa-3x me-lg-4 mb-3 mb-lg-0 ml-3"
                        id="icons-details"
                      />
                      <div>
                        <p className="fw-bold mb-1">Reporting</p>
                        {/* <p className="fw-bold mb-0">En Route</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <AiIcons.AiOutlineFileDone
                        className="fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0 ml-3"
                        id="icons-details"
                      />
                      <div>
                        <p className="fw-bold mb-1">Finished</p>
                        {/* <p className="fw-bold mb-0">Arrived</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="signup-form m-5" id="dataDisplay">
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.ptFname + " " + data.ptLname}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Patien tName</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.recptFname + " " + data.recptLname}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Receptionist Name</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.create_time}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Create Time</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.ptBdate}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Patient Date</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.ptGender}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Patient Gender</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.ptPhone}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Patient Phone</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.ptSSN}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Patient SSN</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.appt_start_time}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>App Start Time</label>
            </div>

            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.cost}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Cost</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.depName}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Dep Name</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.fileURL}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Field URL</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.recptPhone}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Rec Phone</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.srvName}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Service Name</label>
            </div>
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={data.status}
                disabled={true}
                style={{ backgroundColor: "white" }}
              ></input>
              <label>Status</label>
            </div>

            <label htmlFor="" className="text">
              Report
            </label>
            <input
              type="text"
              style={{
                minWidth: "50%",
                paddingLeft: "15px",
                height: "80px",
                margin: "16px",
              }}
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
            <div class="input-field" id="inputField">
              <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
              <label>URL</label>
            </div>
            <div style={{ margin: "26px" }}>
              <Button onClick={handleClick} value="save" />
            </div>
          </form>
          <div
            className="m-4"
            style={{
              display: "flex",
              width: "95%",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleClick} value="preview report" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderDetails;
{
  /* <section className="vh-100" > */
}
// style="background-color: #8c9eff;"

{
  /* <div className="card card-stepper text-black" style="border-radius: 16px;"></div>
style="border-radius: 16px;" */
}
