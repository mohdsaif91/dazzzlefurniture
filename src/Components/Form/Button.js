import React from "react";

import style from "./button.module.scss";

function Button({ text, onClick, className }) {
  return (
    <button className={`${style.btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
