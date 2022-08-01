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

  const changeCount = (value: string) => {
    const changeDot = /,/g;
    let newstr = value.replace(changeDot, ".");

    if (newstr.includes(".") && newstr.indexOf(".") < newstr.length - 2) {
      const arrFromString = Array.from(newstr);
      arrFromString.pop();
      newstr = arrFromString.join("");
      changeStep(0.1)
    }

    if (isNaN(Number(newstr))) {
      Alert.alert("Enter a number for example (1 or 1.1)");
      return dispatch(setCount({ id, count: "1" }));
    }

    if (Number(newstr) > 3600 || Number(newstr) < 0) {
      Alert.alert("Enter a number between 1 and 3600");
      return dispatch(setCount({ id, count: "1" }));
    }

    return dispatch(setCount({ id, count: newstr }));
  };

  const changeStep = (step: number = 1) => {
    const currentValue = Number(count);

    if (step === 0.1) {
      return step;
    }

    return currentValue < 100
      ? (step = 1)
      : currentValue < 1000
      ? (step = 10)
      : (step = 100);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.price}>Price: {price}$</Text>
      <Text style={styles.price}>
        Total price: {(price * Number(count)).toFixed(2)}$
      </Text>
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
          onChangeText={(value) => changeCount(value)}
          value={`${count}`}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          minimumValue={1}
          maximumValue={3600}
          onValueChange={(value) =>
            dispatch(
              setCount({ id, count: value.toString() })
            )
          }
          value={Number(count)}
          step={changeStep()}
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
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default BasketProduct;
