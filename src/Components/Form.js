import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RendezVousForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateRendezVous: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique de soumission du formulaire
    console.log('Form Submitted:', formData);
  try {
    
  } catch (error) {
    
  }
      
  };

  return (
    <Container className="my-5">
      <h2>Formulaire de Rendez-vous</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDateRendezVous">
          <Form.Label>Date du rendez-vous</Form.Label>
          <Form.Control
            type="date"
            name="dateRendezVous"
            value={formData.dateRendezVous}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Soumettre
        </Button>
      </Form>
    </Container>
  );
};

export default RendezVousForm;
