import { Stack } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const image = require("../../../assets/images/bg.png");

export default function TabLayout() {
  return (
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
      resizeMode={"cover"}
    >
      <Stack
        screenOptions={{
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="category/[category]"
          getId={({ params }) => params?.category}
        />
        <Stack.Screen name="card/[card]" getId={({ params }) => params?.card} />
      </Stack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
