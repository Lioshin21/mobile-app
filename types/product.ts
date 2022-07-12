export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCT = "ADD_PRODUCT",
}

export interface ProductsType {
  id: number;
  colour: string;
  img: string;
  name: string;
  price: number;
}

export interface ProductsState {
  products: ProductsType[];
}

export interface GetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: ProductsType[];
}

export interface AddProductAction {
  type: ProductsActionTypes.ADD_PRODUCT;
  payload: ProductsType;
}
export type ProductsAction = AddProductAction | GetProductsAction;