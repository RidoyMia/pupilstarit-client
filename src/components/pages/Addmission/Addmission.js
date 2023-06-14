import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/LOGO.png";
import slogo from "../../images/side-logo.png";
import ReactToPdf from "react-to-pdf";
import { useNavigate } from "react-router";
const ref = React.createRef();
function Addmission() {
  const navigate = useNavigate();
  const addmissionHandler = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const addmission = e.target.addmission.value;
    const mother = e.target.mother.value;
    const gender = e.target.gender.value;
    const school = e.target.school.value;
    const phone = e.target.phone.value;
    const studentId = e.target.studentId.value;
    const father = e.target.father.value;
    const birthday = e.target.birthday.value;
    const Blood = e.target.Blood.value;
    const course = e.target.course.value;
    const present = e.target.present.value;
    const permanent = e.target.permanent.value;
    const city = e.target.city.value;
    const postal = e.target.postal.value;
    const student = {
      name,
      addmission,
      mother,
      gender,
      school,
      phone,
      studentId,
      father,
      birthday,
      Blood,
      course,
      present,
      permanent,
      city,
      postal,
    };

    fetch("https://pupil-server-ridoymia.vercel.app/student", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/student");
      });

    e.target.reset();
  };
  return (
    <>
      <Container>
        <div className="addmission-section">
          <div className="print-top-header-section py-5">
            <div className="print-first-header">
              <img src={logo} className="w-100 addmission-logo"></img>
            </div>
            <div className="print-second-header">
              <img src={slogo} className="w-100 addmission-logo"></img>
            </div>
          </div>
          <form onSubmit={addmissionHandler}>
            <div className="first-parrent">
              <div className="first-container">
                <div className="divider-parrent">
                  <label className="d-first">Date Of addmission : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="date"
                    name="addmission"
                  ></input>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Student Name : </label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="d-second mb-2"
                    placeholder="Student name"
                  ></input>
                </div>

                <div className="divider-parrent">
                  <label className="d-first">Mothers Name : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="text"
                    name="mother"
                    placeholder="Mothers name"
                  ></input>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Gender : </label>
                  <select id="country" name="gender" className="d-second mb-2">
                    <option value="">select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">School/College : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="text"
                    name="school"
                    placeholder="School/College"
                  ></input>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Mobile Number : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="number"
                    name="phone"
                    placeholder="phone no"
                  ></input>
                </div>
              </div>
              <div className="first-container">
                <div className="divider-parrent">
                  <label className="d-first">ID No: </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="text"
                    name="studentId"
                    placeholder="ID no"
                  ></input>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Fathers Name : </label>
                  <input
                    required
                    type="text"
                    name="father"
                    className="d-second mb-2"
                    placeholder="Fathers name"
                  ></input>
                </div>

                <div className="divider-parrent">
                  <label className="d-first">Date of Birth : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="date"
                    name="birthday"
                    placeholder="date of birth"
                  ></input>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Blood Group : </label>
                  <select id="country" name="Blood" className="d-second mb-2">
                    <option value="0+">0+</option>
                    <option value="0-">0-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="B-">B-</option>
                    <option value="B+">B+</option>
                  </select>
                </div>
                <div className="divider-parrent">
                  <label className="d-first">Courses : </label>
                  <select id="country" name="course" className="d-second mb-2">
                    <option value="">select</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Full Stack Web Development">
                      Full Stack Web Development
                    </option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="last-container">
              <div className="divider-parrent">
                <label className="d-first">Present Address : </label>
                <input
                  required
                  className="d-second mb-2"
                  type="text"
                  name="present"
                  placeholder="Present Address"
                ></input>
              </div>
              <div className="divider-parrent">
                <label className="d-first">Permanent Address : </label>
                <input
                  required
                  className="d-second mb-2"
                  type="text"
                  name="permanent"
                  placeholder="permanent address"
                ></input>
              </div>
            </div>

            <div className="first-parrent">
              <div className="first-container">
                <div className="divider-parrent">
                  <label className="d-first">City : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="text"
                    name="city"
                    placeholder="city"
                  ></input>
                </div>
              </div>
              <div className="first-container">
                <div className="divider-parrent">
                  <label className="d-first">Postal code : </label>
                  <input
                    required
                    className="d-second mb-2"
                    type="number"
                    name="postal"
                    placeholder="postal code"
                  ></input>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="banner-btn mb-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
export default Addmission;
