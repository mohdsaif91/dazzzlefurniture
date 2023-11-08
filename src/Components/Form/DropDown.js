import React from "react";

import style from "./dropdown.module.scss";

function DropDown({ options = [], setCategory, defaultSelected }) {
  return (
    <select
      className={style.dropdownn}
      defaultValue={defaultSelected}
      onChange={(e) => setCategory(e.target.value)}
      placeholder="No Data selected"
    >
      {options.map((m) => (
        <option value={m}>{m}</option>
      ))}
    </select>
  );
}

export default DropDown;
