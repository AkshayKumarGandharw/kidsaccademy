import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

function Aboutmodule() {
  return (
    <section className='about-section trigle-shape-above'>
      <Container className='about-row'>
        <Row >
          <Col lg={6} md={12}>
            <div className="img my-5">
                <img src={'./Images/about.png'} alt=""  className='img-fluid'/>
            </div>
         
        </Col>
        <Col>
        <div className="about-content text-white my-5">
        <h2 className='f-s-46  fw-bold'>About Our KidsAcademy</h2>
          <p className='f-s-16'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
          <button className='bg-purple'><i>Read More</i></button>
          <button className='bg-yellow'><i>Buy Now</i></button>
        </div>
        </Col>
        </Row>
         
      </Container>

    </section>
  )
}

export default Aboutmodule