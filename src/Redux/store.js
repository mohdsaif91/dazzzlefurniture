import { configureStore } from "@reduxjs/toolkit";

import { CategoryReducer } from "../Redux/Slice/CategorySlice";

const reducer = {
  category: CategoryReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
