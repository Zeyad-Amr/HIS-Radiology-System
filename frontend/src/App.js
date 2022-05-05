import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Signup from './Components/SignUp/Signup';
import Forgetpass from "./Components/ForgetPass/ForgetPass";
import Submit from './Components/Submit/Submit';
import './Components/SignUp/SignUp.css';
import "./App.css";
import Next1 from './Components/Next_1/Next1';
import Next2 from './Components/Next_2/Next2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgetpass />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/next1" element={<Next1 />} />
          <Route path="/next2" element={<Next2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
