import { getProductsAPI } from "../../api/api";
import {
  ProductsState,
  ProductsType,
} from "../../types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk<ProductsType[]>(
  "products/fetchProducts",
  async () => {
    const payload = await getProductsAPI.then((response) => response.data);
    return payload
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  } as ProductsState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload]
    })
  },
});

export default productsSlice.reducer;