import React, { Component, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Slider from "react-slick";

function StudentProject() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`https://pupil-server-ridoymia.vercel.app/addproject`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);

  console.log(courses);
  const navigate = useNavigate();
  const detailsproject = (id) => {
    navigate(`/project/details/${id}`);
  };

  return (
    <Container className="my-3">
      <h2 className="text-center py-5 fw-bold "> Student Project</h2>
      <Row>
        {courses?.map((p) => (
          <Col md="4">
            <Card>
              <Card.Img variant="top" src={p?.img} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>{p?.name}</Card.Title>
                  <p>Category: {p?.category}</p>
                </div>
                <Card.Text>{p?.aboutYou.slice(0, 200)}...</Card.Text>
                <div className="text-right align-items-right my-2">
                  <button
                    className="banner-btn"
                    onClick={() => detailsproject(p._id)}
                  >
                    Details
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default StudentProject;
