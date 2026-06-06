import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className="py-3 shadow-sm navbar-brand-section"
        sticky="top"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.95)" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center fw-bold text-white brand-logo-wrapper"
          >
            <img
              src="/logo.png"
              alt="MeetFlow Logo"
              style={{ height: "38px", width: "auto", marginRight: "10px" }}
            />
            <span className="brand-text">
              Meet<span className="text-info" style={{ fontWeight: "800" }}>Flow</span>
            </span>
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
            <div className="d-flex gap-2 flex-wrap">
              <a href="#login" style={{ textDecoration: 'none' }}>
                <Button variant="outline-light" className="text-nowrap">
                  Login
                </Button>
              </a>

              <Button variant="info" className="text-dark fw-semibold text-nowrap">
                Join Meeting
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;