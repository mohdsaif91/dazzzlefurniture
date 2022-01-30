import React, { useContext, useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Card,
  CardBody,
  Button,
} from "shards-react";

import { AdminContext } from "../context/state/AdminState";
import PageTitle from "../components/common/PageTitle";
import infinity from "../assets/Infinity-1s-200px.svg";
import { getFormData } from "../util";

const initialData = {
  categoryImage: "",
  categoryName: "",
  createEnable: true,
};

const editData = {
  editedcategoryName: "",
  imageName: "",
  editEnable: true,
  editedImage: null,
  imageDisplay: "",
  categoryId: "",
  oldCategoryName: "",
};

const loadingData = {
  create: false,
  update: false,
};

export default function AddCategory() {
  const [categoryData, setCategory] = useState({ ...initialData });
  const [loading, setLoading] = useState({ ...loadingData });
  const [tabShow, setTabShow] = useState(false);
  const [editcategoryData, setEditCategoryData] = useState({ ...editData });
  const [actualCategory, setActualCategory] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  const {
    addMethodCategory,
    category: { category: cat },
    getCategoryCount,
    showLoading,
    updateEditCategory,
    deleteCategory,
  } = useContext(AdminContext);

  const onFileUpload = (e, type) => {
    if (type === "imageDisplay") {
      setEditCategoryData({
        ...editcategoryData,
        editedImage: e.target.files[0],
      });
    } else {
      setCategory({
        ...categoryData,
        categoryImage: e.target.files[0],
        createEnable: categoryData.categoryName === "",
      });
    }
  };

  useEffect(() => {
    setActualCategory(cat || []);
  }, []);

  useEffect(() => {
    if (searchCategory !== "") {
      let filteredArray = [];
      actualCategory.filter((f) => {
        if (f.categoryName.includes(searchCategory)) {
          filteredArray.push(f);
        }
      });
      setActualCategory(filteredArray);
    } else {
      setActualCategory(cat || []);
    }
  }, [searchCategory]);

  useEffect(() => {
    if (cat === undefined) {
      getCategoryCount();
    }
    showLoading.type === "category"
      ? setLoading({ ...loading, create: showLoading.flag })
      : setLoading({ ...loading, update: showLoading.flag });
  }, [actualCategory, showLoading]);

  const uploadFile = (e) => {
    e.preventDefault();
    const formDataKeyPair = getFormData(categoryData);
    addMethodCategory(formDataKeyPair);
  };

  const deleteCategoryMethod = (id, imageName, categoryName) => {
    deleteCategory(id, imageName, categoryName.replace(/ /g, "_"));
  };

  const editCategory = (id) => {
    setTabShow(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const edited = cat.find((f) => f._id === id);
    setEditCategoryData({
      ...editcategoryData,
      imageName: edited.imageName,
      editedcategoryName: edited.categoryName,
      editEnable: false,
      categoryId: id,
      oldCategoryName: edited.categoryName,
    });
  };

  const update = (e) => {
    e.preventDefault();
    const updatedFormPairKey = getFormData(editcategoryData);
    updateEditCategory(updatedFormPairKey);
  };

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row className="d-flex flex-row">
          <Col md="3" sm="0" />
          <Col md="6" sm="12">
            <Form className="add-new-post">
              <FormInput
                size="lg"
                className="mb-3"
                onChange={(e) => setSearchCategory(e.target.value)}
                placeholder="Search for Category"
              />
            </Form>
          </Col>
          <Col md="3" sm="0" />
          <Col md="6">
            <div className="d-flex justify-content-between mb-4">
              <Button
                disabled={!tabShow}
                theme={`${tabShow ? "primary" : "default"}`}
                className={` ${tabShow ? "btn btn-primary" : ""} mr-5 border`}
              >
                Update Category
              </Button>
              <Button
                theme={`${tabShow ? "" : "primary"}`}
                onClick={() => setTabShow(false)}
                className={`btn ${tabShow ? "" : "btn-primary"} border`}
              >
                Add Category
              </Button>
            </div>
            {tabShow ? (
              <div className="mb-5">
                <PageTitle
                  sm="4"
                  md="6"
                  title="Update Category"
                  className="text-sm-left mt-3"
                />
                <div className="form-group mt-3">
                  <label htmlFor="categoryName">Category Name</label>
                  <FormInput
                    id="categoryName"
                    type="test"
                    placeholder="Category Name"
                    value={editcategoryData.editedcategoryName}
                    onChange={(e) =>
                      setEditCategoryData({
                        ...editcategoryData,
                        editedcategoryName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="custom-file mb-3 mt-4">
                  <label className="custom-file-label" htmlFor="customFile2">
                    Category Image...
                  </label>
                  <FormInput
                    type="file"
                    className="custom-file-input"
                    id="customFile2"
                    onChange={(e) => onFileUpload(e, "imageDisplay")}
                  />
                </div>
                <Row>
                  <Col className="d-flex flex-row" sm="12" md="4">
                    <Card
                      small
                      className="card-post mb-2 card-post--aside card-post--1"
                    >
                      {editcategoryData.imageName !== "" ? (
                        <div
                          className="card-post__image"
                          style={{
                            backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${editcategoryData.imageName}')`,
                          }}
                        ></div>
                      ) : null}
                    </Card>
                  </Col>
                  <Col md="4">
                    <Button
                      type="submit"
                      disabled={editcategoryData.editEnable}
                      theme={loading.update ? "default" : "info"}
                      onClick={(e) => update(e)}
                    >
                      {loading.update ? (
                        <img
                          style={{ height: 93, width: 136 }}
                          src={infinity}
                        />
                      ) : (
                        "Update Category"
                      )}
                    </Button>
                  </Col>
                </Row>
              </div>
            ) : (
              <div className="mb-5 addProduct">
                <PageTitle
                  sm="4"
                  md="6"
                  title="Add Category"
                  className="text-sm-left"
                />
                <div className="form-group">
                  <label htmlFor="categoryName">Category Name</label>
                  <FormInput
                    id="categoryName"
                    type="test"
                    placeholder="Category Name"
                    onChange={(e) =>
                      setCategory({
                        ...categoryData,
                        categoryName: e.target.value,
                        createEnable: categoryData.categoryImage === null,
                      })
                    }
                  />
                </div>
                <div className="custom-file mb-3 mt-4">
                  <label className="custom-file-label" htmlFor="customFile2">
                    Category Image...
                  </label>
                  <FormInput
                    type="file"
                    className="custom-file-input"
                    id="customFile2"
                    onChange={(e) => onFileUpload(e, "categoryImage")}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={categoryData.createEnable}
                  theme={loading.create ? "default" : "primary"}
                  onClick={(e) => uploadFile(e)}
                >
                  {loading.create ? (
                    <img style={{ height: 93, width: 136 }} src={infinity} />
                  ) : (
                    "Add Category"
                  )}
                </Button>
              </div>
            )}
          </Col>
          <Col md="6">
            {actualCategory.map(({ imageName, _id, categoryName }, index) => (
              <Card
                small
                className="card-post mb-2 card-post--aside card-post--1"
              >
                <div
                  className="card-post__image"
                  style={{
                    backgroundImage: `url('https://dazzlefurnitureworld.s3.ap-south-1.amazonaws.com/category/${imageName}')`,
                  }}
                ></div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {categoryName} #{index + 1}
                    </a>
                  </h5>
                  <div className="mt-5">
                    <Button
                      onClick={() =>
                        deleteCategoryMethod(_id, imageName, categoryName)
                      }
                      theme="danger"
                      className="mb-2 mr-1"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => editCategory(_id)}
                      theme="info"
                      className="mb-2 mr-1"
                    >
                      Edit
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}
