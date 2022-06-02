import React from 'react'
import radiology from '../images/radiology.jpg';


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
          <img src={radiology} alt=""/>
        </div>
        <div class="flip-card-back-radiology">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
    <div class="flip-card" data-aos="fade-right">
      <div class="flip-card-inner">
        <div class="flip-card-front-lab">
          {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
        </div>
        <div class="flip-card-back-lab">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
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