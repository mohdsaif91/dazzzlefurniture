import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { apiList } from "../../util/apiList";
import { onAuthenticated } from "../../util/axios";

export const addCategory = createAsyncThunk("category/addCategory", (data) => {
  const payload = {
    url: apiList.createCategory,
    method: "post",
    data: data,
  };
  return onAuthenticated(payload, true)
    .then((res) => res)
    .catch((err) => err);
});

export const getCategory = createAsyncThunk("category/getCategory", () => {
  const payload = {
    url: apiList.getCategory,
    method: "get",
  };
  return onAuthenticated(payload);
});

export const getCategoryName = createAsyncThunk(
  "category/getCategoryName",
  () => {
    const payload = {
      url: apiList.getCategoryName,
      method: "get",
    };
    return onAuthenticated(payload);
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  (data) => {
    const payload = {
      url: apiList.updateCatgory,
      method: "patch",
      data,
    };
    return onAuthenticated(payload, true);
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  (data) => {
    console.log(data, "<> ");
    const payload = {
      url: apiList.deleteCategory,
      method: "delete",
      data,
    };
    return onAuthenticated(payload);
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: null,
    error: null,
    loading: false,
    categoryName: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory.fulfilled, (state, { payload }) => {
      const currentCategoryState = current(state);
      state.category =
        currentCategoryState.category.length === 0
          ? [payload.data]
          : [...currentCategoryState.category, payload.data];
    });
    builder.addCase(addCategory.rejected, (state, { payload }) => {
      console.log(payload);
      state.error = payload;
    });
    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.category = payload.data;
      state.loading = false;
    });
    builder.addCase(getCategory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(getCategoryName.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.categoryName = payload.data;
      state.loading = false;
    });
    builder.addCase(getCategoryName.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    // getCategoryName
  },
});

export const CategoryReducer = categorySlice.reducer;
