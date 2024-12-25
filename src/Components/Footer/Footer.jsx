import { logDOM } from '@testing-library/react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDribbble, faFacebookF, faGooglePlus, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  const ftwitterobje = [
    {
      icon: "faTwitter",
      content: "Raritas etiam processus them dynamicus sequitur mutatem education theme",
      time: "23 seconds ago",
      bgcolor: "bg-yellow"

    },
    {
      icon: "faTwitter",
      content: "Duis autem veleum iriu dolor hendrerit in vulputate velit",
      time: "8 seconds ago",
      bgcolor: "bg-red"
    },
    {
      icon: "faTwitter",
      content: "@frankdoe amber tempor cum soluta nobis eleifend",
      time: "2 years ago",
      bgcolor: "bg-orange"
    }
  ]

  return (
    <>
      <footer className='footer-section'>
        <Container>
          <Row className='footer-row'>
            <Col lg={3} md={6}>
              <div>
                <h2><img src={'./Images/logo.png'} alt="logo" className='img-fluid' /></h2>
              </div>
              <p>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>

              <ul className=''>
                <li>
                  <span className='text-yellow'><FontAwesomeIcon icon={faHome} /></span>
                  <p>New Chokoya Road, USA.</p>
                </li>
                <li>
                  <span className='text-red'><FontAwesomeIcon icon={faPhone} /></span>
                  <p>+8801 923 970 212, 0125897</p>
                </li>
                <li>
                  <span className='text-orange'><FontAwesomeIcon icon={faEnvelope} /></span>
                  <p>Contact@admin LabArtisan</p>
                </li>
                <li>
                  <span className='text-purple'><FontAwesomeIcon icon={faGlobeAsia} /></span>
                  <p>Email@admin LabArtisan</p>
                </li>
              </ul>

            </Col>
            <Col lg={3} md={6}>
              <h2 className='text-yellow fw-bold'>Latest News</h2>
              <div className="d-flex gap-2">
                <div><img src={'./Images/footer_post_01.jpg'} alt="flogo1" /></div>
                <div><p>Corem psum dolor the amectetuer adipiscing...<br></br>
                  <span className='text-yellow'>04 February 2021</span>
                </p>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex gap-2">
                <div><img src={'./Images/footer_post_02.jpg'} alt="flogo2" /></div>
                <div><p>Corem psum dolor the amectetuer adipiscing...
                  <br></br>
                  <span className='text-yellow'>28 January 2021</span>
                </p>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex gap-2">
                <div><img src={'./Images/footer_post_03.jpg'} alt="flogo3" /></div>
                <div><p>Corem psum dolor the amectetuer adipiscing...
                  <br></br>
                  <span className='text-yellow'>03 January 2021</span>
                </p></div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h2 className='text-red fw-bold'>Twitter Widget</h2>
              {
                ftwitterobje.map((item, index) => {
                  return (
                    <Row key={index} id='twitter'>
                      <div className="d-flex">
                        <Col className='col-lg-1 py-2'>
                          <span className={item.bgcolor}><FontAwesomeIcon icon={faTwitter} /></span>
                        </Col>
                        <Col className='col-lg-11'>
                          <p className='mb-0 py-1'>{item.content}</p>
                          <span className='text-red'>{item.time}</span>

                        </Col>
                      </div>
                    </Row>
                  )
                })
              }

            </Col>
            <Col lg={3} md={6}>
              <h2 className='text-orange fw-bold'>Recent Photos</h2>
              <ul className='list-unstyled recent-gallery'>
                <li>
                  <img src={'./Images/footer_gallery_01.jpg'} alt="gallery1" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_02.jpg'} alt="gallery2" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_03.jpg'} alt="gallery3" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_04.jpg'} alt="gallery4" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_05.jpg'} alt="gallery5" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_06.jpg'} alt="gallery6" className='img-fluid' />
                </li>
                <li>  <img src={'./Images/footer_gallery_07.jpg'} alt="gallery7" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_08.jpg'} alt="gallery8" className='img-fluid' />
                </li>
                <li>
                  <img src={'./Images/footer_gallery_09.jpg'} alt="gallery9" className='img-fluid' />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className='outer-footer'>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div>
                  <p>© 2021. Designed By <span className='text-pink fw-bold'>LabArtisan</span></p>
              </div>
             
            </Col>
            <Col md={6} sm={12} >
            <div className='social-icon text-white'>
                <ul className='list-unstyled circle-social-icon '>
                  <li >
                    <Link to='/' className='bg-blue' ><FontAwesomeIcon icon={faFacebookF} /></Link>
                  </li>
                  <li>
                    <Link to='/' className='bg-pink'><FontAwesomeIcon icon={faDribbble} /></Link>
                  </li>
                  <li>
                    <Link to='/' className='bg-red'><FontAwesomeIcon icon={faGooglePlus} /></Link>
                  </li>
                  <li>
                    <Link to='/' className='bg-lightblue'><FontAwesomeIcon icon={faTwitter} /></Link>
                  </li>
                  <li>
                    <Link to='/' className='bg-brown'><FontAwesomeIcon icon={faPinterest} /></Link>
                  </li>

                </ul>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer;