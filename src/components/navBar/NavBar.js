import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Logo from './planet.png';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? '#95bcf0' : '',
      paddingBottom: isActive ? '0.25rem' : '',
      borderBottom: isActive ? '3px solid #95bcf0' : '',
    };
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="ps-3 text-dark">Space Travelers Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-dark"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets">
              <NavLink
                style={activeLink}
                to="/"
                className="text-primary link"
                activeStyle="active"
              >
                Rockets
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#missions">
              <NavLink
                style={activeLink}
                to="/missions"
                className="text-primary link"
                activeStyle="active"
              >
                Missions
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#profile">
              <NavLink
                style={activeLink}
                to="/profile"
                className="text-primary link"
                activeStyle="active"
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
