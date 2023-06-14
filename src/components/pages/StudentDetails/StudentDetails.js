import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import logo from "../../images/LOGO.png";
import slogo from "../../images/side-logo.png";
import ReactToPdf from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
const component = React.createRef();

function StudentDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);
  const component = React.createRef();
  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print success"),
  });
  useEffect(() => {
    fetch(`https://pupil-server-ridoymia.vercel.app/student/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.[0]);
        setData(data?.[0]);
      });
  }, [id]);

  return (
    <>
      <div
        className="px-5 py-5"
        ref={component}
        style={{ width: "100%", height: window.innerHeight }}
      >
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
            <form>
              <div className="first-parrent">
                <div className="first-container">
                  <div className="divider-parrent">
                    <label className="d-first">Date Of addmission : </label>
                    <input
                      required
                      className="d-second mb-2"
                      type="date"
                      value={data?.addmission}
                      name="addmission"
                    ></input>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">Student Name : </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={data?.name}
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
                      value={data?.mother}
                      placeholder="Mothers name"
                    ></input>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">Gender : </label>
                    <select
                      id="country"
                      name="gender"
                      value={data?.gender}
                      className="d-second mb-2"
                    >
                      <option value="">{data?.gender}</option>
                    </select>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">School/College : </label>
                    <input
                      required
                      className="d-second mb-2"
                      type="text"
                      value={data?.school}
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
                      value={data?.phone}
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
                      value={data?.studentId}
                      placeholder="ID no"
                    ></input>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">Fathers Name : </label>
                    <input
                      required
                      type="text"
                      name="father"
                      value={data?.father}
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
                      value={data?.birthday}
                      placeholder="date of birth"
                    ></input>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">Blood Group : </label>
                    <select id="country" name="Blood" className="d-second mb-2">
                      <option value="0+">{data?.Blood}</option>
                    </select>
                  </div>
                  <div className="divider-parrent">
                    <label className="d-first">Courses : </label>
                    <select
                      id="country"
                      name="course"
                      value={data?.course}
                      className="d-second mb-2"
                    >
                      <option value="">{data?.course}</option>
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
                    value={data?.present}
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
                    value={data?.permanent}
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
                      value={data?.city}
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
                      value={data?.postal}
                      placeholder="postal code"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="text-center"></div>
            </form>
          </div>
        </Container>
      </div>
      <div className="text-center my-5">
        <button onClick={handlePrint} className="banner-btn">
          print
        </button>
      </div>
    </>
  );
}
export default StudentDetails;
