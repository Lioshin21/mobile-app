import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/api";
import Product from "../components/Product";
import { RootState } from "../store/store";
import { ActionTypes, ProductType } from "../types/types";

const ProductList = () => {
  const products = useSelector(
    (state: RootState) => state.productsPage.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts.then((res) =>
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: res.data })
    );
  }, []);

  return (
    <View>
      <ScrollView>
        {products.map((el: ProductType) => {
          return (
            <Product
              id={el.id}
              color={el.color}
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
