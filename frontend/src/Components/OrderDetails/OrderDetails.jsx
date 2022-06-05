import React from 'react'
import './OrderDetails.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faUser } from "@fortawesome/free-solid-svg-icons";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";


function OrderDetails() {
  return (
    <div>

      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-stepper text-black">

                <div className="card-body p-5">

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                      <h5 className="mb-0">INVOICE <span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                      <p className="mb-0">USPS <span className="font-weight-bold">234094567242423422898</span></p>
                    </div>
                  </div>

                  <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                    <li className="step0 active text-center" id="step1"></li>
                    <li className="step0 active text-center" id="step2"></li>
                    <li className="step0 active text-center" id="step3"></li>
                    <li className="step0 text-muted text-center" id="step4"></li>
                    <li className="step0 text-muted text-end" id="step5"></li>
                  </ul>

                  <div className="d-flex justify-content-between" id='icons-bar'>
                    <div className="d-lg-flex align-items-center">
                      <FontAwesomeIcon className="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0 ml-1" icon={faHourglassStart} color="white" size="3x" id='icons-details'/>
                      <div>
                        <p className="fw-bold mb-1">Start</p>
                        {/* <p className="fw-bold mb-0">Processed</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <GiIcons.GiArchiveResearch className='fas fa-box-open fa-3x me-lg-4 mb-3 mb-lg-0 ml-3' id='icons-details' />
                      <div>
                        <p className="fw-bold mb-1">Examining</p>
                        {/* <p className="fw-bold mb-0">Shipped</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <HiIcons.HiDocumentReport className='fas fa-shipping-fast fa-3x me-lg-4 mb-3 mb-lg-0 ml-3' id='icons-details' />
                      <div>
                        <p className="fw-bold mb-1">Reporting</p>
                        {/* <p className="fw-bold mb-0">En Route</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <AiIcons.AiOutlineFileDone className='fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0 ml-3' id='icons-details' />
                      <div>
                        <p className="fw-bold mb-1">Finished</p>
                        {/* <p className="fw-bold mb-0">Arrived</p> */}
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <TbIcons.TbAmbulance className='fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0 ml-3' id='icons-details' />
                      <div>
                        <p className="fw-bold mb-1">Delivered</p>
                        {/* <p className="fw-bold mb-0">Arrived</p> */}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OrderDetails
{/* <section className="vh-100" > */ }
// style="background-color: #8c9eff;"

{/* <div className="card card-stepper text-black" style="border-radius: 16px;"></div>
style="border-radius: 16px;" */}

