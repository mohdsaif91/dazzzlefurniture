import React, { useContext, useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

import { AdminContext } from "../context/state/AdminState";
import { ProductContext } from "../context/state/ProductState";
import PageTitle from "../components/common/PageTitle";
import { getFormData } from "../util";

const initialProductState = {
  productName: "",
  productImage: "",
  productCategory: ""
};

export default function AddProductComponent() {
  const [product, setProduct] = useState({ ...initialProductState });

  const {
    category: { category },
    getCategoryCount
  } = useContext(AdminContext);

  const { allProduct, getProductState, addProductState } = useContext(
    ProductContext
  );
  console.log(allProduct, category, "<>?");

  useEffect(() => {
    if (category === undefined) {
      getCategoryCount();
    }
  }, [category === undefined]);
  useEffect(() => {
    getProductState();
  }, [allProduct === undefined]);

  // useEffect(() => {
  //   console.log("hi <>?", allProduct);
  // }, [allProduct === undefined]);
  // }, [allProduct === undefined || category === undefined]);

  const actualCategory = category === undefined ? [] : category;

  const addProduct = () => {
    addProductState(getFormData(product));
  };

  const uploadProductImage = (e, type) => {
    if (type === "add") {
      setProduct({ ...product, productImage: e.target.files[0] });
    }
  };

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row className="d-flex flex-row">
          {/* updateProduct */}

          <Col md="6">
            <div className="mb-5">
              <PageTitle
                sm="4"
                md="6"
                title="Update Product"
                className="text-sm-left mt-3"
              />
              <div className="form-group mt-3">
                <label htmlFor="productName">Product Name</label>
                <FormInput
                  id="productName"
                  type="test"
                  placeholder="Product Name"
                />
              </div>
              <div className="custom-file mb-3 mt-4">
                <label className="custom-file-label" htmlFor="customFile2">
                  Product Image...
                </label>
                <FormInput
                  type="file"
                  className="custom-file-input"
                  id="customFile2"
                  // onChange={e => onFileUpload(e, "imageDisplay")}
                />
              </div>
              <Row>
                <Col className="d-flex flex-row" sm="12" md="4">
                  <Card
                    small
                    className="card-post mb-2 card-post--aside card-post--1"
                  >
                    {/* {editcategoryData.imageName !== "" ? (
                      <div
                        className="card-post__image"
                        style={{
                          backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${editcategoryData.imageName}')`
                        }}
                      ></div>
                    ) : null} */}
                  </Card>
                </Col>
                <Col md="4">
                  <Button
                    type="submit"
                    // disabled={editcategoryData.editEnable}
                    // theme={loading.update ? "default" : "info"}
                    // onClick={e => update(e)}
                  >
                    {/* {loading.update ? (
                      <img style={{ height: 93, width: 136 }} src={infinity} />
                    ) : ( */}
                    Update Product
                    {/* )} */}
                  </Button>
                </Col>
              </Row>
            </div>

            {/* addProduct */}

            <div className="addProduct">
              <PageTitle
                sm="4"
                md="6"
                title="Add Product"
                className="text-sm-left mt-3"
              />
              <Form>
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <FormInput
                      id="productName"
                      type="test"
                      placeholder="Product Name"
                      onChange={e =>
                        setProduct({ ...product, productName: e.target.value })
                      }
                    />
                  </Col>
                  <Col md="6">
                    <label htmlFor="feInputState">Category</label>
                    <FormSelect
                      id="feInputState"
                      onChange={e =>
                        setProduct({
                          ...product,
                          productCategory: e.target.value
                        })
                      }
                    >
                      <option>Choose...</option>
                      {actualCategory.map(m => (
                        <option>{m.categoryName}</option>
                      ))}
                    </FormSelect>
                  </Col>
                </Row>
                <FormGroup>
                  <div className="custom-file mb-3 mt-4">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile2"
                      onChange={e => uploadProductImage(e, "add")}
                    />
                    <label className="custom-file-label" htmlFor="customFile2">
                      Product Image...
                    </label>
                  </div>
                </FormGroup>
                <Button onClick={() => addProduct()}>Add Product</Button>
              </Form>
            </div>
          </Col>

          {/* product List */}

          <Col md="6">
            <Card
              small
              className="card-post mb-2 card-post--aside card-post--1"
            >
              <div
                className="card-post__image"
                // style={{
                //   backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${imageName}')`
                // }}
              ></div>
              <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                    {/* {categoryName} #{index + 1} */}
                  </a>
                </h5>
                <div className="mt-5">
                  <Button
                    // onClick={() => deleteCategoryMethod(_id, imageName)}
                    theme="danger"
                    className="mb-2 mr-1"
                  >
                    Delete
                  </Button>
                  <Button
                    // onClick={() => editCategory(_id)}
                    theme="info"
                    className="mb-2 mr-1"
                  >
                    Edit
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}
