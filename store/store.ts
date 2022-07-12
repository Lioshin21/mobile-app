import { useDispatch } from 'react-redux';
import  basketSlice  from "./slices/basketSlice";
import  productsSlice  from "./slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers } from "redux";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    products: productsSlice
  },
  middleware: [thunk],
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;