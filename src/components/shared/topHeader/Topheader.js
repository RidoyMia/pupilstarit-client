import { Container } from "react-bootstrap";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import  './Topheader.css';
  
  function Topheader (){

    return(
      <>
      
      <div className="topheader-container d-none d-xs-none d-md-block">
        <Container className="py-1">
            <div className="d-flex justify-content-left align-items-center py-2">
                <div  className="d-flex justify-content-center align-items-center">
                    <div><BsFillTelephoneOutboundFill className="icon "/></div>
                    <div className="px-3 text-container">01314791920</div>
                </div>
                <div className="d-flex justify-content-center align-items-center px-5">
                    <div><AiOutlineMail className="icon2"/></div>
                    <div className="px-3 text-container">Pupilstarit@gmail.com</div>
                </div>
            </div>
        </Container>
      </div>
      
      
      </>

    )
}
export default Topheader;