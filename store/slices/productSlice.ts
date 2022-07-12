import { getProductsAPI } from "../../api/api";
import {
  ProductsState,
  ProductsType,
} from "../../types/product";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const payload: ProductsType[] = await getProductsAPI.then((response) => response.data);
    return (payload)
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

// const basketSlice = createSlice({
//   name: "basket",
//   initialState: {products: [] } as BasketState,
//   reducers: {
//     moveToBasket(state, action: PayloadAction<BasketProductsType>) {
//       state.products = [...state.products, action.payload]
//     }
//   }
// });

// export const productsReducer = (
//   state = initialState,
//   action: GetProductsAction
// ) => {
//   switch (action.type) {
//     case ProductsActionTypes.GET_PRODUCTS:
//       return {
//         products: [...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// const getProductsAC = (products: ProductsType[]) => ({
//   type: ProductsActionTypes.GET_PRODUCTS,
//   payload: products,
// });

// // Thunk, которая делает запрос на сервер
// // export const getProductsAPI = axios.get(baseUrl + "products"); - это адресс, на который сделан запрос

// export const getProducts = () => {
//   return (dispatch: Dispatch<GetProductsAction>) => {
//     getProductsAPI.then((response) => dispatch(getProductsAC(response.data)));
//   };
// };
