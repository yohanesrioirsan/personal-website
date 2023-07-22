import React from "react";
import { Container, NavLink, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">Rioirsan.Dev™</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#">Work</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
