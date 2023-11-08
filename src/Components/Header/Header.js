import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavIcon from "../../Img/icon/menu.png";
import Admin from "../../Img/icon/admin.png";

import style from "./header.module.scss";

function Header({ onOpen, openFlag }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.headerContainer}>
      <div className={style.primaryContainer}>
        <img
          onClick={() => onOpen(!openFlag)}
          className={
            window.screen.width > 430 ? style.displayNone : style.navIcon
          }
          src={NavIcon}
          alt="icon"
        />
        <h2
          className={style.companyText}
          onClick={() => navigate("/adminHome")}
        >
          DazzleFurniture World
        </h2>
      </div>
    </div>
  );
}

export default Header;
