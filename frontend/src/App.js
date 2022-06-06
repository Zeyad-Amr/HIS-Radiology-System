import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import Forgetpass from "./Components/ForgetPass/ForgetPass";
import Submit from "./Components/Submit/Submit";
import Home from "./Components/Home/Home";
import "./Components/SignUp/SignUp.css";
import AboutUs from "./Components/About_us/AboutUs";
import ContactUs from "./Components/Contact_us/ContactUs";
import Departments from "./Components/Departments/Departments";
import Services from "./Components/Services_web/Services";
import ErrorPage from "./Components/404_page/ErrorPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Test";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import UserDetails from "./Components/UserDetails/UserDetails";
import ServicesDetails from "./Components/ServicesDetails/ServicesDetails";
import DevicesDetails from "./Components/DevicesDetails/DevicesDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgetpass />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/service" element={<ServicesDetails />} />
          <Route path="/device" element={<DevicesDetails />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
