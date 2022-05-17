import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Logo from './planet.png';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? '#0d6efd' : '',
      paddingBottom: isActive ? '0.30rem' : '',
      borderBottom: isActive ? '3px solid #0d6efd' : '',
    };
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="dark"
      className="border-bottom"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <div className="logo d-flex align-items-center py-2">
            <img className="logo-img" src={Logo} alt="logo" />
            <h2 className="ps-3 text-dark">Space Travelers Hub</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-dark"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets">
              <NavLink style={activeLink} to="/" className="text-primary link">
                Rockets
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#missions">
              <NavLink
                style={activeLink}
                to="/missions"
                className="text-primary link"
              >
                Missions
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#profile">
              <NavLink
                style={activeLink}
                to="/profile"
                className="text-primary link"
              >
                My Profile
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
