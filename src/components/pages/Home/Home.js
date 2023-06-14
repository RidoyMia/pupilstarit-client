import { Container } from "react-bootstrap";
import Banner from "../../shared/Banner/Banner";
import './Home.css'
import Courses from "../../shared/courses/Courses";

import Counteruse from "../../shared/Counter/Counteruse";
import ContactForm from "../../shared/Counter/ContactForm";

  
  function Home (){

    return(
      <>
      <div className="">
      
         <Banner></Banner>
          <Courses></Courses>
          <Counteruse></Counteruse>
          <ContactForm></ContactForm>
        
      </div>
      
      
      </>

    )
}
export default Home;