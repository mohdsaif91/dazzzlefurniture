import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardFooter, Button } from "shards-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Select from "react-select";

import { ProductContext } from "../../context/state/ProductState";
import { AdminContext } from "../../context/state/AdminState";

const modalData = {
  showModal: false,
  image: "",
};

const initialSelect = { label: "", value: "" };

export default function Products(props) {
  const [selectedCategory, setSelectedCategory] = useState({
    ...initialSelect,
  });
  const [modal, setModal] = useState({ ...modalData });
  const [showProduct, setShowProduct] = useState([]);

  const { allProduct, getAllProduct } = useContext(ProductContext);
  const { getCategoryCount, category } = useContext(AdminContext);
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (!category.category) {
      getCategoryCount();
    }
    if (!allProduct) {
      getAllProduct();
    }
  }, [allProduct, category]);

  useEffect(() => {
    if (allProduct && selectedCategory.value !== "") {
      const filteredCategory = allProduct.filter(
        (f) => f.categoryName === selectedCategory.value
      );

      setShowProduct([...filteredCategory]);
    } else {
      setShowProduct(allProduct);
    }
  }, [allProduct, selectedCategory]);

  const openImage = (image) => {
    try {
      setModal({
        ...modal,
        showModal: !modal.showModal,
        image,
      });
      handle.enter();
    } catch (error) {
      console.log(error);
    }
  };

  const closeFullScreen = () => {
    setModal({ ...modalData });
    handle.exit();
  };

  const actualProducts = allProduct ? allProduct : [];

  const categoryOption = category.category
    ? category.category.map((m) => {
        return { label: m.categoryName, value: m.categoryName };
      })
    : [];

  return (
    <Container fluid className="main-content-container px-4 mt-4">
      <Row className="react-select-container">
        <div className="select-heading">Category Name</div>
        <Select
          className="category-select"
          placeholder="Select Category"
          options={categoryOption}
          onChange={(value) =>
            !value
              ? setSelectedCategory({ initialSelect })
              : setSelectedCategory(value)
          }
          value={selectedCategory}
          isClearable={true}
        />
      </Row>
      <Row>
        {showProduct.map((m) => (
          <Col lg="4" key={m._id}>
            <Card small className="card-post mb-4">
              <div
                className="card-post__image"
                style={{
                  backgroundImage: `url('http://dazzlefurnitureworld.s3.ap-south-1.amazonaws.com/product/${m.productImageName}')`,
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
                        `http://dazzlefurnitureworld.s3.ap-south-1.amazonaws.com/product/${m.productImageName}`
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
      {/* {modal.showModal && ( */}
      <FullScreen handle={handle}>
        {modal.image !== "" && (
          <button className="exit-btn" onClick={() => closeFullScreen()}>
            Exit
          </button>
        )}
        {modal.image !== "" && (
          <img className="full-screen-img" src={modal.image} />
        )}
      </FullScreen>
      {/* )} */}
    </Container>
  );
}
