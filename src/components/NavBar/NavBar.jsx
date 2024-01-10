import React from "react";
import { NavLink, Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#">
          <h1 style={{ fontSize: "22px" }}>RIOIRSAN</h1>
        </Navbar.Brand>
        <Nav className="status ms-auto">
          <NavLink href="#">
            <span style={{ background: "#E6FF00" }}>
              Available for Work or Project
            </span>
          </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
