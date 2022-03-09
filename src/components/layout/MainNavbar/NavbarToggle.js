import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AdminContext } from "../../../context/state/AdminState";

import { Dispatcher, Constants } from "../../../flux";
import Logout from "../../../images/logout.png";

function NavbarToggle() {
  const history = useHistory();
  const { adminLogOut } = useContext(AdminContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    });
  };

  const logoutAdmin = () => {
    adminLogOut();
    history.push("/");
  };

  return (
    <nav className="nav">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href=""
        onClick={(e) => handleClick(e)}
        className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
      >
        <i className="material-icons">&#xE5D2;</i>
      </a>
      {sessionStorage.getItem("adminAccess") === "true" && (
        <img src={Logout} onClick={() => logoutAdmin()} />
      )}
    </nav>
  );
}

export default NavbarToggle;
