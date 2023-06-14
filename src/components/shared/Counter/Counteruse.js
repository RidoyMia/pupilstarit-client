import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
function Counteruse() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(200);
  const [totalCourse, setTotalcourses] = useState(0);

  useEffect(() => {
    fetch(`https://pupil-server-ridoymia.vercel.app/allcourse`)
      .then(res => res.json())
      .then(data => {
        setTotalcourses(data.length)
      })
  }, [])
  console.log(totalCourse, 'ami');
  return (
    <>


      <div className='bg-dark my-5'>
        <Container className='py-5'>
          <div>
             <Row>
               <Col md="4" sm="4" lg="4">
               <div className='text-light text-center'>
               <h6 className='text-light'>Total-courses</h6>
               <CountUp className='text-light h2' duration={4.0} start="0" end={totalCourse}></CountUp>+
             </div>
               </Col>
               <Col md="4" sm="4" lg="4">
               <div className='text-light text-center'>
               <h6 className='text-light'>Total-student</h6>
               <CountUp className='text-light h2' duration={4.0} start="0" end="220"></CountUp>+
             </div>
               </Col>
               <Col md="4" sm="4" lg="4">
               <div className='text-light text-center'>
               <h6 className='text-light'>Success-story</h6>
               <CountUp className='text-light h2' duration={4.0} start="0" end="180"></CountUp>+
             </div>
               </Col>
             </Row>
          </div>

          

          
        </Container>
      </div>


    </>
  )
}

export default Counteruse;