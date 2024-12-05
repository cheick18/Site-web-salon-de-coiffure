import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-dark text-white py-5">
      <Container>
        <h1 className="display-4">Salon de coiffure Pro</h1>
        <p className="lead">
          Ceci est un texte fictif qui sert à illustrer un header avec un arrière-plan sombre et un contenu de texte.
          Vous pouvez personnaliser ce texte selon vos besoins.
        </p>
      </Container>
    </header>
  );
};

export default Header;
