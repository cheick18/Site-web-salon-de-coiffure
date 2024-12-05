import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
   
    <Navbar bg="light" expand="lg">
        <div className='container'>
      <Navbar.Brand href="/">Logo</Navbar.Brand> {/* Le logo sous forme de texte */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* Aligner les liens à droite */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/rendez-vous">Rendez-vous</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    
    

  );
}

export default CustomNavbar;
