export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
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