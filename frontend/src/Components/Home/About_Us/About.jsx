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
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, totam dicta, iure vitae molestias accusantium quo perspiciatis et nihil deserunt officia saepe laborum ea deleniti possimus, quisquam sint mollitia ipsa.</h1>
    <p></p>
</div>

</section>
    </div>
    
  )
}

export default About