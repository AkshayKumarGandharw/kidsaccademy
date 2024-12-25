import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

function Schoolgallerymodule() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

                    {/* -------this code to content display and hover effect-----------start */}
                    <div className="hover-content">
                      <Button variant="primary" onClick={handleShow} className='modalbtn'>
                       <FontAwesomeIcon icon={faCompress} className='fonticon'/>
                      </Button>
                      <h3>Product Name Here </h3>
                      <p>By: KidsAcademy Theme</p>
                    </div>
                    {/* -------this code to content display and hover effect-----------end */}
                    {/* ---------------this is code to repeat img ----------------start */}
                    <img src={item.img} alt="" className='img-fluid' />
                    {/* ---------------this is code to repeat img ----------------end */}

                    {/*---------Modal for zoom in /zoom out image---------------start  */}
                    {/* <Button variant="primary" onClick={handleShow} className='modalbtn'>
                      Launch demo modal
                    </Button> */}

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='modalbody'>
                              <div className="img">
                                <img src={'./Images/gallery_01.jpg'} alt='' className='img-fluid' width={450}/>
                              </div>
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button> */}
                        {/* <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button> */}
                      </Modal.Footer>
                    </Modal>

                    {/*---------Modal for zoom in /zoom out image---------------end  */}
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
