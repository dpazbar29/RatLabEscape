import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center text-center bg-dark text-light vh-100 vw-100">
      <Container fluid>
        <h1>¡Bienvenido a Rat Lab Escape!</h1>
        <p className="lead">Un emocionante juego de plataformas y puzzles en pixel art. Donde se pondrán a prueba tu habilidad e intelecto.</p>
        <Button variant="primary" href="#gameplay">Descubre Más</Button>
      </Container>  
    </section>
  );
};

export default HeroSection;
