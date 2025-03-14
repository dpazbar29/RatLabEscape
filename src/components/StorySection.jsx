import React from 'react';
import { Container } from 'react-bootstrap';

const StorySection = () => {
  return (
    <section id="story" className="py-5 bg-light text-center">
      <Container fluid>
        <h2>Historia</h2>
        <p className="text-justify vw-70">
    Una rata de laboratorio, sometida a infinidad de pruebas en el marco de una investigación sobre la restauración de especies extintas, ha pasado su vida entre jaulas, probetas y experimentos. Sin embargo, tras años de observación y modificación genética, comienza a desarrollar una inteligencia inusitada, a tal punto que empieza a comprender el verdadero alcance de su situación. Mientras los científicos se concentran en sus estudios, la rata descubre una pequeña fisura en las paredes del laboratorio y se da cuenta de que tiene una oportunidad. A pesar de ser un mero sujeto de investigación, siente un impulso de libertad, una chispa de rebelión ante su destino. La posibilidad de escapar se presenta ante ella, y, con una mezcla de temor y determinación, decide que es hora de actuar. Aquí comienza su fuga, una huida hacia lo desconocido, donde no solo luchará por su supervivencia, sino también por una nueva vida lejos de las garras de la ciencia.
  </p>
      </Container>
    </section>
  );
};

export default StorySection;
