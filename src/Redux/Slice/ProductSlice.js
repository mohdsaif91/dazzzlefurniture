import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { apiList } from "../../util/apiList";
import { onAuthenticated } from "../../util/axios";

export const addProduct = createAsyncThunk("product/addProduct", (data) => {
  const payload = {
    url: apiList.addProduct,
    method: "post",
    data,
  };
  return onAuthenticated(payload, true);
});

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  (data) => {
    const payload = {
      url: apiList.allProducts,
      method: "get",
    };
    return onAuthenticated(payload);
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  (data) => {
    const payload = {
      url: apiList.updateProduct,
      method: "put",
      data,
    };
    return onAuthenticated(payload, true);
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  (data) => {
    const payload = {
      url: `${apiList.deleteProduct}/${data.id}/${data.imageId}`,
      method: "delete",
      data,
    };
    return onAuthenticated(payload);
  }
);

const productSlice = createSlice({
  name: "Product",
  initialState: {
    products: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      const productState = current(state);
      state.products = !productState.products
        ? payload.data
        : [...productState.products, payload.data];
      state.error = null;
      state.loading = false;
    });
    builder.addCase(addProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(addProduct.rejected, (state, { payload }) => {
      console.log(payload, " SLICE");
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getAllProduct.fulfilled, (state, { payload }) => {
      state.products = payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getAllProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      const productState = current(state);
      const updatedProductList = productState.products.map((f) => {
        if (f._id === payload.data._id) {
          return payload.data;
        } else {
          return f;
        }
      });
      state.products = updatedProductList;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(updateProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      const productState = current(state);
      const copyArray = JSON.parse(JSON.stringify(productState.products));
      const updateData = copyArray.filter((f) => f._id != payload.data);
      state.products = [...updateData];
      state.error = null;
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const ProductSlice = productSlice.reducer;
