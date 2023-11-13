import React from "react";

import CloseIcon from "../../Img/icon/searchClose.png";

import style from "./contactSideBarCom.module.scss";

function ContactSideBarCompo({ closeContactBar }) {
  return (
    <div className={style.contactSideBarParent}>
      <div className={style.contactSideBar}>
        <img src={CloseIcon} onClick={() => closeContactBar()} />
      </div>
    </div>
  );
}

export default ContactSideBarCompo;
