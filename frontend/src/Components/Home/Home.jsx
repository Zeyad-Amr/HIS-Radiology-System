import React, { Component } from "react";
import Header from './Header/Header'
import About from "./About_Us/About";
import Departments from "./Departments/Departments";
import Services from "./Services_struc/Services";
import Contact from "./Contact/Contact";
import './Home.css'


class Home extends Component {
  render() {
    return (
      
    <React.Fragment>
    <Header/>
    <About/>
    <Departments/>
    <Services/>
    <Contact/>
    </React.Fragment>

    );
  }
}

export default Home;
