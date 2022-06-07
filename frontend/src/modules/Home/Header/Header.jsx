import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loggedIn, logOut } from "../../Login/loginService";


// for images
import logo from '../../../assets/images/Hospital-Logo.svg';
import home from '../images/home.png';


function Header() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const logout = () => {
    logOut()
    window.location.reload();
  }

  
console.log(loggedIn);


  return (
  <div>
    <header className="header" id="home"  data-aos="zoom-out">

    <div className="image">
        <img src= {logo} alt="" size='2x'/>

    </div>
    

    <nav className="navbar">
        <a href="#home" >Home</a>
        {/* <Link to="/about"> */}
        <a href="#about">About Us</a>
        {/* </Link> */}
        {/* <Link to="/departments"> */}
        <a href="#departments">Departments</a>
        {/* </Link> */}
        {/* <Link to="/services"> */}
        <a href="#services">Services</a>
        {/* </Link> */}
        {/* <Link to="/contact"> */}
        <a href="#contact">Contact</a>
        {/* </Link> */}
        {loggedIn()? 
        <a style={{cursor:'pointer'}} onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          localStorage.removeItem("id");
          localStorage.removeItem("role");
          window.location.reload();
          }}>Log Out</a>
        :
        <><Link to="/login">
              <a>Login</a>
            </Link><Link to="/SignUp">
                <a>Sign UP</a>
              </Link></> }
    </nav>

    {/* responsive */}
 <div id="menu-btn" class="fas fa-bars"></div>

</header>
<section className="home" id="home-even" >

  <div className="content" data-aos="fade-left">
      <h3>MedMix<span1> Hospital </span1> </h3>
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