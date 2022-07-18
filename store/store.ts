import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  basketSlice  from "./slices/basketSlice";
import  productsSlice  from "./slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    products: productsSlice
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;