import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./modules/Login/Login";
import Signup from "./modules/SignUp/Signup";
import Home from "./modules/Home/Home";
import "./modules/SignUp/SignUp.css";
import Departments from "./modules/Departments/Departments";
import ErrorPage from "./modules/404_page/ErrorPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./modules/Test";
import OrderDetails from "./modules/OrderDetails/OrderDetails";
import UserDetails from "./modules/UserDetails/UserDetails";
import ServicesDetails from "./modules/ServicesDetails/ServicesDetails";
import DevicesDetails from "./modules/DevicesDetails/DevicesDetails";
import AppointmentDetails from "./modules/AppointmentDetails/AppointmentDetails";
import Side from "./SideBar/SideBar.jsx";
import AdminPage from "./modules/AdminPage/AdminPage";
import NotFound from "./modules/404_page/ErrorPage";

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
          <Route path="/side" element={<Side />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/admin" element={<AdminPage />} />
