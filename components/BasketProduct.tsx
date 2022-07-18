import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { changeCount, removeFromBasket } from "../store/slices/basketSlice";
import { useAppDispatch } from "../store/store";
import { BasketProductsType } from "../types/basket";

const BasketProduct: React.FC<BasketProductsType> = ({
  id,
  colour,
  img,
  name,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.price}>Price: {price}$</Text>
      <View style={styles.countWrapper}>
        <Text>Total count: </Text>
        <View style={styles.countButton}>
          <Button title="-"  onPress={() => dispatch(changeCount({id, type: 'decrease'}))}/>
        </View>
        <Text>{count}</Text>
        <View style={styles.countButton}>
          <Button title="+" onPress={() => dispatch(changeCount({id, type: 'increase'}))}/>
        </View>
      </View>
      <Text style={styles.price}>Total price: {price * count}$</Text>
      <Button
        title="Remove from basket"
        onPress={() => {
          dispatch(removeFromBasket(id));
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
  },
  countWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  countButton: {
    width: 10,
    height: 10,
  },
});

export default BasketProduct;
