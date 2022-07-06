import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Basket from "./components/Basket";
import Products from "./components/Products";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Basket" component={Basket} />
          </Tab.Navigator>
        </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
