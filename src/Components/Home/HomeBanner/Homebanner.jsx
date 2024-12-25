import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Homebanner() {
  return (
    <section className='banner-section trigle-shape-above'>
      <Carousel >
      {/* className='carousel' */}
        {/* interval={3000}  use in carousel.item than work*/}
        <Carousel.Item>
          <img src={'./Images/banner_01.jpg'} alt="banner-1" className='img-fluid'/>
          <Carousel.Caption>
        
               <h3 className='animate__animated  animate__bounce animate__delay-2s'>Welcome to KidsAcademy</h3>
              <h2 className='f-s-46 fw-bold'>Best For Education</h2>
              <p>Monotonely principle centered ahitectures through and <br></br>standards magnetic metrics whereas
              </p>
              <div >
              <button className='bg-purple'><i>Read More</i></button>
              <button className='bg-yellow'><i>Buy Now</i></button>
              </div>
           
          </Carousel.Caption>
        </Carousel.Item>
        {/* interval={500} */}
        <Carousel.Item >
          <img src={'./Images/banner_02.jpg'} alt="banner-2" className='img-fluid' />
          <Carousel.Caption>
          
               <h3>Welcome to KidsAcademy</h3>
              <h2 className='f-s-46 fw-bold'>Best For Education</h2>
              <p>Monotonely principle centered ahitectures through and <br></br>standards magnetic metrics whereas
              </p>
              <button className='bg-purple'><i>Read More</i></button>
              <button className='bg-yellow'><i>Buy Now</i></button>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img src={'./Images/banner_03.jpg'} alt="banner-3" className='img-fluid' />
          <Carousel.Caption>
          
              <h3>Welcome to KidsAcademy</h3>
              <h2 className='f-s-46 fw-bold'>Best For Education</h2>
              <p>Monotonely principle centered ahitectures through and <br></br>standards magnetic metrics whereas
              </p>
              <button className='bg-purple'><i>Read More</i></button>
              <button className='bg-yellow'><i>Buy Now</i></button> 
              

           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </section>
  )
}

export default Homebanner