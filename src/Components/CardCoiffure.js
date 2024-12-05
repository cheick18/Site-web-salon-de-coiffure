import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// JSON contenant les titres et ids des coiffures
const haircutData = [
  { id: 1, title: 'Coupe Courte' },
  { id: 2, title: 'Coupe Longue' },
  { id: 3, title: 'Coupe Pixie' },
  { id: 4, title: 'Coiffure Bouclée' },
  { id: 5, title: 'Coiffure Épaisse' },
  { id: 6, title: 'Coiffure Lisse' },
];

const HaircutCards = () => {
  return (
    <Container className="my-5">
        <h4>Decouvrez notre savoir faire</h4>
      <Row>
        {haircutData.map((haircut) => (
          <Col md={4} key={haircut.id}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200"
                alt={haircut.title}
              />
              <Card.Body>
                <Card.Title>{haircut.title}</Card.Title>
                <Card.Text>
                  Découvrez cette coupe de cheveux tendance et adaptée à tous les styles. Essayez-la pour un look unique !
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HaircutCards;
