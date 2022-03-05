import React from "react";
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "shards-react";
import { isMobileWindow } from "../../../utils/WindowSize";

export default () => (
  <Form
    className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
    style={{ display: "flex", minHeight: "45px" }}
  >
    {!isMobileWindow ? (
      <InputGroup seamless className="ml-3">
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <i className="material-icons">search</i>
          </InputGroupText>
          {/* <input
            type="text"
            className="navbar-search pl-4"
            placeholder="Search on Dazzle..."
          /> */}
        </InputGroupAddon>
      </InputGroup>
    ) : (
      <input
        type="text"
        className="navbar-search pl-4"
        placeholder="Search on Dazzle ..."
      />
    )}
  </Form>
);
