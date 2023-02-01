import React,{ useState } from 'react'


import contact from '../images/contactUs.png' 
import axios from "../../../globals/API/axios";


function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(`/contact_us`, { name, email, msg });
      console.log(response.data);
      // navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
  <div>
      <section class="contact" id="contact">
        <div class="image">
          <div class="content-contact block ">
            <h2>We are here to Serve you!</h2>
            <h5>
              Your complaint, request and opanion must be tacken into account. <br/>
              Our staff responds to text messages ASAP. You can even get answers via e-mail without having to talk to anyone.
            </h5>
            <img src={contact} alt="" />
          </div>
        </div>
        <div class="form-contact">
          <div class="content-contact">
            <h3>Contact Us</h3>
            <form action="" onSubmit={handleSubmit}>
              <input class="input" 
              type="text" placeholder="Your Name" 
              name="name" 
              onChange={(e) => setName(e.target.value)}
                value={name} />
              <input class="input" type="email" 
              placeholder="Your Email" name="email"
              onChange={(e) => setEmail(e.target.value)}
                value={email} />
              <textarea class="input" 
              placeholder="Tell Us About Your Needs" 
              name="message"
              onChange={(e) => setMsg(e.target.value)}
                value={msg}
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
  </div>
  )
}

export default Contact