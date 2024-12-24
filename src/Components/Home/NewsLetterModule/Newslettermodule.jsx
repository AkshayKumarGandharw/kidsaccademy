import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

function Newslettermodule() {
  return (
    <section className='newsletter-section trigle-shape-newsletter'>
      <Container>
        <Row className='head-row'>
          <Col lg={6} md={12}>
            <h2>Join Our Newsletter</h2>
          </Col>
          <Col lg={6} md={12}>
            <div className="textbox">
            <input type="text" className='form-control' placeholder='Enter your e-mail here '/>
            <button className=' fw-bold subscribe-now'><i>Subscribe Now</i></button>
            </div>
          </Col>
            
        </Row>
            
            

      </Container>

    </section>
  )
}

export default Newslettermodule