import React, { useState, useEffect, useContext } from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { AdminContext } from "../../../context/state/AdminState";

export default function SidebarNavItems() {
  const [items, setItem] = useState(Store.getSidebarItems());
  const [adminItems] = useState(Store.getAdminNavItems());
  const { adminAccess, refreshLogin } = useContext(AdminContext);

  useEffect(() => {
    Store.addChangeListener(onChange);
    if (
      window.location.href.split("/").pop() === "admin" &&
      sessionStorage.getItem("adminAccess")
    ) {
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

  const navItem = adminAccess.login
    ? adminItems
    : Array.isArray(items)
    ? items
    : items.navItems;

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
