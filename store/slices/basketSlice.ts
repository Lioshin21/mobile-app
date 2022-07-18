import { IncreaseCountType } from "./../../types/basket";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState, BasketProductsType } from "../../types/basket";
import { Alert } from "react-native";

const basketSlice = createSlice({
  name: "basket",
  initialState: { products: [] } as BasketState,
  reducers: {
    moveToBasket(state, action: PayloadAction<BasketProductsType>) {
      state.products.some((el) => {
        return el.name === action.payload.name;
      })
        ? Alert.alert("Этот товар уже есть в корзине")
        : (state.products = [...state.products, action.payload]);
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      state.products = state.products.filter((el) => el.id !== action.payload);
    },
    changeCount(state, action: PayloadAction<IncreaseCountType>) {
      action.payload.type === "increase"
        ? (state.products = state.products.map((el) =>
            el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
          ))
        : (state.products = state.products.map((el) =>
            el.id === action.payload.id && el.count >= 2
              ? { ...el, count: el.count - 1 }
              : el
          ));
    },
  },
});

export const { moveToBasket, removeFromBasket, changeCount } =
  basketSlice.actions;

export default basketSlice.reducer;
