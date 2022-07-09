import axios from "axios";

const baseUrl: string = "https://my-json-server.typicode.com/benirvingplt/products/";

export const getProductsAPI = axios.get(baseUrl + "products");
