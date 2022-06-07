import React from 'react'
import booking from '../images/booking.jpg';
import onRes from '../images/onlineRes.jpg';
import tracking from '../images/tracking.jpg';
import services from '../images/Services.png';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <div> 
      <section className="services" id='services'>

        <div className="image" data-aos="fade-right">
              <h3>SERVICES</h3>
              <div id='flex-img'>
              <img src={services} alt=""/>
              </div>
        </div>

        <div className="content" data-aos="fade-left">
                <Carousel
                fade
                variant="dark"
                nextLabel=""
                prevLabel="">
                <Carousel.Item interval={3000}>
            <img
              className="d-block w-100" id="slide"
              src= {tracking}
              alt="First slide"
            />
            <Carousel.Caption id='back-type'>
              <h3>Track your results at your home</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={booking}
              alt="Second slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Online booking for your tests</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={onRes}
              alt="Third slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Get your Results online</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

      </section>
    </div>
  )
}

export default Services