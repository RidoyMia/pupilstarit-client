import { Container } from "react-bootstrap";
import Banner from "../../shared/Banner/Banner";
import './Home.css'
import Courses from "../../shared/courses/Courses";

import Counteruse from "../../shared/Counter/Counteruse";

  
  function Home (){

    return(
      <>
      <div className="">
      
         <Banner></Banner>
          <Courses></Courses>
          <Counteruse></Counteruse>
        
      </div>
      
      
      </>

    )
}
export default Home;