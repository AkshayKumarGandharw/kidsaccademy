import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Summerymodule() {
  const summery = [
    {

      heading: "Active Learning",
      bgcolor: "bg-red",
      textcolor: "text-red"

    },
    {

      heading: "Expert Teachers",
      bgcolor: "bg-yellow",
      textcolor: "text-yellow"
    },
    {

      heading: "Strategi Location",
      bgcolor: "bg-orange",
      textcolor: "text-orange"

    },
    {

      heading: "Full Day Programs",
      bgcolor: "bg-purple",
      textcolor: "text-purple"

    }
  ]
  return (
    <section className='summmry-section'>
      <Container>
        <Row>
          {
            summery.map((item, index) => {
              return (
                <Col lg={3} md={6} sm={12}>
                  <div className="summery-detail-1">
                    <span className={item.bgcolor}> <FontAwesomeIcon icon={faFacebookF} /></span>
                    <h3 className={`fw-bold ${item.textcolor}`}>{item.heading}</h3>
                    <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
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

export default Summerymodule