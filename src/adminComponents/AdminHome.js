import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";

export default function AdminHome() {
  return (
    <Container fluid className="main-content-container px-4">
      <Row>
        <Col lg="4" key={1}>
          <Card small className="card-post mb-4 mt-4">
            <CardBody>
              <h5 className="card-title">Number of categories</h5>
              <p className="card-text text-muted">12</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" key={1}>
          <Card small className="card-post mb-4 mt-4">
            <CardBody>
              <h5 className="card-title">Number of Product</h5>
              <p className="card-text text-muted">16</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
