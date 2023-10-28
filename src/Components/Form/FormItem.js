import React from "react";

import globalStyle from "../../global.module.scss";
import style from "./formItem.module.scss";

function FormItem({ label, onChange, name, value }) {
  return (
    <div className={style.formItemContainer}>
      <div className={style.labelContainer}>
        <label className={style.formLabel}>{label}</label>
      </div>
      <input
        type="input"
        value={value}
        name={name}
        className={`${style.formInput} ${globalStyle.input}`}
        onChange={onChange}
      />
    </div>
  );
}

export default FormItem;
