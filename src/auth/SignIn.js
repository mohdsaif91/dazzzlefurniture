import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormInput,
  InputGroup,
  Button
} from "shards-react";

import { AdminContext } from "../context/state/AdminState";

export default function SignIn() {
  const history = useHistory();
  //
  const { adminAccess, adminLogin } = useContext(AdminContext);
  const logiIn = () => {
    // console.log(ad, "<>?");
    adminLogin();
    history.push("/adminHome");
  };

  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <h4 className="mb-0">Sign In</h4>
      </CardHeader>
      <ListGroup className="m-5" flush>
        <Row>
          <Col md="3" sm="5"></Col>
          <Col md="6">
            <Form>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput placeholder="Username" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="password"
                  placeholder="Password"
                  onChange={() => {}}
                />
              </FormGroup>
              <ListGroupItem className="d-flex px-3 border-0">
                <Button theme="accent" size="md" onClick={() => logiIn()}>
                  <i className="material-icons">login</i> Log in
                </Button>
                <Button outline theme="danger" size="md" className="ml-auto">
                  <i className="material-icons">file_copy</i> forget password
                </Button>
              </ListGroupItem>
            </Form>
          </Col>
          <Col md="3" sm="5"></Col>
        </Row>
      </ListGroup>
    </Card>
  );
}
