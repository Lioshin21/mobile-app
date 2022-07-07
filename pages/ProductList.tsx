import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getProducts } from "../api/api";
import Product from "../components/Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((res) => setProducts(res.data));
    // console.log(products);
  }, []);

  const image =
    "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024";
  return (
    <View>
      <ScrollView>
        {products.map(
          ({
            id,
            colour,
            img,
            name,
            price,
          }: {
            id: number;
            colour: string;
            img: string;
            name: string;
            price: number;
          }) => {
            return (
              <Product
                id={id}
                colour={colour}
                img={img}
                name={name}
                price={price}
                key={id}
              />
            );
          }
        )}
      </ScrollView>
    </View>
  );
};

export default ProductList;
