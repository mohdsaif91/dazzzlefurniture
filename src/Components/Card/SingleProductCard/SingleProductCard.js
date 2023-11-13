import React from "react";

import style from "./singleProductcard.module.scss";

function SingleProductCard({ data, topProduct = false }) {
  const { id, productName, img, price } = data;
  return (
    <div key={id} className={style.Productcard}>
      <img
        className={topProduct ? style.topProductImg : style.productImage}
        src={img}
        alt="Product Image"
      />
      <div className={style.productName}>{productName}</div>
      <div className={style.productPrice}>{price}</div>
    </div>
  );
}

export default SingleProductCard;
