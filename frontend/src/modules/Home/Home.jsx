import React, { Component } from "react";
import Header from './Header/Header'
import About from "./About_Us/About";
import Departments from "./Departments/Departments";
import Services from "./Services_struc/Services";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import './Home.css'
import Records from "./Records/Records";


class Home extends Component {
  render() {
    return (
      
    <React.Fragment>
    <Header/>
    <About/>
    <Departments/>
    <Services/>
    <Records/>
    <Contact/>
    <Footer/>
    </React.Fragment>

    );
  }
}

export default Home;
