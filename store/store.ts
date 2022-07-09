import { basketReducer } from "./reducers/basketReducer";
import { productsReducer } from "./reducers/productReducer";
import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productsPage: productsReducer,
  basketPage: basketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
