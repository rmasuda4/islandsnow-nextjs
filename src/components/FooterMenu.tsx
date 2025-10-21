'use client';

import { Col, Container, Row } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="pt-5">
    <Container>
      <Row className="justify-content-center">
        <Col xs={3} className="text-center">
          <h5>NAVIGATION</h5>
          <p>
            About Us
            <br />
            Videos
            <br />
            Store Locations
          </p>
        </Col>
        <Col xs={3} className="text-center">
          <h5>MAIN MENU</h5>
          <p>
            About Us
            <br />
            Videos
            <br />
            Store Locations
          </p>
        </Col>
        <Col xs={3} className="text-center">
          <h5>CONNECT</h5>
          <p>
            Sign up for the latest updates
            <br />
            <input type="text" placeholder="Enter Email Address" />
            <button type="button">Join</button>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
