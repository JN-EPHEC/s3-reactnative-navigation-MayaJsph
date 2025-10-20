import "react-native-reanimated";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./(tabs)/ShopTab/Stack Nativagtor/ProductDetailScreen";
import CartScreen from "./(tabs)/ShopTab/Stack Nativagtor/MyCartTab/CartScreen";

/* 1) Définis le Stack pour le Shop */
type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; description: string };
};
const ShopStack = createNativeStackNavigator<ShopStackParamList>();

function ShopStackNavigator() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Products" }}
      />
      <ShopStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Product Details" }}
      />
    </ShopStack.Navigator>
  );
}

/* 2) Création du Tab Navigator principal */
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Shop"
          component={ShopStackNavigator} // <-- le Stack imbriqué
          options={{ tabBarLabel: "Shop", tabBarIcon: () => <Text>🛍️</Text> }}
        />
        <Tab.Screen
          name="MyCart"
          component={CartScreen}
          options={{ tabBarLabel: "My Cart", tabBarIcon: () => <Text>🧺</Text> }}
        />
      </Tab.Navigator>
  );
}
