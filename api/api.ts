import axios from "axios";

const baseUrl: string = "https://my-json-server.typicode.com/benirvingplt/products/";

export const getProducts = axios.get(baseUrl + "products");
