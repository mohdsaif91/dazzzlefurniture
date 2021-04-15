import React, { useState, useEffect, useContext } from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { AdminContext } from "../../../context/state/AdminState";

export default function SidebarNavItems() {
  const [items, setItem] = useState(Store.getSidebarItems());
  const [adminItems, setAdminItems] = useState(Store.getAdminNavItems());
  const {
    adminAccess,
    adminLogOut,
    getCategoryCount,
    refreshLogin
  } = useContext(AdminContext);

  useEffect(() => {
    Store.addChangeListener(onChange);
    console.log(window.location.href.split("/").pop(), "<>? URL");
    if (window.location.href.split("/").pop() === "admin") {
      refreshLogin();
    }
    return () => Store.addChangeListener(onChange);
  }, [adminAccess.login]);

  const onChange = () => {
    setItem({
      ...items,
      navItems: Store.getSidebarItems()
    });
  };

  const navItem = adminAccess.login ? adminItems : items;

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {navItem.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
    </div>
  );
}
