import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>

<div class="footer">
      <div class="container-footer">
        <div class="box">
          <h3>Elzero</h3>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div class="box">
          <ul class="links">
            <li><a href="#">Important Link 1</a></li>
            <li><a href="#">Important Link 2</a></li>
            <li><a href="#">Important Link 3</a></li>
            <li><a href="#">Important Link 4</a></li>
            <li><a href="#">Important Link 5</a></li>
          </ul>
        </div>
        <div class="box">
          <div class="line">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div>
          <div class="line">
            <i class="far fa-clock fa-fw"></i>
            <div class="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div class="line">
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div class="box footer-gallery">
          <img src="imgs/gallery-01.png" alt="" />
          <img src="imgs/gallery-02.png" alt="" />
          <img src="imgs/gallery-03.jpg" alt="" />
          <img src="imgs/gallery-04.png" alt="" />
          <img src="imgs/gallery-05.jpg" alt="" />
          <img src="imgs/gallery-06.png" alt="" />
        </div>
      </div>
      <p class="copyright">Made With &lt;3 By Elzero</p>
    </div>
    </div>
  )
}

export default Footer






