export interface BasketProductsType {
  id: number;
  colour: string;
  img: string;
  name: string;
  price: number;
  count: number;
}

export interface SetCount {
  id: number;
  count: number;
}

export interface BasketState {
  products: BasketProductsType[];
}