import './SignUp.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <form className="form">
        <div className="text-SignUp">
            <h3>SignUp</h3>
        </div>
        <div class="input-field">
               <input type="text" required></input>
               <label>First Name</label>
            </div>
            <div class="input-field">
               <input type="text" required></input>
               <label>Last Name</label>
            </div>
           <div class="input-field">
               <input type="text" required></input>
               <label>Username</label>
            </div>
            <div class="input-field">
               <input class="pswrd" type="password" required></input>
               <span class="show">SHOW</span>
               <label>Password</label>
            </div>
            <div class="input-field">
               <input class="pswrd" type="password" required></input>
               <span class="show">SHOW</span>
               <label>Confirm Password</label>
            </div>
            <div class="input-field">
               <input type="text" required></input>
               <label>Email</label>
            </div>
            <div class="input-field">
               <input type="text" required></input>
               <label>National ID</label>
            </div>
            <div class="input-field">
               <input type="text" required></input>
               <label>Phone number</label>
            </div>
            <div class="input-field">
               <input type="text" required></input>
               <label>Address</label>
            </div>
            <div className="birthdate">
                <label htmlFor="birthdate">Birthdate :</label>
                <input id="birthdate" type="date" name="birthdate" />
           </div>
            <div class="input-field">
               <input list="gender_" id="gender" name="gender" required></input>
               <datalist id="gender_">
               <option value="Male"></option>
               <option value="Female"></option>
               </datalist>
               <label>Gender</label>
            </div>

            <div className="btns-signup">
          <Link className="save" to="/submit">
            <button className="btn-signup">Submit</button>
          </Link>
           </div>

           <div className="btns-reset">
          <Link className="save" to="/submit">
            <button className="btn-reset">Reset</button>
          </Link>
           </div>

           <div className="btns-back">
          <Link className="save" to="/submit">
            <button className="btn-back">Back</button>
          </Link>
           </div>



      </form>
    );
  }
}

export default Signup;
