import React, { useContext, useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Card,
  CardBody,
  CardHeader,
  Button,
  CardFooter,
  Badge
} from "shards-react";
import FormData from "form-data";

import { AdminContext } from "../context/state/AdminState";
import PageTitle from "../components/common/PageTitle";

const initialData = {
  categoryImage: "",
  categoryName: ""
};

const editData = {
  editedcategoryName: "",
  imageName: "",
  editEnable: true,
  editedImage: null,
  imageDisplay: ""
};

export default function AddCategory() {
  const [categoryData, setCategory] = useState({ ...initialData });
  const [loading, setLoading] = useState(false);
  const [editcategoryData, setEditCategoryData] = useState({ ...editData });

  const {
    addMethodCategory,
    category: { category },
    getCategoryCount,
    showLoading,
    updateEditCategory
  } = useContext(AdminContext);

  const onFileUpload = (e, type) => {
    if (type === "imageDisplay") {
      setEditCategoryData({
        ...editcategoryData,
        editedImage: e.target.files[0]
      });
    } else {
      setCategory({ ...categoryData, categoryImage: e.target.files[0] });
    }
  };

  useEffect(() => {
    if (category === undefined) {
      getCategoryCount();
    }
    showLoading ? setLoading(true) : setLoading(false);
  }, [category, showLoading]);

  const getFormData = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return formData;
  };

  const uploadFile = e => {
    e.preventDefault();
    const formDataKeyPair = getFormData(categoryData);
    addMethodCategory(formDataKeyPair);
  };

  const deleteCategory = id => {};

  const editCategory = id => {
    const edited = category.find(f => f._id === id);
    setEditCategoryData({
      ...editcategoryData,
      imageName: edited.imageName,
      editedcategoryName: edited.categoryName,
      editEnable: false
    });
  };

  const update = e => {
    e.preventDefault();

    const updatedFormPairKey = getFormData(editcategoryData);
    console.log(editcategoryData, "<>?");
    updateEditCategory(updatedFormPairKey);
  };

  const actualCategory = category === undefined ? [] : category;
  // console.log(editcategoryData, "<>?");
  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row className="d-flex flex-row">
          <Col md="6">
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
                onChange={e =>
                  setCategory({
                    ...category,
                    categoryName: e.target.value
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
                onChange={e => onFileUpload(e, "categoryImage")}
              />
            </div>
            <Button
              type="submit"
              theme={loading ? "default" : "primary"}
              onClick={e => uploadFile(e)}
            >
              {loading ? (
                <img
                  className="loading-image"
                  src="https://www.mybloggerguides.com/wp-content/uploads/2016/07/Loading5.gif"
                />
              ) : (
                "Add Category"
              )}
            </Button>
            <div>
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
                  onChange={e =>
                    setEditCategoryData({
                      ...editcategoryData,
                      editedcategoryName: e.target.value
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
                  onChange={e => onFileUpload(e, "imageDisplay")}
                />
              </div>
              <Row>
                <Col sm="12" md="4">
                  <Card
                    small
                    className="card-post mb-2 card-post--aside card-post--1"
                  >
                    <div
                      className="card-post__image"
                      style={{
                        backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${editcategoryData.imageName}')`
                      }}
                    ></div>
                  </Card>
                </Col>
                <Col className="mt-5">
                  <Button
                    type="submit"
                    disabled={editcategoryData.editEnable}
                    theme="info"
                    onClick={e => update(e)}
                  >
                    Update Category
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="6">
            {actualCategory.map((m, index) => (
              <Card
                small
                className="card-post mb-2 card-post--aside card-post--1"
              >
                <div
                  className="card-post__image"
                  style={{
                    backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${m.imageName}')`
                  }}
                ></div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {m.categoryName} #{index + 1}
                    </a>
                  </h5>
                  <div className="mt-5">
                    <Button
                      onClick={() => deleteCategory(m._id)}
                      theme="danger"
                      className="mb-2 mr-1"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => editCategory(m._id)}
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
