import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Product from "../components/Product";
import { useAppDispatch, useAppSelector } from "../store/store";
import { ProductsType } from "../types/product";
import { fetchProducts } from "../store/slices/productSlice";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
