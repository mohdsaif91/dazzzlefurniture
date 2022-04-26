import React from "react";
import { Form, FormGroup, FormInput, InputGroup } from "shards-react";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-hero">
        <div className="h1-title">Let’s Start a Conversation</div>
      </div>
      <div className="above-main-contact-us">
        <div className="main-text-contact">Contact Us</div>
        <div className="sub-text-contact">
          Any Question or Remarks? Just write us message!
        </div>
      </div>
      <div className="main-contact-us">
        <div className="pallet">
          <div className="">Contact Information</div>
          <div className="sub-text">
            Fill in the form our team will get back to you in 24 hours
          </div>
        </div>
        <div className="contact-us-form">
          <div className="form-control">
            <Form>
              <FormGroup>
                <InputGroup className="mb-3">
                  <FormInput
                    placeholder="Username"
                    // onChange={(e) =>

                    // }
                  />
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
