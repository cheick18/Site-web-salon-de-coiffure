import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
   
    <Navbar bg="light" expand="lg">
        <div className='container'>
      <Navbar.Brand to="/">Logo</Navbar.Brand> {/* Le logo sous forme de texte */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> {/* Aligner les liens à droite */}
            <Nav.Link as={Link} to="/" className="NavLink">Home</Nav.Link>
            <Nav.Link as={Link} to="/rendez-vous" className="NavLink">Rendez-vous</Nav.Link>
            <Nav.Link as={Link} to="/about" className="NavLink">About</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    
    

  );
}

export default CustomNavbar;
