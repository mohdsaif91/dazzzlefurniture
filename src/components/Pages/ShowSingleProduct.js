import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "shards-react";

import { ProductContext } from "../../context/state/ProductState";
import WhatsApp from "../../images/what-app.gif";

function ShowSingleProduct() {
  const { getProductById, gotHotProduct, doNotCallAgain } =
    useContext(ProductContext);

  const { id } = useParams();
  useEffect(() => {
    if (!gotHotProduct) {
      getProductById(id);
    }
    return () => {
      doNotCallAgain();
    };
  }, [id]);

  return (
    <Container fluid>
      <Row className="mt-4 mb-4">
        <Col lg="1" md="1"></Col>
        {gotHotProduct && (
          <Col lg="10" md="10" sm="12">
            {/* <Card> */}
            <Card className="card-post card-post--1">
              <CardBody>
                <div
                  className="card-post__image main-image-height"
                  style={{
                    backgroundImage: `url(http://dazzlefurnitureworld.s3.ap-south-1.amazonaws.com/product/${gotHotProduct.productImageName})`,
                  }}
                ></div>
              </CardBody>
              <CardHeader>
                <div className="header-container">
                  <div>
                    <div className="mb-2">
                      Product: <span>{gotHotProduct.productName}</span>
                    </div>
                    <div className="mb-2">
                      Product Category:{" "}
                      <span>{gotHotProduct.categoryName}</span>
                    </div>
                  </div>
                </div>
                <div className="social-media">
                  <img className="social-media-img" src={WhatsApp} />
                </div>
              </CardHeader>
            </Card>
          </Col>
        )}
        <Col lg="1" md="1"></Col>
      </Row>
    </Container>
  );
}

export default ShowSingleProduct;
