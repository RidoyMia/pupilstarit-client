import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import { AuthContext } from "../../../ContextApi";

function Details() {
    const {user} = useContext(AuthContext);
    console.log(user,'user');
    const { id } = useParams()
    const [course, setCourse] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Adjust this breakpoint as per your requirement
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, // Adjust this breakpoint as per your requirement
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://pupil-server-ridoymia.vercel.app/allcourse`)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                console.log(data, 'details');
            })
    }, [])
    console.log(courses);
    const navigate = useNavigate();
    const navigateotherpage = (id) => {
        navigate(`/courses/details/${id}`)
    }

    useEffect(() => {
        fetch(`https://pupil-server-ridoymia.vercel.app/course/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [id])

    return (
        <>
            <Container>

                <Row className="pb-5">
                    <Col md="12" sm="12" lg="5">
                        <h4>{course?.subTitle}</h4>
                        <h3>{course?.Title}</h3>
                        <div className="d-flex justify-content-between align-items-center my-4">
                            <div className="courseBox-container">
                                <p className="fw-bold single-box">Duration <br></br>{course?.CourseDuration}</p>

                            </div>
                            <div className="courseBox-container">
                                <p className="fw-bold single-box">Project <br></br>{course?.Project}</p>

                            </div>
                            <div className="courseBox-container">
                                <p className="fw-bold single-box">Lecture <br></br>{course?.Lecture}</p>

                            </div>

                        </div>
                        <p className="course-description">{course?.description}</p>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div>
                                <p className="about-course">Total student : <span className="text-danger">433+</span></p>
                            </div>
                            <div>
                                <p className="about-course">Total review : <span className="text-danger">123+</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" sm="12" lg="7">
                        <img src={course?.banner} className="w-100 mt-lg-5  course-banner"></img>
                    </Col>


                </Row>
                <Row>
                    <Col md="6" className="py-5">
                        <h1 className="text-left fw-bold py-5 text-danger">Course Overview</h1>
                        <p className="course-description">{course?.CourseOverview}</p>
                    </Col>
                    <Col md="6" className="my-5">
                        <h1 className="text-left fw-bold py-5 text-danger">Related Courses</h1>
                        <Slider {...settings}>

                            {courses?.map(r =>
                                <div className="px-3"  >
                                    <Card
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000"
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                    >
                                        <Card.Img variant="top" src={r?.banner} className="w-100 h-50" />
                                        <Card.Body>
                                            <Card.Title>{r?.Title}</Card.Title>
                                            <Card.Text className="  d-none d-sm-block d-md-block d-lg-block">
                                                {r?.description.slice(0, 100)}....
                                            </Card.Text>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <button className="banner-btn" onClick={() => navigateotherpage(r?._id)}>See details</button>
                                                <h4>Price : {r?.Price}</h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}


                        </Slider>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Details;