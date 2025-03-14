import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light text-center">
      <Container fluid style={{ maxWidth: '600px' }}>
        <h2>Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="text"
              placeholder="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control 
              type="email"
              placeholder="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control 
              as="textarea"
              rows={5}
              placeholder="Mensaje..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Button type="submit" variant="primary">Enviar</Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactSection;
