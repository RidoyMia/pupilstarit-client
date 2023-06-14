
import { CiLocationArrow1 } from "react-icons/ci";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineMail,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <>
            <div className="bg-dark">
                <Container className="py-5">
                    <Row>
                        <Col md="6" sm="12">
                            <div className="d-flex align-items-center justify-content-left text-light pb-5">
                                <CiLocationArrow1 className="Footer-icon"></CiLocationArrow1>
                                <h4 className="ps-3">Baby stand road <br></br> Habiganj,Sylhet</h4>

                            </div>
                            <div className="d-flex align-items-center justify-content-left text-light pb-5">
                                <BsFillTelephoneOutboundFill className="Footer-icon" />
                                <h4 className="ps-3"> +01707565617</h4>

                            </div>
                            <div className="d-flex align-items-center justify-content-left text-light pb-5">
                                < AiOutlineMail className="Footer-icon" />
                                <h4 className="ps-3">Pupilstarit@gmail.com</h4>

                            </div>
                        </Col>
                        <Col md="6" sm="12" className="text-left text-light">
                            <h4 className="pb-4">About the  institute</h4>
                            <p className="h6 lh-lg">Pupilstarit is not a just training center. Its also a company.  Our have many arguments company.For that our student get job easily if student learn with full conceltant</p>
                            <div className="d-flex py-3">
                                <div className="pe-2"><AiFillFacebook className="Footer-icon"/></div>
                                <div className="px-3"><AiFillTwitterSquare className="Footer-icon"/></div>
                                <div className="px-3"><AiFillLinkedin className="Footer-icon"/></div>
                                <div className="px-3"><AiFillGithub className="Footer-icon"/></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;

