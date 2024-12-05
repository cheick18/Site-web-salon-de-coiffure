import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Section = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center" style={{ justifyContent: 'space-between' }}>
        <Col md={6}>
          <img 
            src="https://via.placeholder.com/400" 
            alt="Image exemple" 
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2>Titre de la section</h2>
          <p>
            Ceci est un texte fictif pour illustrer une section avec une image à gauche et un texte à droite. 
            Cette mise en page est idéale pour des sections telles que "À propos", "Nos services", etc. 
            Vous pouvez personnaliser ce texte selon vos besoins. La mise en page est totalement réactive 
            grâce à Bootstrap.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
