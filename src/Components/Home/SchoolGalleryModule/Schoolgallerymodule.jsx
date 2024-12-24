import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Schoolgallerymodule() {
  const imggallery = [
    {
      img: "./Images/gallery_01.jpg"
    },
    {
      img: "./Images/gallery_02.jpg"
    }, {
      img: "./Images/gallery_03.jpg"
    },
    {
      img: "./Images/gallery_04.jpg"
    }
    , {
      img: "./Images/gallery_05.jpg"
    }
    ,
    {
      img: "./Images/gallery_06.jpg"
    }
  ]
  return (
    <section className='schgallery-section'>
      <Container>
        <Row>
          <Col>
            <div className="center-content">
              <h3 className='f-s-46 fw-bold text-purple'>Our School Gallery</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="btn py-5  mx-auto ">
            <button className='bg-white text-yellow fw-bold  m-0' ><i>Show all</i></button>
            <button className='bg-white text-red fw-bold  m-0'><i>Class</i></button>
            <button className='bg-white text-orange fw-bold m-0'><i>Event</i></button>
            <button className='bg-white text-purple fw-bold m-0'><i>Playing</i></button>
            <button className='bg-white text-lightblue fw-bold m-0'><i>Art</i></button>
          </div>
        </Row>
        <Row>

          {
            imggallery.map((item, index) => {
              return (
                <Col lg={4} md={6} sm={12} key={index}>
                  <div className="gallery mb-4">
                    <img src={item.img} alt="" className='img-fluid' />
                  </div>
                </Col>
              )
            })
          }

        </Row>
        <Row>
          <div className="btn-school-view text-center py-5">
            <button className='viewportfolio bg-purple fw-bold'><i>View More Gallery</i></button>
          </div>
        </Row>
      </Container>

    </section>
  )
}

export default Schoolgallerymodule
