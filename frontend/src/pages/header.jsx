import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function header() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-3 shadow-sm"
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="fw-bold fs-3 text-info"
            style={{ letterSpacing: "1px" }}
          >
            MeetFlow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-3">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link href="/features" className="text-white">
                Features
              </Nav.Link>

              <Nav.Link href="/contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="outline-info">
                Login
              </Button>

              <Button variant="info" className="text-dark fw-semibold">
                Join Meeting
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default header;