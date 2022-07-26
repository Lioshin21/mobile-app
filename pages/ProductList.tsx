import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Product from "../components/Product";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { ProductsType } from "../types/product";
import { fetchProducts } from "../store/slices/productSlice";
import { moveToBasket } from "../store/slices/basketSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BasketProductsType } from "../types/basket";

const ProductList = () => {
  const products = useAppSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    getLocalStorageData()
  }, [])

  const getLocalStorageData = async () => {
    await AsyncStorage.getItem("products").then((res) =>
      res !== null
        ? JSON.parse(res).forEach((el: BasketProductsType) =>
            dispatch(moveToBasket(el))
          )
        : console.log('1')
    );
  };
  
  return (
    <View>
      <ScrollView>
        {products.map((el: ProductsType) => {
          return (
            <Product
              id={el.id}
              colour={el.colour}
              img={el.img}
              name={el.name}
              price={el.price}
              key={el.id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductList;
