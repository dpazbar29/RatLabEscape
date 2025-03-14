import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-5 bg-white">
      <Container fluid>
        <h2 className="text-center mb-4">Características</h2>
        <Row className="text-center">
          <Col md={4}>
            <h3>Plataformas</h3>
            <p>Niveles desafiantes llenos de obstáculos. Pon a prueba tus reflejos y coordinación evitando obstáculos y enemigos o saltando entre plataformas con infitas variantes en un entorno bidimensional</p>
          </Col>
          <Col md={4}>
            <h3>Puzzles</h3>
            <p>Resuelve acertijos de diferentes tipos como la manipulación de objetos, encaje de piezas o búsqueda de patrones para avanzar en la historia mediante la lógica, estrategia o pensamiento crítico</p>
          </Col>
          <Col md={4}>
            <h3>Pixel Art</h3>
            <p>Estilo visual se basa en gráficos creados con píxeles, utilizando una paleta de colores limitada y un diseño que recuerda a los juegos clásicos de las consolas de 8 y 16 bits. Estos juegos suelen tener una estética retro, donde cada elemento visual, desde los personajes hasta los escenarios, está compuesto por bloques de píxeles que le dan un aspecto nostálgico y simplificado</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
