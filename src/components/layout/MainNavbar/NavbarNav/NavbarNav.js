import React, { useContext } from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import SidebarSearch from "../../MainSidebar/SidebarSearch";
import { isMobileWindow } from "../../../../utils/WindowSize";
import Logout from "../../../../images/logout.png";
import { AdminContext } from "../../../../context/state/AdminState";
import { useHistory } from "react-router-dom";

export default () => {
  const { adminLogOut } = useContext(AdminContext);
  const history = useHistory();

  const logout = () => {
    adminLogOut();
    history.push("/");
  };
  return (
    <Nav
      navbar
      className={`flex-row ${
        !isMobileWindow()
          ? "width-80"
          : sessionStorage.getItem("adminAccess") === "true"
          ? "no-width"
          : "width-60"
      }`}
    >
      {/* <Notifications /> */}
      {/* <UserActions /> */}
      {!isMobileWindow() && sessionStorage.getItem("adminAccess") === "true" && (
        <div className="d-flex logout-icon">
          <img onClick={() => logout()} className="icon" src={Logout} />
        </div>
      )}
      {sessionStorage.getItem("adminAccess") !== "true" && <SidebarSearch />}
    </Nav>
  );
};
