import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { RootState } from "../store/store";
import { BasketProductsType } from "../types/basket";

const Basket = () => {
  const products = useSelector((state: RootState) => state.basketPage.products);

  return (
    <View>
      <ScrollView>
        {products.map((el: BasketProductsType) => {
          return <Product {...el} key={el.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Basket;
