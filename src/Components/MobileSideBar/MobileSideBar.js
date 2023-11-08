import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import closeIcon from "../../Img/icon/close.png";
import { adminRoutes } from "../../util/adminRoutes";

import style from "./mobileSidebar.module.scss";

function MobileSideBar({ onClose, openFlag }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={style.mobileSideBar}>
      <div className={style.sideBarHeader}>
        <img
          src={closeIcon}
          alt="icon"
          className={style.closeIcon}
          onClick={() => onClose(!openFlag)}
        />
        <h2 className={style.navTitle}>Dazzle Furniture</h2>
      </div>
      <ul className={style.listContainer}>
        {adminRoutes.map((m) => (
          <li
            onClick={() => {
              navigate(m.path);
              onClose(false);
            }}
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

export default MobileSideBar;
