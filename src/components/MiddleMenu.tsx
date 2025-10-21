'use client';

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const MiddleMenu = () => (
  <Navbar bg="light">
    <Container>
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <Nav className="mx-auto" style={{ fontSize: '12px' }}>
            <Nav.Link href="#">MENS</Nav.Link>
            <Nav.Link href="#">WOMENS</Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">BRANDS</Nav.Link>
            <Nav.Link href="#">
              SEARCH
              <Search />
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default MiddleMenu;
