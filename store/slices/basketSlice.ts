import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BasketAction,
  BasketActionTypes,
  BasketState,
  BasketProductsType,
} from "../../types/basket";

const basketSlice = createSlice({
  name: "basket",
  initialState: {products: [] } as BasketState,
  reducers: {
    moveToBasket(state, action: PayloadAction<BasketProductsType>) {
      state.products = [...state.products, action.payload]
    }
  }
});

export const {moveToBasket} = basketSlice.actions;

export default basketSlice.reducer;

// export const basketReducer = (state = initialState, action: BasketAction) => {
//   switch (action.type) {
//     case BasketActionTypes.ADD_PRODUCT:
//       return {
//         products: [...state.products, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export const addProductAction = (product: BasketProductsType) => {
//   return {
//     type: BasketActionTypes.ADD_PRODUCT,
//     payload: product,
//   };
// };

