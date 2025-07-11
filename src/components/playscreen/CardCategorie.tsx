import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { Category } from "@/src/types/category.type";


export function CardCategorie({
  category,
  onCategoryClick,
}: {
  category: Category;
  onCategoryClick: () => void;
}) {
  const { level, theme, cardAmount } = category;

  const isClickable = cardAmount > 0;

  return (
    <TouchableHighlight
      style={[styles.card, !isClickable && styles.disabled]}
      onPress={onCategoryClick}
      disabled={!isClickable}
      underlayColor="rgba(255,255,255,0.1)"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Niveau {level}</Text>
        <Text style={styles.text}>{theme}</Text>
        <Text style={styles.text}>{cardAmount} cards left</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderRadius: 20,
    overflow: "hidden",
    padding: 20,
  },
  disabled: {
    opacity: 0.5,
  },
  container: {},
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "500", // valid font weight
  },
});
