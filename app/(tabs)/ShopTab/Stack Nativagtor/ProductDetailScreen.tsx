import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; description: string };
};

type Props = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { name, description } = route.params;

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  desc: { fontSize: 16, lineHeight: 22 },
});
