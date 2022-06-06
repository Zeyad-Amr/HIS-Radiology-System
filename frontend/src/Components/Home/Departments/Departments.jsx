import React from 'react'
import radiology from '../images/radiology.jpg';
import lab from '../images/lab.jpg';


function Departments() {
  return (
    <div>
      <section className="departments" id="dep-even" >

        <div className="content" data-aos="fade-left">
          <h3> OUR <span1> DEPARTMENTS </span1> </h3>
          <p></p>
          <div className="container-dep">
            <div class="flip-card" data-aos="fade-left">
              <div class="flip-card-inner">
                <div class="flip-card-front-radiology">
                  <img src={radiology} alt="" />
                </div>
                <div class="flip-card-back-radiology">
                  <h1>Radiology</h1>
                  <p>Modern and special devices</p>
                  <p>Quick Results awith reports from specialists</p>
                </div>
              </div>
            </div>
            <div class="flip-card" data-aos="fade-right">
              <div class="flip-card-inner">
                <div class="flip-card-front-lab">
                  <img src={lab} alt="" />
                </div>
                <div class="flip-card-back-lab">
                  <h1>Laboratory</h1>
                  <p>Instant results, easy from home</p>
                  <p>Online service and consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Departments