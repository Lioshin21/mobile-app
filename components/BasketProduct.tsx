import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { setCount, removeFromBasket } from "../store/slices/basketSlice";
import { useAppDispatch } from "../store/store";
import { BasketProductsType } from "../types/basket";
import { Slider } from "@miblanchard/react-native-slider";

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
      <Text style={styles.price}>Total price: {price * count}$</Text>
      <Button
        title="Remove from basket"
        onPress={() => {
          dispatch(removeFromBasket(id));
        }}
      />
      <View style={styles.countWrapper}>
        <Text>Total count: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            Number(value) > 1000 || Number(value) < 0
              ? Alert.alert("Enter number between 1 and 1000")
              : dispatch(setCount({ id, count: Number(value) }));
          }}
          value={`${count}`}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          minimumValue={1}
          maximumValue={1000}
          onValueChange={(value) =>
            dispatch(setCount({ id, count: Number(value) }))
          }
          value={count}
          step={1}
        />
      </View>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    width: 50,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default BasketProduct;
