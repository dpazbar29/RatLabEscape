import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import rataGrande from './../assets/RataGrande.webp';
import fondo from './../assets/Fondo.webp';

const GameplaySection = () => {
  return (
    <section id="gameplay" className="py-5 bg-dark">
      <Container>
        <h2 className="text-center text-light mb-4">Gameplay</h2>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img src={rataGrande} alt="Nivel 1" className="d-block w-80" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img src={fondo} alt="Nivel 2" className="d-block w-100" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default GameplaySection;
