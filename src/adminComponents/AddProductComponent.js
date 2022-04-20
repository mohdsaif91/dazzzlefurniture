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
  FormSelect,
  Button,
  Badge,
} from "shards-react";

import { AdminContext } from "../context/state/AdminState";
import { ProductContext } from "../context/state/ProductState";
import PageTitle from "../components/common/PageTitle";
import { getFormData } from "../util";
const initialProductState = {
  productName: "",
  productImage: "",
  productCategory: "",
  products: [],
  selectedCategory: "",
};
const editProductData = {
  editProductName: "",
  editProductImageName: "",
  editImage: "",
  editCategoryName: "",
  newEditCategoryName: "",
  editProductId: "",
  editImageDisplay: "",
  newEditImage: "",
};
export default function AddProductComponent() {
  const [product, setProduct] = useState({ ...initialProductState });
  const [tabShow, setTabShow] = useState(false);
  const [edit, setEdit] = useState({ ...editProductData });

  const {
    category: { category },
    categoryCount,
    getCategoryCount,
  } = useContext(AdminContext);
  const {
    allProduct,
    getProductState,
    addProductState,
    deleteProduct,
    updateProductState,
  } = useContext(ProductContext);

  useEffect(() => {
    if (category === undefined) {
      getCategoryCount();
    }
  }, [category]);

  useEffect(() => {
    setProduct({
      ...product,
      products: allProduct || [],
    });
  }, [product.selectedCategory]);

  const addProduct = () => {
    addProductState(getFormData(product));
  };

  const updateProduct = () => {
    updateProductState(getFormData(edit));
  };

  const uploadProductImage = (e, type) => {
    if (type === "add") {
      setProduct({
        ...product,
        productImage: e.target.files[0],
      });
    } else {
      setEdit({
        ...edit,
        newEditImage: e.target.files[0],
      });
    }
  };

  const editProduct = (id) => {
    setTabShow(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const selectedProduct = product.products.find((x) => x._id === id);
    const { productImageName, categoryName, productName, _id } =
      selectedProduct;

    setEdit({
      ...edit,
      editImageDisplay: productImageName,
      editCategoryName: categoryName,
      newEditCategoryName: categoryName,
      editProductName: productName,
      editProductId: _id,
    });
  };

  const deleteProductMethod = (id, imageName) => {
    deleteProduct(id, imageName);
  };

  const getProductFromCategory = (categoryName) => {
    const category = categoryName.substring(0, categoryName.lastIndexOf(" "));
    getProductState(category.trim());
    setProduct({
      ...product,
      selectedCategory: categoryName.trim(),
    });
  };

  const actualCategory = categoryCount === undefined ? [] : categoryCount;

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row className="d-flex flex-row">
          {/* updateProduct */}
          <Col md="6">
            <div className="d-flex justify-content-around">
              <Button
                disabled={!tabShow}
                theme={`${tabShow ? "primary" : ""}`}
                className={`btn ${tabShow ? "btn-primary" : ""} mr-5 border`}
              >
                Update Product
              </Button>

              <FormSelect
                id="feInputState"
                className="select-in-mobile"
                value={edit.newEditCategoryName}
                onChange={(e) => getProductFromCategory(e.target.value)}
              >
                <option>Select Category</option>
                {actualCategory.map((m) => (
                  <option className="d-flex justify-content-around">
                    {m.name}
                    {"   "} {m.count}
                  </option>
                ))}
              </FormSelect>

              <Button
                theme={`${tabShow ? "" : "primary"}`}
                onClick={() => setTabShow(false)}
                className={`btn ${tabShow ? "" : "btn-primary"} border`}
              >
                Add Product
              </Button>
            </div>
            {/* <Row className="m-4">
              <Col md="12" sm="12">
                <div className="d-flex justify-content-center">
                  <Button
                    theme="primary"
                    onClick={() => refreshCategory()}
                    className="btn btn-danger btn-lg btn-block"
                  >
                    Refresh Category
                  </Button>
                </div>
              </Col>
            </Row> */}
            {tabShow ? (
              // update Product
              <div className="mb-5">
                <PageTitle
                  sm="4"
                  md="6"
                  title="Update Product"
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
                        value={edit.editProductName}
                        onChange={(e) =>
                          setEdit({
                            ...edit,
                            editProductName: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col md="6">
                      <label htmlFor="feInputState">Category</label>
                      <FormSelect
                        id="feInputState"
                        value={edit.newEditCategoryName}
                        onChange={(e) =>
                          setEdit({
                            ...edit,
                            newEditCategoryName: e.target.value,
                          })
                        }
                      >
                        <option>Choose...</option>
                        {actualCategory.map((m) => (
                          <option>{m.name}</option>
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
                        onChange={(e) => uploadProductImage(e, "update")}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFile2"
                      >
                        Product Image...
                      </label>
                    </div>
                  </FormGroup>
                  <Row>
                    <Col className="d-flex flex-row" sm="12" md="6">
                      <Card
                        small
                        className="card-post mb-2 card-post--aside card-post--1"
                      >
                        {edit.editImageDisplay !== "" ? (
                          <div
                            className="card-post__image"
                            style={{
                              backgroundImage: `url('https://drive.google.com/uc?export=view&id=${edit.editImageDisplay}')`,
                            }}
                          ></div>
                        ) : null}
                      </Card>
                    </Col>
                    <Col sm="12" md="4" className="mb-4 mt-3">
                      <h6>
                        Category:<b>{edit.editCategoryName}</b>
                      </h6>
                    </Col>
                  </Row>
                  <Button disabled={false} onClick={() => updateProduct()}>
                    Update Product
                  </Button>
                </Form>
              </div>
            ) : (
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
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productName: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col md="6">
                      <label htmlFor="feInputState">Category</label>
                      <FormSelect
                        id="feInputState"
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productCategory: e.target.value,
                          })
                        }
                      >
                        <option>Choose...</option>
                        {actualCategory.map((m) => (
                          <option>{m.name}</option>
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
                        onChange={(e) => uploadProductImage(e, "add")}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFile2"
                      >
                        Product Image...
                      </label>
                    </div>
                  </FormGroup>
                  <Button disabled={false} onClick={() => addProduct()}>
                    Add Product
                  </Button>
                </Form>
              </div>
            )}
          </Col>
          <Col md="6" sm="12" className="flex-col mt-3">
            {product.products.length !== 0 ? (
              product.products.map(
                (
                  {
                    categoryName,
                    productImageName,
                    _id,
                    productId,
                    productName,
                  },
                  index
                ) => (
                  <Card
                    small
                    className="card-post mb-2 card-post--aside card-post--1"
                  >
                    <div
                      className="card-post__image"
                      style={{
                        backgroundImage: `url('https://drive.google.com/uc?export=view&id=${productImageName}')`,
                      }}
                    >
                      <Badge pill className="card-post__category bg-info">
                        {categoryName}
                      </Badge>
                    </div>
                    <CardBody>
                      <h6 className="card-title">
                        <a className="text-fiord-blue" href="#">
                          #{index + 1}
                        </a>
                      </h6>
                      <h6 className="card-title">
                        <a className="text-fiord-blue" href="#">
                          Name: {productName}
                        </a>
                      </h6>
                      <h6 className="card-title">
                        <a className="text-fiord-blue" href="#">
                          ID: {`df${productId}`}
                        </a>
                      </h6>
                      <div className="mt-5">
                        <Button
                          onClick={() =>
                            deleteProductMethod(_id, productImageName)
                          }
                          theme="danger"
                          className="mb-2 mr-1"
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={() => editProduct(_id)}
                          theme="info"
                          className="mb-2 mr-1"
                        >
                          Edit
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                )
              )
            ) : (
              <span className="text-danger mt-5">
                <b>Select the category or Category is empty </b>
              </span>
            )}
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}
