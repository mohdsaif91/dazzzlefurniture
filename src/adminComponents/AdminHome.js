import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { Carousel } from "react-responsive-carousel";

import { AdminContext } from "../context/state/AdminState";
import { ProductContext } from "../context/state/ProductState";

export default function AdminHome() {
  const {
    category: { category },
    getCategoryCount,
    productCount,
  } = useContext(AdminContext);

  const { allProduct, getProductState } = useContext(ProductContext);

  useEffect(() => {
    if (category === undefined) {
      getCategoryCount();
    }
    if (allProduct === null) {
      getProductState();
    }
  }, [category, allProduct]);

  const actualCategory = category === undefined ? [] : category;

  return (
    <Container fluid className="main-content-container px-4">
      <Row>
        <Col lg="4" key={1}>
          <Card small className="card-post mb-4 mt-4">
            <CardBody>
              <h5 className="card-title">Number of categories</h5>
              <p className="card-text text-muted">{actualCategory.length}</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" key={1}>
          <Card small className="card-post mb-4 mt-4">
            <CardBody>
              <h5 className="card-title">Number of Product</h5>
              <p className="card-text text-muted">{productCount}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* carousel */}
      <Row>
        <Carousel
          className="mb-4"
          selectedItem={0}
          autoPlay={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image card-image"
                style={{
                  backgroundImage: `url(https://www.w3schools.com/howto/img_nature_wide.jpg)`,
                }}
              ></div>
            </Card>
          </div>
          <div>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image card-image"
                style={{
                  backgroundImage: `url(https://www.w3schools.com/howto/img_fjords_wide.jpg)`,
                }}
              ></div>
            </Card>
          </div>
          <div>
            <img
              className="carousel-image"
              src="https://www.w3schools.com/howto/img_fjords_wide.jpg"
            />
          </div>
        </Carousel>
      </Row>
    </Container>
  );
}
