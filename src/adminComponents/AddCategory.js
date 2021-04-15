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
  Button
} from "shards-react";
import FormData from "form-data";

import { AdminContext } from "../context/state/AdminState";

const initialData = {
  categoryImage: "",
  categoryName: ""
};

export default function AddCategory() {
  const [categoryData, setCategory] = useState({ ...initialData });

  const {
    addMethodCategory,
    category: { category },
    getCategoryCount
  } = useContext(AdminContext);

  const onFileUpload = e => {
    setCategory({ ...categoryData, categoryImage: e.target.files[0] });
  };

  useEffect(() => {
    if (category === undefined) {
      getCategoryCount();
    }
  }, [category]);

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

  const editCategory = id => {};

  const actualCategory = category === undefined ? [] : category;

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col md="7" sm="12">
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">All Categories</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                            #
                          </th>
                          <th scope="col" className="border-0">
                            ID
                          </th>
                          <th scope="col" className="border-0">
                            Category Name
                          </th>
                          <th scope="col" className="border-0">
                            Image
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {actualCategory.map((m, index) => (
                          <tr key={m._id}>
                            <td>
                              <div className="d-flex flex-column ">
                                {index + 1}

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
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ">{m._id}</div>
                            </td>
                            <td>{m.categoryName}</td>
                            <td>
                              <div
                                className="card-post__image"
                                style={{
                                  backgroundImage: `url('http://dazzlefurniture.s3.ap-south-1.amazonaws.com/categories/${m.imageName}')`
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md="5" sm="12">
            <Form>
              <Row form>
                <Col md="6" className="form-group">
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
                </Col>
              </Row>
              <FormGroup>
                <Row form>
                  <Col md="6" className="form-group">
                    <div className="custom-file mb-3 mt-4">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile2"
                        onChange={e => onFileUpload(e)}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFile2"
                      >
                        Category Image...
                      </label>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
              <Button type="submit" onClick={e => uploadFile(e)}>
                Add Category
              </Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}
