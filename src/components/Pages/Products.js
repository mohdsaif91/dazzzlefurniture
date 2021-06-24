import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "shards-react";
import { ImageGroup, Image } from "react-fullscreen-image";

import { ProductContext } from "../../context/state/ProductState";

const modalData = {
  showModal: false,
  image: "",
};

const imgList = [
  "https://unsplash.com/photos/Bkci_8qcdvQ",
  "https://unsplash.com/photos/hS46bsAASwQ",
  "https://unsplash.com/photos/2VDa8bnLM8c",
  "https://unsplash.com/photos/_LuLiJc1cdo",
  "https://unsplash.com/photos/1Z2niiBPg5A",
  "https://unsplash.com/photos/pHANr-CpbYM",
  "https://unsplash.com/photos/pQMM63GE7fo",
  "https://unsplash.com/photos/2VDa8bnLM8c",
  "https://unsplash.com/photos/MBkQKiH14ng",
];

export default function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [modal, setModal] = useState({ ...modalData });
  const { allProduct, getProductState } = useContext(ProductContext);
  const { categoryName } = (props.location && props.location.state) || {};

  useEffect(() => {
    if (allProduct === null) {
      getProductState(categoryName);
    }
    setSelectedProduct(allProduct || []);
  }, [allProduct]);

  const openImage = (image) => {
    setModal({
      ...modal,
      showModal: !modal.showModal,
      image,
    });
  };

  // console.log(selectedProduct, "<>?", categoryName, allProduct);
  return (
    <Container fluid className="main-content-container px-4 mt-4">
      <Row>
        {selectedProduct.map((m) => (
          <Col lg="4" key={m._id}>
            <Card small className="card-post mb-4">
              <div
                className="card-post__image"
                style={{
                  backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/products/${m.productImageName}')`,
                }}
              />
              <CardFooter className="border-top d-flex">
                <div className="card-post__author d-flex">
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <span className="card-post__author-name">
                      {m.productName}
                    </span>
                    <small>{m.categoryName}</small>
                  </div>
                </div>
                <div className="my-auto ml-auto">
                  <Button
                    size="sm"
                    theme="primary"
                    onClick={() =>
                      openImage(
                        `http://dazzlefurniture.s3.ap-south-1.amazonaws.com/products/${m.productImageName}`
                      )
                    }
                  >
                    <i className="far fa fa-eye mr-1" /> View
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      {/* toggle={this.toggle} */}
      <Modal
        open={modal.showModal}
        toggle={() => setModal({ ...modal, showModal: false })}
      >
        <ImageGroup>
          <ModalBody className="fill">
            <Image
              // className="card-post__image"
              src={modal.image}
              style={{
                position: "relative",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                objectFit: "cover",
              }}
            />
            {/* <img src={modal.image} /> */}
          </ModalBody>
        </ImageGroup>
      </Modal>
    </Container>
  );
}
