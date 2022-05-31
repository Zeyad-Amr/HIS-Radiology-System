import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Signup from './Components/SignUp/Signup';
import Forgetpass from "./Components/ForgetPass/ForgetPass";
import Submit from './Components/Submit/Submit';
import Home from './Components/Home/Home';
import './Components/SignUp/SignUp.css';
import AboutUs from './Components/About_us/AboutUs';
import ContactUs from './Components/Contact_us/ContactUs';
import Departments from './Components/Departments/Departments';
import Services from './Components/Services_web/Services';


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
