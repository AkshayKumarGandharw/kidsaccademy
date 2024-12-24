import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { faPhone, faHome, faRss } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faBehance, faDribbble, faSkype, faPinterest,faVimeoV } from '@fortawesome/free-brands-svg-icons';




function Topheader() {
    return (
        <div className='bg-purple' id='Topheader'>
            <Container className='mx-auto'>
                <Row className='top'>
                    <Col className='col-auto'>
                        <span>
                            <FontAwesomeIcon icon={faPhone} />
                            &nbsp;
                            <i>Phone : 8801 234 567 890</i>
                        </span>
                    </Col>
                    <Col className='col-auto'>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                            &nbsp;
                            <i>Opening Time : 9:30am-5:30pm</i>
                        </span>
                    </Col>
                    <Col className='col-auto'>
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                            &nbsp;
                            <i>Address : Labartisan 1205 Newyork</i>
                        </span>
                    </Col>
                    <Col className='col-auto ms-auto ' id='font-icon'>
                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        <span><FontAwesomeIcon icon={faBehance} /></span>
                        <span> <FontAwesomeIcon icon={faDribbble} /></span>
                        <span><FontAwesomeIcon icon={faSkype} /></span>
                        <span><FontAwesomeIcon icon={faVimeoV} /></span>
                        <span><FontAwesomeIcon icon={faPinterest} /></span>
                        <span> <FontAwesomeIcon icon={faRss} /></span>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Topheader