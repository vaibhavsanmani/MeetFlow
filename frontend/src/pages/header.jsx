import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className="py-3 shadow-sm navbar-brand-section header-navbar"
        sticky="top"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.98)" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center fw-bold text-white brand-logo-wrapper logo-hover"
          >
            <img
              src="/logo.png"
              alt="MeetFlow Logo"
              style={{ height: "38px", width: "auto", marginRight: "10px", transition: "transform 0.3s ease" }}
            />
            <span className="brand-text">
              Meet<span className="text-info" style={{ fontWeight: "800" }}>Flow</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Nav.Link href="/" className="text-white nav-link-custom">
                Home
              </Nav.Link>

              <Nav.Link href="/about" className="text-white nav-link-custom">
                About
              </Nav.Link>

              <Nav.Link href="/features" className="text-white nav-link-custom">
                Features
              </Nav.Link>

              <Nav.Link href="/contact" className="text-white nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-3 flex-wrap button-group">
              <a href="#login" style={{ textDecoration: 'none' }}>
                <Button variant="outline-light" className="text-nowrap btn-login btn-hover">
                  Login
                </Button>
              </a>

              <Button variant="info" className="text-dark fw-semibold text-nowrap btn-join btn-hover">
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