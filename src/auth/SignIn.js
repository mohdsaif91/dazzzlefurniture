import React, { useContext, useState, useEffect } from "react";
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

const initialData = {
  userName: "",
  password: ""
};
export default function SignIn() {
  const [login, setLogin] = useState({ ...initialData });
  const [auth, setAuth] = useState(false);
  const history = useHistory();
  const { adminAccess, adminLogin } = useContext(AdminContext);

  useEffect(() => {
    console.log(adminAccess);
    if (adminAccess.login && adminAccess.message === "loginSucessfull") {
      history.push("/adminHome/admin");
    } else if (adminAccess.message === "loginFailed" && !adminAccess.login) {
      setAuth(true);
    }
  }, [adminAccess.login]);

  const authLogiIn = () => {
    adminLogin(login);
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
                  <FormInput
                    placeholder="Username"
                    placeholder="User name"
                    onChange={e =>
                      setLogin({ ...login, userName: e.target.value })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="password"
                  placeholder="Password"
                  onChange={e =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                {auth && (
                  <h6
                    style={{ textAlign: "center" }}
                    className="card-title text-danger pt-3"
                  >
                    Incorrect username or password
                  </h6>
                )}
              </FormGroup>
              <ListGroupItem className="d-flex px-3 border-0">
                <Button theme="accent" size="md" onClick={() => authLogiIn()}>
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
