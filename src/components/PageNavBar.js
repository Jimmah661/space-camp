import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const PageNavBar = () => {
  return (
    <Navbar className="justify-content-between" bg="light" expand="lg">
      <Navbar.Brand>Space Camp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav>
        <Nav.Link href='#'>Shop</Nav.Link>
        <Nav.Link href='#'>Science</Nav.Link>
        <Nav.Link href='#'>Projects</Nav.Link>
        <NavDropdown title="About">
          <NavDropdown.Item>FAQs</NavDropdown.Item>
          <NavDropdown.Item>Contact</NavDropdown.Item>
          <NavDropdown.Item>Stockists</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default PageNavBar;