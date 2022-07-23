import { SetCount } from "./../../types/basket";
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
    setCount(state, action: PayloadAction<SetCount>) {
      state.products = state.products.map((el) =>
        el.id === action.payload.id
          ? { ...el, count: action.payload.count,  }
          : el
      );
    },
  },
});

export const { moveToBasket, removeFromBasket, setCount } = basketSlice.actions;

export default basketSlice.reducer;
