import { Col, Container, Row } from "react-bootstrap";
import './Banner.css'
import banner from '../../images/banner.png'
import traning from '../../images/traning.png'
import { useNavigate } from "react-router";


function Banner() {
const navigate = useNavigate();
const courses = e =>{
    navigate('/courses')
}
    return (
        <>
            <div className="py-5 home-container">
              <Container>
              <Row>
                    <Col md="6" sm="12">
                        <div className="banner-text-container py-5">
                            <h1 className="fw-semibold fs-1">Let the career begin </h1> <h1 className="title-color mt-2">Confidence in skills</h1>
                            <p className="pl-5 py-3">With experienced mentors and updated curriculum, Creative IT Institute is ready to advance your career. Choose your favorite course today from our more than 30 trendy courses.</p>

                            <div className="d-flex pb-3 ">
                                <button  className="banner-btn" onClick={()=>courses()}>Browse Course</button>
                                <button  className="banner-btn">Browse Review</button>
                            </div>
                            <div className="d-flex py-3  align-items-center">
                                <img className="traning-pic" src={traning} height="40px" ></img>
                                <p>The most modern training center in the country</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" >
                         <img src={banner} className="w-100 border-container h-100"></img>
                    </Col>
                </Row>
              </Container>
            </div>


        </>

    )
}

export default Banner;