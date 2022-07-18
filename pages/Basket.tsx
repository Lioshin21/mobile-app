import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BasketProduct from "../components/BasketProduct";
import { useAppSelector } from "../store/store";
import { BasketProductsType } from "../types/basket";

const Basket = () => {
  const products = useAppSelector((state) => state.basket.products);
  const totalPrice = () => {
    let result = 0;
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        result += products[i].count * products[i].price;
      }
    } else {
      result = 0;
    }
    return result.toFixed(2);
  };

  return (
    <View  style={styles.basket}>
      <ScrollView>
        {products.map((el: BasketProductsType) => {
          return <BasketProduct {...el} key={el.id} />;
        })}
      </ScrollView>
      <Text style={styles.totalPrice}>Total price: {totalPrice()} $</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  basket: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  totalPrice: {
    color: 'blue',
    fontSize: 28,
    marginBottom: 30
  }
});

export default Basket;
