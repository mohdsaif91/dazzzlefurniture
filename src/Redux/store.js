import { configureStore } from "@reduxjs/toolkit";

import { CategoryReducer } from "../Redux/Slice/CategorySlice";
import { ProductSlice } from "./Slice/ProductSlice";

const reducer = {
  category: CategoryReducer,
  product: ProductSlice,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
