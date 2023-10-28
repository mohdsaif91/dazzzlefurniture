import React from "react";

import style from "./formImageUpload.module.scss";

function FormImageUpload({ onChange, name, accept }) {
  return (
    <div className={style.ImageUpload}>
      <input
        accept={accept}
        className={style.inputFileUpload}
        type="file"
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default FormImageUpload;
