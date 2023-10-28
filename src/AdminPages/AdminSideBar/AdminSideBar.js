import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import style from "./adminSideBar.module.scss";
import { adminRoutes } from "../../util/adminRoutes";

function AdminSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={style.adminSideBarContainer}>
      <ul className={style.listContainer}>
        {adminRoutes.map((m) => (
          <li
            onClick={() => navigate(m.path)}
            className={`${style.listItem} ${
              location.pathname === m.path && style.active
            }`}
            key={m.id}
          >
            {m.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSideBar;
