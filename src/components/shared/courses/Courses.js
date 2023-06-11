import React, { Component, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Slider from "react-slick";

function Courses() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Adjust this breakpoint as per your requirement
                settings: {
                    slidesToShow: 2,
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
        fetch(`http://localhost:5000/allcourse`)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                console.log(data);
            })
    }, [])
    console.log(courses);
    const navigate = useNavigate();
    const navigateotherpage = (id)=>{
        navigate(`/courses/details/${id}`)
    }

    return (
        <Container className="my-3">
            <h2 className="text-center py-5 fw-bold "> Our Courses</h2>
            <Row>
                <Col sm="12" md="12">
                    <Slider {...settings}>

                        {courses?.map(r => 
                            <div className="px-3"  >
                                <Card
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                >
                                    <Card.Img variant="top" src={r?.banner} />
                                    <Card.Body>
                                        <Card.Title>{r?.Title}</Card.Title>
                                        <Card.Text className="  d-none d-sm-block d-md-block d-lg-block">
                                            {r?.description.slice(0, 100)}....
                                        </Card.Text>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <button className="banner-btn" onClick={()=>navigateotherpage(r?._id)}>See details</button>
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
    );
}
export default Courses;