import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container className='px-5 py-5 my-5'>
        <h2 className='text-center pb-4'>Contact-Us</h2>
        <Row>
            <Col md="3"></Col>
            <Col md="6">
            <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className='text-center my-5'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
            </Col>
        </Row>
    </Container>
  );
};

export default ContactForm;
