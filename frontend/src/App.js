import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Signup from './Components/SignUp/Signup';
import Forgetpass from "./Components/ForgetPass/ForgetPass";
import Submit from './Components/Submit/Submit';
import './Components/SignUp/SignUp.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgetpass />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
