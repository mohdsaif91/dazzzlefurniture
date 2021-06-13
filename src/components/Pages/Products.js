import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import { ProductContext } from "../../context/state/ProductState";

export default function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { allProduct, getProductState } = useContext(ProductContext);
  const { categoryName } = (props.location && props.location.state) || {};
  useEffect(() => {
    if (allProduct === null) {
      getProductState(categoryName);
    }
    setSelectedProduct(allProduct || []);
  }, [allProduct]);

  console.log(selectedProduct, "<>?", categoryName, allProduct);
  return (
    <Container fluid className="main-content-container px-4">
      <Row>
        {selectedProduct.map(
          ({ productImageName, productName, productId }, index) => (
            <Col
              lg="3"
              md="6"
              sm="12"
              className="mb-4"
              // key={idx}
            >
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{
                    backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/products/${productImageName}')`
                  }}
                />
                {/* <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                  </a>
                </h5>
              </CardBody> */}
                {/* {post.title} */}
                {/* <p className="card-text">{post.body}</p> */}
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    {/* <a
                    className="text-fiord-blue"
                    // href={post.authorUrl}
                  >
                    {/* {post.author} */}
                    {/* </a> */}
                    {/* */}
                    <a
                      className="text-fiord-blue"
                      // href={post.categoryUrl}
                    >
                      {productName}
                    </a>
                    <a className="text-fiord-blue">#{productId}</a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}
