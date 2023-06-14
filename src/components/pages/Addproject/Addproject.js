import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Addproject() {
  const [all, setAll] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://pupil-server-ridoymia.vercel.app/allcourse`)
      .then((res) => res.json())
      .then((data) => {
        setAll(data);
        console.log(data);
      });
  }, []);
  const Addprojectreview = (info) => {
    const formData = new FormData();
    const image = info.img[0];

    formData.append("image", image);
    const api = `bd0f22832703db189e737da27b90a211`;
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${api}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataa) => {
        if (dataa?.data?.url) {
          const name = info.name;
          const category = info.category;
          console.log(category);
          const aboutYou = info.aboutYou;
          if (name && category && aboutYou) {
            const project = {
              name,
              category,
              aboutYou,
              img: dataa?.data?.url,
            };
            fetch("https://pupil-server-ridoymia.vercel.app/addproject", {
              method: "POST",
              body: JSON.stringify(project),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                navigate("/StudentProject");
              });
          }
        }
      });
  };

  return (
    <>
      <Container className="py-5 ">
        <Row>
          <Col md="3"> </Col>
          <Col md="6" className="add-container">
            <form onSubmit={handleSubmit(Addprojectreview)}>
              <input
                type="text"
                placeholder="type your name"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="w-100 pb-3 mb-2 input"
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
              <select
                className="w-100 pb-3 mb-2 input"
                {...register("category", { required: true })}
              >
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}

                {all?.map((r) => (
                  <option value={r.category}>{r.Title}</option>
                ))}
              </select>
              <textarea
                className="w-100 pb-3 mb-2 input"
                type="text"
                {...register("aboutYou", {
                  required: "Comment  is Required",
                })}
                placeholder="About you"
              />
              {errors.aboutYou && (
                <p className="text-red-500">{errors.aboutYou.message}</p>
              )}
              <input
                className="w-100 pb-5 input"
                type="file"
                {...register("img", {
                  required: "img  is Required",
                })}
                placeholder="First name"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
              <div className="text-center">
                <button type="submit" className="addBtn">
                  Addproject
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Addproject;
