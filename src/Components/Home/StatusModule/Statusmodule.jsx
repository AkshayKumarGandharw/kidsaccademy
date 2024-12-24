import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container,Row,Col } from 'react-bootstrap';

import { faBus, faChalkboardTeacher, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons'

function Statusmodule() {
  return (
   <section className='status-section trigle-shape-above'>
    <Container className='py-5'>
      <Row className='text-white'>
        <Col lg={3} md={3} sm={3}>  
          <div className="status-bar text-center">
            <span className='fs-1'><FontAwesomeIcon icon={faGraduationCap}/></span>
            <p className='f-s-46 fw-bold'>320+</p>
            <p className='f-s-20 fw-bold'>Total Students</p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={3}>
          <div className="status-bar text-center">
            <span className='fs-1'><FontAwesomeIcon icon={faSchool}/></span>
            <p className='f-s-46 fw-bold'>12</p>
            <p className='f-s-20 fw-bold'>Class Rooms</p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={3}>
          <div className="status-bar text-center">
            <span className='fs-1'><FontAwesomeIcon icon={faBus}/></span>
            <p className='f-s-46 fw-bold'>24</p>
            <p className='f-s-20 fw-bold'>School Bus</p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={3}>
          <div className="status-bar text-center">
            <span className='fs-1'><FontAwesomeIcon icon={faChalkboardTeacher}/></span>
            <p className='f-s-46 fw-bold'>15</p>
            <p className='f-s-20 fw-bold'>Total Teachers</p>
          </div>
        </Col>
      </Row>
    </Container>

   </section>
  )
}

export default Statusmodule