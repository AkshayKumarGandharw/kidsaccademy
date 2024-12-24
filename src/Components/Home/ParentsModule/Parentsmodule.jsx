import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Parentsmodule() {
  const property = [

    {
      bordercolor: "b-yellow",
      img: "./Images/testimonial_01.jpg",
      bottomimg:"./Images/testimonial_icon_01.jpg"
      

    },
    {
      bordercolor: "b-red",
      img: "./Images/testimonial_02.jpg",
       bottomimg:"./Images/testimonial_icon_02.jpg"
     
      
    },
    {
      bordercolor: "b-orange",
      img: "./Images/testimonial_03.jpg",
       bottomimg:"./Images/testimonial_icon_03.jpg"
     
    },
  ]
  return (
    <section className='parents-section'>
      <Container>
        <Row>
          <Col>
            <div className="center-content">
              <h3 className='f-s-46 fw-bold text-purple'>What Parents Say</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            property.map((parents, index) => {
              return (
                <Col lg={4} md={6} sm={6} key={index}>
                  <div className="parents-content">
                  <div className={`p-3 rounded-3 parents-say ${parents.bordercolor}`}>
                    
                    <p>Professionally predominate that timely infrastriuctures tops line methodlogies
                    </p>
                    <h4 className='text-red'>Joly Smith <span className='f-s-14 '>ui/ux Designer</span></h4>
                    
                  </div>
                  <img src={parents.bottomimg} alt="bottomimg" className=' '/>
                  </div>
                </Col>
                
              )
            })
          }
        </Row>
      </Container>

    </section>
  )
}

export default Parentsmodule