import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import SidebarSearch from "../../MainSidebar/SidebarSearch";
import { isMobileWindow } from "../../../../utils/WindowSize";

export default () => (
  <Nav
    navbar
    className={`flex-row ${!isMobileWindow() ? "width-80" : "width-60"}`}
  >
    {/* <Notifications /> */}
    {/* <UserActions /> */}
    <SidebarSearch />
  </Nav>
);
