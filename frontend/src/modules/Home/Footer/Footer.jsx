import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {footer} from '../../../assets/images/footer.svg';

function Footer() {
  return (
    <div>

<div class="footer">
      <div class="container-footer">
        <div class="box">
          <h3>Akwa Mix</h3>
          <ul class="social">
            <li>
              <a href="#" class="facebook">
                <FontAwesomeIcon icon={faFacebook} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#" class="linkedin">
                <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/>
              </a>
            </li>
            <li>
              <a href="#" class="google">
              <FontAwesomeIcon icon={faGoogle} size="2x"/>
              </a>
            </li>
          </ul>
          <p class="text">
            We are here to serve you! your health is our priority..
          </p>
        </div>
        <div class="box">
          <div class="line">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class="info">Egypt, Giza</div>
          </div>
          <div class="line">
            <i class="far fa-clock fa-fw"></i>
            <div class="info">24-hour service</div>
          </div>
          <div class="line">
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class="info">
              <span>+201123333079</span>
              <span>+201067660457</span>
            </div>
          </div>
        </div>
        <div class="box footer-gallery">
          <p>Developers: <br /> Zeyad Amr <br /> Momen Mohamed <br />Ahmed AbdEl Raouf <br /> Omar Anwar <br /> Mazen Tarek <br />Omar Saad </p>
        </div>
      </div>
      <p class="copyright">Made With AKWA MIX <br /> Supervised by Dr. Ahmed Hisham</p>
    </div>
    </div>
  )
}

export default Footer






