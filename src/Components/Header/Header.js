import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavIcon from "../../Img/icon/menu.png";
import Search from "../../Img/icon/search.png";
import closeIcon from "../../Img/icon/searchClose.png";
import { useDebounce } from "../../util/util";

import style from "./header.module.scss";

function Header({ onOpen, openFlag, onOpenContact, openContactBar }) {
  const [openSearchContainer, setOpenSearchContainer] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const debounceValue = useDebounce(inputValue, 800);

  useEffect(() => {
    console.log(debounceValue, "<>?");
    if (debounceValue !== "" && debounceValue) {
      setOpenSearchContainer(false);
    }
  }, [debounceValue]);

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
      <div className={style.linkContainer}>
        <div
          className={`${style.linkItme} ${
            location.pathname === "/" && style.active
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className={`${style.linkItme} ${
            location.pathname === "/shop" && style.active
          }`}
          onClick={() => navigate("/shop")}
        >
          Shop
        </div>
        <div
          className={`${style.linkItme} ${
            location.pathname === "/Category" && style.active
          }`}
          onClick={() => navigate("/Category")}
        >
          Category
        </div>
        <div
          className={`${style.linkItme} ${
            location.pathname === "/about" && style.active
          }`}
          onClick={() => navigate("/about")}
        >
          About
        </div>
      </div>
      <div className={style.searchContainer}>
        <img
          src={Search}
          onClick={() => setOpenSearchContainer(true)}
          className={style.searchIcon}
          alt="search icon"
        />
        <div
          className={style.navLines}
          onClick={() => onOpenContact(!openContactBar)}
        >
          <div className={style.lineOne} />
          <div className={style.lineTwo} />
          <div className={style.lineThree} />
        </div>
      </div>
      {openSearchContainer && (
        <div className={style.searchContainerMain}>
          <div className={style.iconContainer}>
            <img
              src={closeIcon}
              alt="close icon"
              className={style.closedIcon}
              onClick={() => {
                setInputValue("");
                setOpenSearchContainer(false);
              }}
            />
          </div>
          <div className={style.mainContainer}>
            <input
              placeholder="Search here...."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={style.searchInput}
            />
            <img
              src={Search}
              alt="search icon"
              className={style.searchIconInput}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
