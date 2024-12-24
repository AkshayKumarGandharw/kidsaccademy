import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Popularmodule() {
  const popularbox = [
    {
      img: "./Images/class_01.jpg",
      heading: "Imagination Classes",
      textcolor: "text-yellow",
      bgcolor: "bg-yellow"
    },
    {
      img: "./Images/class_02.jpg",
      heading: "Drawing Classes",
      textcolor: "text-red",
      bgcolor: "bg-red"
    },
    {
      img: "./Images/class_03.jpg",
      heading: "Learning Classes",
      textcolor: "text-orange",
      bgcolor: "bg-orange"
    }
  ]
  return (
    <section className='popular-section'>
      <Container>
        <Row>
          <Col>
            <div className="center-content">
              <h3 className='f-s-46 text-purple'>Our Popular Classes</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            popularbox.map((object, index) => {
              return (
                <Col lg={4} md={6} sm={12} key={index}>
                  <div className="hover-div">
                    <div className="populer-img">
                      <img src={object.img} alt="class01" className='img-fluid' />
                      <ul className='popular-class'>
                        <li className='bg-purple'><span >Class Size</span><br></br>
                          <span>30 - 40</span>
                        </li>
                        <li className='bg-red'><span >Years Old</span><br></br>
                          <span>5 - 6</span>
                        </li>
                        <li className='bg-orange'><span >Tution Fee</span><br></br>
                          <span>$1500</span>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-content ">
                      <h3 className={object.textcolor}>{object.heading}</h3>
                      <p><span className='text-red'>Class Time </span>: 08:00 am - 10:00 am</p>
                      <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                      <p className={`text-white  ${object.bgcolor}`}><FontAwesomeIcon icon={faHome} className='px-1' />
                        218 New Newyork Road, USA- 1205
                      </p>

                    </div>
                  </div>
                </Col>
              )
            })
          }

        </Row>
        <Row>
          <div className="inner-btn text-center py-5">
            <button className='bg-purple fw-bold'><i>See More Classes</i></button>
          </div>
        </Row>

      </Container>

    </section>
  )
}

export default Popularmodule