import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

function Partnersmodule() {
  return (
    <section className='partner-section trigle-shape-above'>
      <Container>
        <Row>
          <Col>
            <div className="center-content text-white">
              <h3 className='f-s-46 fw-bold'>Our Partners Logo</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src={'./Images/partner_01.jpg'} alt="partner01" className='img-fluid' />
                  </div>
                  <div class="swiper-slide">
                    <img src={'./Images/partner_02.jpg'} alt="partner02" className='img-fluid' />
                  </div>
                  <div class="swiper-slide">
                    <img src={'./Images/partner_03.jpg'} alt="partner03" className='img-fluid' />
                  </div>
                  <div class="swiper-slide">
                    <img src={'./Images/partner_04.jpg'} alt="partner04" className='img-fluid' />
                  </div>
                  <div class="swiper-slide">
                    <img src={'./Images/partner_05.jpg'} alt="partner05" className='img-fluid' />
                  </div>
                </div>
               
              </div>
            

          </Col>

        </Row>
      </Container>

    </section>
  )
}

export default Partnersmodule