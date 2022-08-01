export interface BasketProductsType {
  id: number;
  colour: string;
  img: string;
  name: string;
  price: number;
  count: string;
}

export interface SetCount {
  id: number;
  count: string;
}

export interface BasketState {
  products: BasketProductsType[];
}