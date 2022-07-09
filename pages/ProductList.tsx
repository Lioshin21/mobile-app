import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../store/reducers/productReducer";
import { RootState } from "../store/store";
import { ProductsType } from "../types/product";

const ProductList = () => {
  const products = useSelector(
    (state: RootState) => state.productsPage.products
  );

  useEffect(() => {

    // Вызываю Thunk
    getProducts();
    console.log(products); // - Возвращает массив из undefined
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
