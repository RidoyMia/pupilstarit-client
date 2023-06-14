import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/LOGO.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../ContextApi";
const activeStyle = {
  // backgroundColor : 'red',

  color: "white",
  fontSize: "15px !important",
  paddingTop: "7px",
  paddingBottom: "7px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "5px",

  background: "linear-gradient(to right,#8e0e00,#ff0013)",
  // borderRadius : '50px'
};

function NavScrollExample() {
  const { user, logOut } = useContext(AuthContext);
  const [admin, setAdmin] = useState({});

  if (user) {
    fetch(`https://pupil-server-ridoymia.vercel.app/admin?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data[0]);
        console.log("admin", data[0]);
      });
  }

  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="link"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                className="link"
                to="/courses"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Courses
              </NavLink>
              <NavLink
                className="link"
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About us
              </NavLink>
              <NavLink
                className="link"
                to="/project"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                StudentProject
              </NavLink>

              {admin?.role === "admin" ? (
                <NavLink
                  className="link"
                  to="/addmission"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Addmission
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink
                  className="link"
                  to="/add"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Addproject
                </NavLink>
              ) : (
                ""
              )}

              {user ? (
                <button
                  className="mx-5 bg-primary rounded-circle py-1 px-1"
                  onClick={() => logOut()}
                >
                  LogOut
                </button>
              ) : (
                <NavLink
                  className="link"
                  to="/login"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink>
              )}

              {/* <NavLink
             className="link"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
             className="link"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
