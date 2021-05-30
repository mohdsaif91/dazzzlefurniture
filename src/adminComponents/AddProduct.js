import React from "react";

import AddProductComponent from "./AddProductComponent";
import { ProductProvider } from "../context/state/ProductState";

export default function AddProduct() {
  return (
    // <ProductProvider>
    <AddProductComponent />
    // </ProductProvider>
  );
}
