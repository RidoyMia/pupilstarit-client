import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

function Allstudent() {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pupil-server-ridoymia.vercel.app/student")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
      });
  }, []);

  const handle = (e) => {
    navigate(`/student/Details/${e}`);
  };

  return (
    <>
      <Container>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Student Id </th>
              <th>Addmission Date</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {student?.map((r) => (
              <tr>
                <td>{r?.name}</td>
                <td>{r?.course}</td>
                <td>{r?.studentId}</td>
                <td>{r?.addmission}</td>
                <td>
                  <button className="banner-btn" onClick={() => handle(r?._id)}>
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default Allstudent;
