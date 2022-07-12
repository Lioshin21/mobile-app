import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { RootState } from "../store/store";
import { ProductsType } from "../types/product";
import { fetchProducts } from "../store/slices/productSlice";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    fetchProducts();
    console.log(products)
  }, []);

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
