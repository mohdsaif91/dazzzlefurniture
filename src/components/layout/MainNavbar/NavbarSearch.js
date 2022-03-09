import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavbarBrand,
} from "shards-react";

import { AdminContext } from "../../../context/state/AdminState";
import { isMobileWindow } from "../../../utils/WindowSize";
import PageItem from "./NavbarNav/PageItem";

export default () => {
  const { adminAccess } = useContext(AdminContext);

  const nav_Class = !isMobileWindow() ? "ml-4 mr-4" : "ml-3 mr-3";
  const history = useHistory();

  const showLogin = () => {
    history.push("/signIn");
  };

  return (
    <div className="m-navbar-container">
      <NavbarBrand className="mr-0" style={{ lineHeight: "25px" }}>
        <div className={`d-table  ${nav_Class}`}>
          <img
            id="main-logo"
            className="d-inline-block align-top mr-1"
            style={{ maxWidth: "25px" }}
            src={require("../../../images/shards-dashboards-logo.svg")}
            alt="Dazzle Furnitures"
            onClick={() => showLogin()}
          />
          {!isMobileWindow() && (
            <span className="d-md-inline ml-1 logo-name">
              Dazzle Furnitures
            </span>
          )}
        </div>
      </NavbarBrand>
      {/* eslint-disable-next-line */}
      {!isMobileWindow() && (
        <a
          className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          // onClick={this.handleToggleSidebar}
        >
          <i className="material-icons">&#xE5C4;</i>
        </a>
      )}
      {adminAccess.login ? null : (
        <>
          <Form className="main-navbar__search d-none d-md-flex d-lg-flex">
            <InputGroup seamless className="ml-3">
              <InputGroupAddon className="" type="prepend">
                <InputGroupText>
                  <i className="material-icons">search</i>
                </InputGroupText>
              </InputGroupAddon>
              <input
                type="text"
                className="navbar-search pl-4"
                placeholder="Search on Dazzle..."
              />
            </InputGroup>
          </Form>
          {!isMobileWindow() && <PageItem />}
        </>
      )}
    </div>
  );
};
