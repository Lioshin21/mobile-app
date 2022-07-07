import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

type ProductProps = {
  id: number;
  colour: string;
  img: string;
  name: string;
  price: number;
};

const Product: React.FC<ProductProps> = ({ id, colour, img, name, price }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.price}>Price: {price}$</Text>
      <Button title="add to Basket" />
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
  },
});

export default Product;
