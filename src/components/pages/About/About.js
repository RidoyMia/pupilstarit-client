import { Col, Container, Row } from "react-bootstrap";
import newbanner from '../../images/newbanner.jpg'

function About(){
    return(
        <>
        <Container className="py-5 my-5">
           <Row>
            <Col md="12">
                <img src={newbanner} className="w-100 h-60"></img>
            </Col>
           </Row>
        </Container>
        </>
    )
}
export default About;