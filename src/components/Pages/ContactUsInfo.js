import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";
import { AdminContext } from "../../context/state/AdminState";

import { emailValidation, mobileValidation } from "../../util";

const initialStata = {
  mobileNumber: "",
  emailId: "",
  address: "",
  facebookUrl: "",
  instagramUrl: "",
  whatsAppUrl: "",
};

const initialValidation = {
  emailValid: false,
  mobileValid: false,
  address: false,
};

function ContactUsInfo() {
  const [info, setInfo] = useState({ ...initialStata });
  const [validForm, setValid] = useState({ ...initialValidation });

  const { sendBusniessInfo, getBusniessInfo, busniessInfo } =
    useContext(AdminContext);

  useEffect(() => {
    if (!busniessInfo) {
      getBusniessInfo();
    }
    if (busniessInfo) {
      setInfo(busniessInfo);
    }
  }, [busniessInfo]);

  const updateInfo = () => {
    console.log(info);
    sendBusniessInfo(info);
  };

  console.log(busniessInfo);

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Busniess Information</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <FormInput
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={info.mobileNumber}
                    onChange={(e) => {
                      setValid({
                        ...validForm,
                        mobileValid: mobileValidation(e.target.value),
                      });
                      setInfo({ ...info, mobileNumber: e.target.value });
                    }}
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={info.emailId}
                    onChange={(e) => {
                      setValid({
                        ...validForm,
                        emailValid: emailValidation(e.target.value),
                      });
                      setInfo({ ...info, emailId: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={info.address}
                  onChange={(e) => {
                    setInfo({ ...info, address: e.target.value });
                  }}
                />
              </FormGroup>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="facebookUrl">Facebook URL</label>
                  <FormInput
                    id="facebookUrl"
                    placeholder="Facebook URL"
                    value={info.facebookUrl}
                    onChange={(e) => {
                      setInfo({ ...info, facebookUrl: e.target.value });
                    }}
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="instagramUrl">Instagram URL</label>
                  <FormInput
                    type="text"
                    id="instagramUrl"
                    placeholder="Instagram URL"
                    value={info.instagramUrl}
                    onChange={(e) => {
                      setInfo({ ...info, instagramUrl: e.target.value });
                    }}
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="WhatsApp">WhatsApp Number</label>
                  <FormInput
                    type="text"
                    id="whatsApp"
                    placeholder="WhatsApp"
                    value={info.whatsAppUrl}
                    onChange={(e) => {
                      setValid({
                        ...validForm,
                        whatsAppValid: mobileValidation(e.target.value),
                      });
                      setInfo({ ...info, whatsAppUrl: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Button
                theme="accent"
                disabled={
                  !(
                    validForm.emailValid &&
                    validForm.mobileValid &&
                    info.address !== ""
                  )
                }
                onClick={() => updateInfo()}
              >
                Update Account
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default ContactUsInfo;
