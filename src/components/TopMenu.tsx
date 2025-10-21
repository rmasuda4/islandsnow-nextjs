'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, House, Search, PersonCircle, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#"><Facebook /></Nav.Link>
        <Nav.Link href="#"><Twitter /></Nav.Link>
        <Nav.Link href="#"><Pinterest /></Nav.Link>
        <Nav.Link href="#"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#"><House /></Nav.Link>
        <Nav.Link href="#"><Search /></Nav.Link>
        <Nav.Link href="#"><PersonCircle /></Nav.Link>
        <NavDropdown title={<Cart />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Your cart is currently empty</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
