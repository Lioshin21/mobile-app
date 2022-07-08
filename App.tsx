import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Basket from "./pages/Basket";
import ProductList from "./pages/ProductList";
import store from "./store/store";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="ProductList" component={ProductList} />
            <Tab.Screen name="Basket" component={Basket} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
