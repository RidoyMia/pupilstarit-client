import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './All.css';
import { useNavigate } from "react-router";

function All(){
    const[all,setAll] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://pupil-server-ridoymia.vercel.app/allcourse`)
        .then(res => res.json())
        .then(data => {
            setAll(data)
            console.log(data);
        })
    },[]);
    const navigateotherpage = (id)=>{
        navigate(`/courses/details/${id}`)
    }
    return(
        <>
          <Container className="py-5">
          <h1 className="text-center py-5">All courses</h1>
          <Row>
            {
                all?.map(r => <Col md="4" className="my-4">
                   <Card
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                >
                                    <Card.Img variant="top" src={r?.banner}  className="w-100"/>
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
                </Col>)
            }
          </Row>
          </Container>
        </>
    )
}
export default All;
