import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { moveToBasket } from "../store/slices/basketSlice";
import { useAppDispatch } from "../store/store";
import { ProductsType } from "../types/product";

const Product: React.FC<ProductsType> = ({ id, colour, img, name, price }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.price}>Price: {price}$</Text>
      <Button
        title="add to Basket"
        onPress={() => {
          dispatch(moveToBasket({ id, colour, img, name, price, count: 1 }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
  image: {
    height: 500,
    width: 200,
    margin: 10,
  },
  price: {
    fontSize: 20,
  }
});

export default Product;
