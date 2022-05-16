import React from 'react';
import './NavBar.css'
import Logo from './planet.png';
import {Navbar, Container, Nav} from 'react-bootstrap';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="ps-3 text-dark">Space Travelers Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="text-dark"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets"className="text-primary">Rockets</Nav.Link>
            <Nav.Link href="#missions"className="text-primary">Missions</Nav.Link>
            <Nav.Link href="#profile"className="text-primary">My Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
