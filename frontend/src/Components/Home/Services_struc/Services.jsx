import React from 'react'
import meeting from '../images/online-meeting.png';
import services from '../images/Services.png';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <div> 
      <section className="services">

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
              src= {meeting}
              alt="First slide"
            />
            <Carousel.Caption id='back-type'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={meeting}
              alt="Second slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={meeting}
              alt="Third slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

      </section>
    </div>
  )
}

export default Services