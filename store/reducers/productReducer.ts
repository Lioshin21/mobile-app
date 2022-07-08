import { GetProductsAction, ActionTypes } from "./../../types/types";
import { ProductsState } from "../../types/types";

const initialState: ProductsState = {
  products: [],
};

export const productsReducer = (
  state = initialState,
  action: GetProductsAction
) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        products: [...action.payload]
      };
    default:
      return state;
  }
};

export const getProductsAction = (products: any[]) => {
  return {
    type: ActionTypes.GET_PRODUCTS, payload: products
  }
}