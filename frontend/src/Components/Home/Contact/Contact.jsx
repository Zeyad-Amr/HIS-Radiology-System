import React from 'react'

import contact from '../images/contactUs.png'  

function Contact() {
  return (
  <div>
      <section class="contact" id="contact">
        <div class="image">
          <div class="content-contact block ">
            <h2>We are here to Serve you!</h2>
            <h5>
              Your complaint, request and opanion must be tacken into account.
            </h5>
            <img src={contact} alt="" />
          </div>
        </div>
        <div class="form-contact">
          <div class="content-contact">
            <h3>Contact Us</h3>
            <form action="">
              <input class="input" type="text" placeholder="Your Name" name="name" />
              <input class="input" type="email" placeholder="Your Email" name="email" />
              <textarea class="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
  </div>
  )
}

export default Contact