import React from 'react'
import aboutUs from '../images/aboutUs.png';


function About() {
  return (
    
    <div>
    <section className="about" id="about">

<div className="image" data-aos="fade-right">
        <img src={aboutUs} alt=""/>
</div>

<div className="content" data-aos="fade-left">
    <h3>ABOUT<span1> US </span1> </h3>
    <h1>The idea of establishing a world-class medical care facility with unique and high quality medical services originated in February 1992. The construction phase started in July 1996, the consultants during this phase were Egyptian, American and British construction and consultancy firms.</h1>
    <p></p>
</div>

</section>
    </div>
    
  )
}

export default About