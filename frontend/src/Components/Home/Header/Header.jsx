import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


// for images
import logo from './images/logo.png';
import home from './images/home.png';

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
        <a href="#home">LOGO</a>  

    </div>
    

    <nav className="navbar">
        <a href="#home" >Home</a>
        <Link to="/about">
        <a>About Us</a>
        </Link>
        <Link to="/departments">
        <a >Departments</a>
        </Link>
        <Link to="/services">
        <a>Services</a>
        </Link>
        <Link to="/contact">
        <a>Contact</a>
        </Link>
        <Link to="/login">
        <a>Login</a>
        </Link>
        <Link to="/SignUp">
        <a>Sign UP</a>
        </Link>
    </nav>

    {/* responsive */}
 {/* <div id="menu-btn" class="fas fa-bars"></div>*/}

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
</div>
  )
}

export default Header