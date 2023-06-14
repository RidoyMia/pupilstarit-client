import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../images/login.png";
import { useContext } from "react";
import { AuthContext } from "../../../ContextApi";
import { Toaster, toast } from "react-hot-toast";
import icon from "../../images/icon.png";
import { json, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const { createUser, Gsignin, user } = useContext(AuthContext);

  const registerhandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.passwordd.value;
    const confirm = e.target.confirm.value;

    if (password == confirm) {
      createUser(email, password)
        .then((res) => {
          console.log(res.user.email);
          const user = {
            email: res?.user?.email,
            name,
            role: "user",
          };
          fetch("https://pupil-server-ridoymia.vercel.app/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate("/");
            });
          toast.success("Register done");
        })
        .catch((e) => {
          console.log(e);
        });
    }
    form.reset();
  };
  const googlehandler = (e) => {
    Gsignin()
      .then((res) => {
        console.log(res?.user?.email, "ressss");
        if (res?.user?.email) {
          const name = user?.displayName;
          const email = user?.email;
          const userdata = {
            name,
            email,
            role: "user",
          };
          console.log(userdata, "userdata");

          fetch("https://pupil-server-ridoymia.vercel.app/user", {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "data");
              navigate("/");
            });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Container className="py-5">
        <Toaster />
        <Row>
          <Col md="2"></Col>
          <Col md="4">
            <img
              src={login}
              className="w-100 h-100 d-none d-md-block d-lg-block d-xl-block"
            ></img>
          </Col>
          <Col md="4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Register</h3>
                <Form onSubmit={registerhandler}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Control
                      type="password"
                      name="passwordd"
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Control
                      type="password"
                      name="confirm"
                      placeholder="confirm-password"
                      required
                    />
                  </Form.Group>
                  <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
                <div className="d-flex my-3 align-items-center justify-content-center">
                  <Link className="" to="/login">
                    Please Login
                  </Link>
                </div>
                <div className="d-flex mt-3 justify-content-center align-items-center">
                  <div className="divider"></div>
                  <p className="or">Or</p>
                  <div className="divider"></div>
                </div>
                <div className="text-center">
                  <button className="addBtn" onClick={googlehandler}>
                    <img height="20px" src={icon}></img> Google
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
}
export default Register;
