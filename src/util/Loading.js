import React from "react";

import globalStyle from "../global.module.scss";

function Loading() {
  return (
    <div className={globalStyle.loadingContainer}>
      <div className={globalStyle.ringContainer}>
        <div className={globalStyle.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
