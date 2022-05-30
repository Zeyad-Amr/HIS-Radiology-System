import "./Header.css";
import "./Header"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

// for images
import logo from './images/logo.png';
import home from './images/home.png';
import aboutUs from './images/aboutUs.png';
import radiology from './images/radiology.jpg';

function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
  <div>
    <header className="header"  data-aos="zoom-out">

    <div className="image">
        <img src= {logo} alt=""/>
        <a>LOGO</a>  

    </div>
    

    <nav className="navbar">
        <a href="#home" >Home</a>
        <a href="#about">About Us</a>
        <a href="#footer">Departments</a>
        <a href="#footer">Services</a>
        <a href="#footer">Contact</a>
        <a href="#footer">Login</a>
        <a href="#footer">Sign UP</a>
    </nav>

    {/* responsive */}
    <div id="menu-btn" class="fas fa-bars"></div>

</header>
<section className="home" id="home" >

  <div className="content" data-aos="fade-left">
      <h3>HOSPITAL<span1> NAME </span1> </h3>
      <h2> YOUR HEALTH IS OUR <span1> PRIORIT </span1></h2>
      <p></p>
      {/* <a href="/test" class="btn"> Check the result <span class="fas fa-chevron-right"></span> </a> */}
  </div>

	<div className="image" data-aos="fade-right">
        <img src={home} alt=""/>
  </div>



</section>

<section className="about" id="about">

<div className="image" data-aos="fade-right">
        <img src={aboutUs} alt=""/>
</div>

<div className="content" data-aos="fade-left">
    <h3>ABOUT<span1> US </span1> </h3>
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, totam dicta, iure vitae molestias accusantium quo perspiciatis et nihil deserunt officia saepe laborum ea deleniti possimus, quisquam sint mollitia ipsa.</h1>
    <p></p>
    <div className="records-boxes">
      <div className="box">
        <span className="num"> 500+ </span> 
        <span> Doctor At Work </span>
        <img src="" alt="" />
      </div>
      <div className="box">
        <span className="num"> 58796+ </span> 
        <span> Happy Patients </span>
        <img src="" alt="" />
      </div>
      <div className="box">
        <span className="num"> 500+ </span> 
        <span> Medical Beds </span>
        <img src="" alt="" />
      </div>
      <div className="box">
        <span className="num"> 200+ </span> 
        <span> Winning Awards </span>
        <img src="" alt="" />
      </div>
    </div>
</div>

</section>


<section className="departments" id="home" >

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

export default Header