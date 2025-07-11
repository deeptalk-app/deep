import { Stack } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const image = require("../../../assets/images/home.png");

export default function TabLayout() {
  return (
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
      resizeMode={"cover"}
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
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
