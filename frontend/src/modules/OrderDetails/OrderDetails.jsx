import React, { useState } from "react";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faUser } from "@fortawesome/free-solid-svg-icons";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import Button from "../../shared/Button/Button";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  var [step, setSidebar] = useState(3);
  const data = {
    receptionist_id: "66",
    patient_id: "30",
    services_id: "2",
    result_id: "null",
    create_time: "2022-06-02",
    status: "null",
  };

  function handleClick(event) {
    event.preventDefault();
    alert("Button Clicked");
  }

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
              <input type="text" required value={data.receptionist_id}></input>
              <label>Receptionist_Id</label>
            </div>
            <div class="input-field" id="inputField">
              <input type="text" required value={data.patient_id}></input>
              <label>patient_Id</label>
            </div>
            <div class="input-field" id="inputField">
              <input type="text" required value={data.services_id}></input>
              <label>Services_Id</label>
            </div>
            <div class="input-field" id="inputField">
              <input type="text" required value={data.result_id}></input>
              <label>Result_Id</label>
            </div>

            <div class="input-field" id="inputField">
              <input type="text" required value={data.create_time}></input>
              <label>CreateTime</label>
            </div>
            <div class="input-field" id="inputField">
              <input type="text" required value={data.status}></input>
              <label>Status</label>
            </div>
          </form>
          <div
            className="m-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button onClick={handleClick} value="Click me!" />
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
