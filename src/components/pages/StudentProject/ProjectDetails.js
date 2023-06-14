import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`https://pupil-server-ridoymia.vercel.app/addproject/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "projectdetails");
        setProject(data[0]);
      });
  }, [id]);
  return (
    <>
      <Container>
        <Row>
          <Col md="12" sm="12" className="my-5 px-5">
            <img src={project?.img} className="w-100 h-60"></img>
          </Col>
          <Col md="12" sm="12" className="my-5 px-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <h4 className="text-xl">Owner : {project?.name}</h4>
              <h4 className="text-xl">Category : {project?.category}</h4>
            </div>
            <div className="px-5">
              <p>
                {" "}
                <span className="h4 text-primary">Speech </span>
                {project?.aboutYou}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProjectDetails;
