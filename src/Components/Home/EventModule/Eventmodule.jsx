import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Eventmodule() {
  return (
    <section className='event-section'>
      <Container>
        <Row>
          <Col>
            <div className="center-content">
              <h3 className='f-s-46 fw-bold text-purple'>Don't Miss Our Event</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={6}>
            <div className="gallery text-center">
              <img src={'./Images/class_01.jpg'} alt="class01" className='img-fluid' />
            </div>
          </Col>
          <Col lg={4} md={4} sm={6}>
            <div className="content">
              <h3 className='text-yellow fw-bold pt-3'>Imagination Classes</h3>
              <span className='text-red f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faClock} className='f-s-14'/></span> 08:00 am - 10:00 am<br></br>
              <span className='text-orange f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faHome} className='f-s-14'/></span> 218 New Newyork Road Newyork
              <p className='py-2 f-s-16'>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
              <button className='bg-yellow fw-bold btnjoin'><i>Join Now</i></button>
            </div>
          </Col><Col lg={4} md={4} sm={6}>
            <div className="gallery text-center">
              <img src={'./Images/class_02.jpg'} alt="class02" className='img-fluid' />
            </div>
          </Col><Col lg={4} md={4} sm={6}>
              <div className="content">
              <h3 className='text-red fw-bold pt-3'>Imagination Classes</h3>
              <span className='text-red f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faClock} className='f-s-14'/></span> 08:00 am - 10:00 am<br></br>
              <span className='text-orange f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faHome} className='f-s-14'/></span> 218 New Newyork Road Newyork
              <p className='py-2 f-s-16'>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
              <button className='bg-red fw-bold btnjoin'><i>Join Now</i></button>
            </div> 
          </Col><Col lg={4} md={4} sm={6}>
            <div className="gallery text-center">
              <img src={'./Images/class_03.jpg'} alt="class03" className='img-fluid' />
            </div>
          </Col><Col lg={4} md={4} sm={6}>
          <div className="content">
              <h3 className='text-orange fw-bold pt-3'>Imagination Classes</h3>
              <span className='text-red f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faClock} className='f-s-14'/></span> 08:00 am - 10:00 am<br></br>
              <span className='text-orange f-s-16 fs-6 pe-2'><FontAwesomeIcon icon={faHome} className='f-s-14'/></span> 218 New Newyork Road Newyork
              <p className='py-2 f-s-16'>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
              <button className='bg-orange fw-bold btnjoin'><i>Join Now</i></button>
            </div>
          </Col>

        </Row>
      </Container>

    </section>
  )
}

export default Eventmodule