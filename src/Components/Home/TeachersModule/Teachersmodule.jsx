import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container,Row,Col} from 'react-bootstrap';
import { faFacebookF, faPinterestP, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

function Teachersmodule() {
  const teacherprofile =[
    {
      img:"./Images/teacher_01.jpg",
      teachername:"Broklyn Doel ",
      teachertitle:"Sains Teacher",
      bgcolor:"bg-purple"
    },
    {
      img:"./Images/teacher_02.jpg",
      teachername:"Alex Jhonson ",
      teachertitle:"Art Teacher",
      bgcolor:"bg-red"
    },
    {
      img:"./Images/teacher_03.jpg",
      teachername:"Robot Jhonson ",
      teachertitle:"Math Teacher",
      bgcolor:"bg-orange"
    },
    {
      img:"./Images/teacher_04.jpg",
      teachername:"Janaton Doe ",
      teachertitle:"English Teacher",
      bgcolor:"bg-lightblue"
    },
  ]
  return (
   <section className='teacher-section trigle-shape-above'> 
    <Container>
        <Row>
          <Col>
            <div className="center-content text-white">
              <h3 className='f-s-46 fw-bold '>Meet Our Teachers</h3>
              <p className='f-s-16'>Rapidiously expedite granular imperatives before economically sound web services. <br></br>Credibly actualize pandemic strategic themeplatform.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            teacherprofile.map((item,index)=>{
              return(
                <Col lg={6} md={6} key={index}>
                  <div className="teacher-profile">
                    <div lg={6} md={12} sm={12} className="profile-img ">
                    <img src={item.img} alt="profile-pic" className='img-fluid' />
                    </div>
                    <div lg={6} md={12} sm={12} className={`profile-data ${item.bgcolor}`}>
                      <h3>{item.teachername}<span className='f-s-14 semibold'>{item.teachertitle}</span></h3>
                     <div className="icon">
                     <span><FontAwesomeIcon icon={faFacebookF}/></span>
                      <span><FontAwesomeIcon icon={faVimeo}/></span>
                      <span><FontAwesomeIcon icon={faTwitter}/></span>
                      <span><FontAwesomeIcon icon={faPinterestP}/></span>
                      <span><FontAwesomeIcon icon={faRss}/></span>
                     </div>
                      <p>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                      <input type="button" className={`viewportfolio ${item.bgcolor}`} value='View Portfolio'/>
                    </div>

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

export default Teachersmodule