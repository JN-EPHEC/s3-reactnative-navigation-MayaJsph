import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; description: string };
};

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

export default function ProductListScreen({ navigation }: Props) {
  const products = [
    { id: "1", name: "Laptop", description: "High performance laptop" },
    { id: "2", name: "Mouse", description: "Wireless mouse" },
    { id: "3", name: "Keyboard", description: "Mechanical keyboard" },
  ];

  return (
    <View style={styles.container}>
      {products.map((p) => (
        <Pressable
          key={p.id}
          style={styles.item}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              id: p.id,
              name: p.name,
              description: p.description,
            })
          }
        >
          <Text style={styles.title}>{p.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" },
  title: { fontSize: 16 },
});
