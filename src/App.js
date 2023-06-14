import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/shared/Header/Header";
import Home from "./components/pages/Home/Home";
import Topheader from "./components/shared/topHeader/Topheader";
import Footer from "./components/shared/footer/Footer";
import Details from "./components/pages/details/Details";
import { Route, Routes } from "react-router";
import Courses from "./components/shared/courses/Courses";
import All from "./components/pages/All/All";
import Login from "./components/pages/Register/Login";
import Register from "./components/pages/Register/Register";
import Addproject from "./components/pages/Addproject/Addproject";
import Addmission from "./components/pages/Addmission/Addmission";
import Allstudent from "./components/pages/Allstudent/Allstudent";
import StudentDetails from "./components/pages/StudentDetails/StudentDetails";
import Ami from "./components/shared/Banner/Ami";
import StudentProject from "./components/pages/StudentProject/StudentProject";
import ProjectDetails from "./components/pages/StudentProject/ProjectDetails";
import About from "./components/pages/About/About";

const notify = () => toast.success("Here is your toast.");
function App() {
  return (
    // <div className="App">
    //    <h1 className="text-danger">
    //   Hello world!
    // </h1>
    // <div>
    //   <button onClick={notify}>Make me a toast</button>
    //   <Toaster />
    // </div>
    // </div>
    <>
      <Topheader></Topheader>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/studentProject"
          element={<StudentProject></StudentProject>}
        ></Route>

        <Route
          path="/project"
          element={<StudentProject></StudentProject>}
        ></Route>
        <Route path="/student" element={<Allstudent></Allstudent>}></Route>
        <Route
          path="/student/Details/:id"
          element={<StudentDetails></StudentDetails>}
        ></Route>
        <Route
          path="/project/Details/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
        <Route path="/addmission" element={<Addmission></Addmission>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/add" element={<Addproject></Addproject>}></Route>
        <Route path="/courses" element={<All></All>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/courses/details/:id"
          element={<Details></Details>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
