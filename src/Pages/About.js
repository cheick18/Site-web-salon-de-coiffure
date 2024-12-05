import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h1>À propos de nous</h1>
      <p>
        Nous sommes une entreprise innovante dédiée à la création de solutions logicielles
        qui transforment l'expérience numérique. Notre équipe est composée de développeurs,
        designers et stratèges passionnés par la technologie et l'impact qu'elle peut avoir sur
        la société. Notre mission est de rendre le monde plus connecté, plus intelligent et plus
        accessible grâce à des produits et services de qualité supérieure.
      </p>
      <p>
        Depuis notre création, nous avons travaillé avec de nombreuses entreprises pour les aider
        à atteindre leurs objectifs grâce à des solutions sur mesure. Que vous soyez une petite
        startup ou une grande entreprise, nous avons les compétences et l'expertise pour vous
        accompagner dans votre transformation digitale.
      </p>
      <p>
        Notre vision est simple : utiliser la technologie pour simplifier la vie des utilisateurs
        et apporter de la valeur ajoutée dans chaque aspect de leur quotidien. Nous croyons fermement
        que l'innovation doit servir à améliorer le monde autour de nous, et c'est ce que nous
        nous efforçons de réaliser à chaque projet.
      </p>
    </Container>
  );
};

export default About;
