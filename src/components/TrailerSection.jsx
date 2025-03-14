import React from 'react';
import trailer from './../assets/RatLab.mp4'
import { Container } from 'react-bootstrap';

const TrailerSection = () => {
  return (
    <section id="trailer" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center mb-4">Tráiler del Juego</h2>
        <div className="ratio ratio-16x9">
            <video className="w-100" controls>
                <source src={trailer} type="video/mp4" />
                Tu navegador no soporta este video.
            </video>
        </div>
      </Container>
    </section>
  );
};

export default TrailerSection;
