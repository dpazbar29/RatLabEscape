import React from 'react';
import logo from './../assets/Logo.webp'
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container fluid>
        <img src={logo}/>
        <Navbar.Brand href="#hero">Rat Lab Escape</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#gameplay">Gameplay</Nav.Link>
            <Nav.Link href="#features">Características</Nav.Link>
            <Nav.Link href="#story">Historia</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
