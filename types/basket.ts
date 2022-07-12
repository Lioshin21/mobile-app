export enum BasketActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export interface BasketProductsType {
  id: number;
  colour: string;
  img: string;
  name: string;
  price: number;
  count: number;
}

export interface BasketState {
  products: BasketProductsType[];
}

export interface AddProductAction {
  // type: BasketActionTypes.ADD_PRODUCT;
  payload: BasketProductsType;
}

export interface RemoveProductAction {
  type: BasketActionTypes.REMOVE_PRODUCT;
  payload: number;
}

export type BasketAction = AddProductAction | RemoveProductAction;
