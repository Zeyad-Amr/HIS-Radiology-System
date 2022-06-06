import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./modules/Login/Login";
import Signup from "./modules/SignUp/Signup";
import Forgetpass from "./modules/ForgetPass/ForgetPass";
import Submit from "./modules/Submit/Submit";
import Home from "./modules/Home/Home";
import "./modules/SignUp/SignUp.css";
import AboutUs from "./modules/About_us/AboutUs";
import ContactUs from "./modules/Contact_us/ContactUs";
import Departments from "./modules/Departments/Departments";
import Services from "./modules/Services_web/Services";
import ErrorPage from "./modules/404_page/ErrorPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./modules/Test";
import OrderDetails from "./modules/OrderDetails/OrderDetails";
import UserDetails from "./modules/UserDetails/UserDetails";
import ServicesDetails from "./modules/ServicesDetails/ServicesDetails";
import DevicesDetails from "./modules/DevicesDetails/DevicesDetails";
import AppointmentDetails from "./modules/AppointmentDetails/AppointmentDetails";

import AdminPage from "./modules/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/service" element={<ServicesDetails />} />
          <Route path="/device" element={<DevicesDetails />} />
          <Route path="/appointment" element={<AppointmentDetails />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/admin" element={<AdminPage />} />
