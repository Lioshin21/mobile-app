import {
  BasketAction,
  BasketProductsActionTypes,
  BasketState,
  BasketProductsType,
} from "./../../types/basket";

const initialState: BasketState = {
  products: [],
};

export const basketReducer = (state = initialState, action: BasketAction) => {
  switch (action.type) {
    case BasketProductsActionTypes.ADD_PRODUCT:
      return {
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

export const addProductAction = (product: BasketProductsType) => {
  return {
    type: BasketProductsActionTypes.ADD_PRODUCT,
    payload: product,
  };
};
