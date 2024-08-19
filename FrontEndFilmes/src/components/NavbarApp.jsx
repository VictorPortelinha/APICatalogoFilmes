import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarApp = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">CatalogoFilmes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" href="#home">Catalogo</Nav.Link>
          <Nav.Link as={Link} to="/AdcionarFilme" href="#link">Adcionar Filme</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavbarApp