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
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Test";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import UserDetails from "./Components/UserDetails/UserDetails";
import ServicesDetails from "./Components/ServicesDetails/ServicesDetails";
import DevicesDetails from "./Components/DevicesDetails/DevicesDetails";

import Dashboard from "./Layout/pages/Dashboard";
import About from "./Layout/pages/About";
import Comment from "./Layout/pages/Comment";
import Analytics from "./Layout/pages/Analytics";
import Product from "./Layout/pages/Product";
import ProductList from "./Layout/pages/ProductList";

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
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/service" element={<ServicesDetails />} />
          <Route path="/device" element={<DevicesDetails />} />
          <Route path="/test" element={<Test />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/admin" element={<AdminPage />} />
