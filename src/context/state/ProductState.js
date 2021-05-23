import React, { createContext, useReducer } from "react";

import ProductReducer from "../reducers/ProductReducer";
import {
  getProductSucessfull,
  deleteProduct,
  addProductSucess
} from "../actions/addProductAction";
import { addProductApi, getProductApi } from "../../api";
import { startLoading, stopLoading } from "../actions/adminActions";

const initialProductState = {
  // allProduct: null,
  productCount: 0
};

export const ProductContext = createContext(initialProductState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialProductState);

  const getProductState = async () => {
    dispatch(startLoading());
    await getProductApi().then(res => {
      if (res.status === 200) {
        dispatch(getProductSucessfull(res.data));
      }
    });
  };

  const addProductState = async product => {
    dispatch(startLoading());
    await addProductApi(product).then(res => {
      dispatch(stopLoading());
      if (res.status === 201) {
        dispatch(addProductSucess(res.data));
      }
    });
  };

  console.log(state, "?><");
  return (
    <ProductContext.Provider
      value={{ allProduct: state.allProduct, getProductState, addProductState }}
    >
      {children}
    </ProductContext.Provider>
  );
};
