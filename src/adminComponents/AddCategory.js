import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

export default function AddCategory() {
  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col md="2" />
          <Col>
            <Form>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="categoryName">Category Name</label>
                  <FormInput
                    id="categoryName"
                    type="test"
                    placeholder="Category Name"
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
              <Button type="submit">Add Category</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}
