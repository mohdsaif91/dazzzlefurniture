import React, { createContext, useReducer } from "react";
import CategoryReducer from "../reducers/CategoryReducer";

import { AddCategory } from "../../api";

const initialState = {
  addedCategory: false,
};

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  const addMethodCategory = async (data) => {};

  return (
    <CategoryContext.Provider value={{ category: state, addMethodCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
