import React from "react";

import style from "./header.module.scss";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className={style.headerContainer}>
      <div className={style.primaryContainer}></div>
      <h2>DazzleFurniture World</h2>
    </div>
  );
}

export default Header;
