import React, { createContext, useReducer } from "react";

import LoadingReducer from "../reducers/LoadingReducer";
import { startLoading, stopLoading } from "../actions/LoadingAction";

const initialLoadingState = {
  showLoading: false
};

export const LoadingContex = createContext(initialLoadingState);

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoadingReducer, initialLoadingState);

  const startLoadingMeth = () => {
    dispatch(startLoading());
  };

  const stopLoadingMeth = () => {
    dispatch(stopLoading());
  };
  return (
    <LoadingContex.Provider
      value={{
        showLoading: state.showLoading,
        startLoadingMeth,
        stopLoadingMeth
      }}
    >
      {children}
    </LoadingContex.Provider>
  );
};
