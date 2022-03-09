import React, { useContext, useState } from "react";
import { Col, FormSelect, Row } from "shards-react";

import { AdminContext } from "../context/state/AdminState";

function ProductFilter() {
  const [categoryName, setCategoryName] = useState("Choose category...");
  const {
    category: { category },
    categoryCount,
    getCategoryCount,
    getAdminProduct,
  } = useContext(AdminContext);

  const actualCategory = categoryCount === undefined ? [] : categoryCount;

  const getProductFromCategory = (category) => {
    console.log(category);
    getAdminProduct(category);
  };

  return (
    <Col md="4" lg="8" className="form-group">
      <label htmlFor="feInputState">Category List</label>
      <FormSelect
        id="feInputState"
        onChange={(e) => getProductFromCategory(e.target.value)}
      >
        {actualCategory.map((m) => (
          <option
            value={m.name}
            className="d-flex justify-content-around category-name"
          >
            {m.name}
          </option>
        ))}
      </FormSelect>
    </Col>
  );
}

export default ProductFilter;
