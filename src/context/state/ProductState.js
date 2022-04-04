import React, { createContext, useContext, useReducer } from "react";

import {
  getProductSucessfull,
  deleteSucessfullProduct,
  deleteUnsucessfull,
  addProductSucess,
  getProductUnSucessfull,
  updateProductSucess,
  updateProductUnSucess,
  gotProductIdSucessfull,
  gotProductIdUnSucessfull,
  addProductFail,
  gotRandomProductSucessfull,
  gotRandomProductUnSucessfull,
  getProductByIdSuccessful,
  getProductByIdUnSuccessful,
  reSetSingleProduct,
} from "../actions/addProductAction";
import {
  addProductApi,
  getProductApi,
  deleteProductApi,
  updateProductApi,
  getProductLatestIdApi,
  getRandomProductAPI,
  getProductByIdAPI,
  getAllProductAPI,
} from "../../api";
import ProductReducer from "../reducers/ProductReducer";
import { LoadingContex } from "./LoadingState";

const initialProductState = {
  allProduct: null,
  productCount: 0,
  lastObjectCount: null,
};

export const ProductContext = createContext(initialProductState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialProductState);
  const { startLoadingMeth, stopLoadingMeth } = useContext(LoadingContex);

  const getAllProduct = async () => {
    startLoadingMeth();
    await getAllProductAPI()
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          console.log(res.data, " API Data");
          dispatch(getProductSucessfull(res.data));
        } else {
          dispatch(getProductUnSucessfull(res.data));
        }
      })
      .catch((err) => {
        stopLoadingMeth();
        dispatch(getProductUnSucessfull(err.response.message));
      });
  };

  const getRandomProductState = async () => {
    startLoadingMeth();
    await getRandomProductAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(gotRandomProductSucessfull());
        }
      })
      .catch((err) => dispatch(gotRandomProductUnSucessfull(err)));
  };

  const getProductState = async (category) => {
    startLoadingMeth();
    await getProductApi(category)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          console.log(res.data, " API Data");
          dispatch(getProductSucessfull(res.data));
        } else {
          dispatch(getProductUnSucessfull(res.data));
        }
      })
      .catch((err) => {
        dispatch(getProductUnSucessfull(err));
      });
  };

  const addProductState = async (product) => {
    startLoadingMeth();
    // dispatch(startLoading());
    await addProductApi(product)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 201) {
          dispatch(addProductSucess(res.data));
        }
      })
      .catch((err) => {
        stopLoadingMeth();
        dispatch(addProductFail(err));
      });
  };

  const deleteProduct = async (id, imageName) => {
    // dispatch(startLoading());
    startLoadingMeth();
    await deleteProductApi(id, imageName)
      .then((res) => {
        stopLoadingMeth();
        // dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(deleteSucessfullProduct(res.data));
        }
      })
      .catch((err) => dispatch(deleteUnsucessfull(err)));
  };

  const updateProductState = async (updatedData) => {
    startLoadingMeth();
    await updateProductApi(updatedData)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 201) {
          dispatch(updateProductSucess(res.data));
        } else {
          dispatch(updateProductUnSucess(res.data));
        }
      })
      .catch((err) => dispatch(updateProductUnSucess(err)));
  };

  const getLatestProductId = async () => {
    startLoadingMeth();
    await getProductLatestIdApi()
      .then((res) => {
        stopLoadingMeth();
        dispatch(gotProductIdSucessfull(res.data));
      })
      .catch((err) => {
        dispatch(gotProductIdUnSucessfull(err));
      });
  };

  const getProductById = async (id) => {
    startLoadingMeth();
    await getProductByIdAPI(id)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          dispatch(getProductByIdSuccessful(res.data));
        } else {
          dispatch(getProductByIdUnSuccessful());
        }
      })
      .catch((err) => {
        stopLoadingMeth();
        dispatch(getProductByIdUnSuccessful(err));
      });
  };

  const doNotCallAgain = () => {
    dispatch(reSetSingleProduct());
  };

  return (
    <ProductContext.Provider
      value={{
        allProduct: state.allProduct,
        error: state.error,
        showLoading: state.showLoading,
        lastObjectCount: state.lastObjectCount,
        gotHotProduct: state.gotHotProduct,
        resetFlag: state.resetFlag,
        getProductById,
        getProductState,
        addProductState,
        deleteProduct,
        doNotCallAgain,
        updateProductState,
        getLatestProductId,
        getRandomProductState,
        getAllProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
