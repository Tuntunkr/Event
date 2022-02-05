import React from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="../images/logo.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-4 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Event"
                id="navbarScrollingDropdown"
                className="headers"
              >
                <NavDropdown.Item href="" className="headers">
                  All events
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" className="headers">
                  Hackathon
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" className="headers">
                  Conference
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" className="headers">
                  Webinars
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" className="headers">
                  AMA
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            <Nav.Link className="navCta" href="/SignUp">
              Sign Up
            </Nav.Link>
            <Nav.Link className="navCtas" href="/SignIn">
              Sign In
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
