import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import React from "react";
import Login from "./modules/Login/Login";
import Signup from "./modules/SignUp/Signup";
import Home from "./modules/Home/Home";
import "./modules/SignUp/SignUp.css";
import ErrorPage from "./modules/404_page/ErrorPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./modules/Test";
import OrderDetails from "./modules/OrderDetails/OrderDetails";
import UserDetails from "./modules/UserDetails/UserDetails";
import ServicesDetails from "./modules/ServicesDetails/ServicesDetails";
import DevicesDetails from "./modules/DevicesDetails/DevicesDetails";
import AppointmentDetails from "./modules/AppointmentDetails/AppointmentDetails";
import NotFound from "./modules/404_page/ErrorPage";

import Users from "./modules/Pages/Users/Users";
import Devices from "./modules/Pages/Devices/Devices";
import Dashboard from "./modules/Pages/Dashboard/Dashboard";
import Orders from "./modules/Pages/Orders/Orders";
import Appointments from "./modules/Pages/Appointments/Appointments";
import Services from "./modules/Pages/Services/Services";
import Departments from "./modules/Pages/Departments/Departments";

const obj = {
  id: 88,
  username: "ahmed",
  email: "ahmed@gmail.com",
  password: "$2b$10$1kkrooRWkNwUpiTZ28yle.EjuvGn2u.ymAPjk8.3it9MABy2qKmbG",
  create_time: null,
  fname: "ahmed",
  lname: "raouf",
  bdate: "2001-09-20T21:00:00.000Z",
  gender: "male",
  phone: "1067662457",
  SSN: "01234567893231",
  address: "5 hasan el saban fisl giza",
  role: "patient",
  country: "Egypt",
  user_id: null,
  salary: null,
  degree: null,
  shift: null,
  holidays: null,
  dep_id: null,
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/user" element={<UserDetails userObj={obj} />} />
          <Route path="/service" element={<ServicesDetails />} />
          <Route path="/device" element={<DevicesDetails />} />
          <Route path="/appointment" element={<AppointmentDetails />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/users" element={<Users />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/admin" element={<AdminPage />} />
