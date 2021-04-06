import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import SidebarSearch from "../../MainSidebar/SidebarSearch";

export default () => (
  <Nav navbar className="border-left flex-row width-80">
    {/* <Notifications /> */}
    <UserActions />
    <SidebarSearch />
  </Nav>
);
