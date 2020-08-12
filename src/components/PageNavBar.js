import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './PageNavBar.css'

const PageNavBar = () => {
  return (
    <Navbar id="navbar" bg="light" expand="lg">
      <Navbar.Brand>Space Camp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
      <Navbar.Collapse className="justify-content-end">
        <Nav style={{float: 'right'}}>
          <Nav.Link href='#'>Shop</Nav.Link>
          <Nav.Link href='#'>Science</Nav.Link>
          <Nav.Link href='#'>Projects</Nav.Link>
          <NavDropdown title="About">
            <NavDropdown.Item>FAQs</NavDropdown.Item>
            <NavDropdown.Item>Contact</NavDropdown.Item>
            <NavDropdown.Item>Stockists</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default PageNavBar;