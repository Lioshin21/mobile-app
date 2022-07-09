import { getProductsAPI } from "./../../api/api";
import { Dispatch } from "react";
import {
  ProductsActionTypes,
  ProductsState,
  GetProductsAction,
  ProductsType,
} from "./../../types/product";

const initialState: ProductsState = {
  products: [],
};

export const productsReducer = (
  state = initialState,
  action: GetProductsAction
) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        products: [...action.payload],
      };
    default:
      return state;
  }
};

const getProductsAC = (products: ProductsType[]) => ({
  type: ProductsActionTypes.GET_PRODUCTS,
  payload: products 
})

// Thunk, которая делает запрос на сервер
// export const getProductsAPI = axios.get(baseUrl + "products"); - это адресс, на который сделан запрос

export const getProducts = () => {
  return (dispatch: Dispatch<GetProductsAction>) => {
    getProductsAPI.then((response) => dispatch(getProductsAC(response.data))
    );
  };
};
