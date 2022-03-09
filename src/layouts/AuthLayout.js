import React from "react";
import { Container, Row, Col } from "shards-react";

const AuthLayout = ({ children, noNavbar, noFooter }) => {
  return (
    <Container fluid>
      <Row pl-8>
        <Col lg="2" md="2" />
        <Col className="main-content mt-12" lg="8" md="8" sm="12" tag="main">
          {children}
        </Col>
        <Col lg="2" md="2" />
      </Row>
    </Container>
  );
};

export default AuthLayout;
