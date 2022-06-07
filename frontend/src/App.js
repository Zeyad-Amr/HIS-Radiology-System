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
import Message from "./modules/Message/Message";
import NotFound from "./modules/404_page/ErrorPage";

import Users from "./modules/Pages/Users/Users";
import Devices from "./modules/Pages/Devices/Devices";
import Dashboard from "./modules/Pages/Dashboard/Dashboard";
import Orders from "./modules/Pages/Orders/Orders";
import Appointments from "./modules/Pages/Appointments/Appointments";
import Services from "./modules/Pages/Services/Services";
import Departments from "./modules/Pages/Departments/Departments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/404" element={<ErrorPage />} />

          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/services/:id" element={<ServicesDetails />} />
          <Route path="/devices/:id" element={<DevicesDetails />} />
          <Route path="/appointments/:id" element={<AppointmentDetails />} />

          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/users" element={<Users />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/admin" element={<AdminPage />} />
