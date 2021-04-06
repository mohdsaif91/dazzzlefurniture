import React, { useState, useEffect, useContext } from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { AdminContext } from "../../../context/state/AdminState";

export default function SidebarNavItems() {
  const [items, setItem] = useState(Store.getSidebarItems());
  const [adminItems, setAdminItems] = useState(Store.getAdminNavItems());
  const { adminAccess } = useContext(AdminContext);

  useEffect(() => {
    Store.addChangeListener(onChange);
    return () => Store.addChangeListener(onChange);
  }, []);

  const onChange = () => {
    setItem({
      ...items,
      navItems: Store.getSidebarItems()
    });
  };
  // console.log(adminItems, "<>?", items, "<>? NavItems ");

  const navItem = adminAccess ? adminItems : items;

  console.log(navItem, "<>?");

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
