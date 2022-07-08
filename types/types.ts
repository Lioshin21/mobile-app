export interface ProductType {
  id: number;
  color: string;
  img: string;
  name: string;
  price: number
}


export interface ProductsState {
  products: ProductType[];
}

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS"
}

export interface GetProductsAction {
  type: "GET_PRODUCTS",
  payload: ProductType[]
}