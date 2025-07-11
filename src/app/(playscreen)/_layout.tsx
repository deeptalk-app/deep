import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[category]" />
    </Stack>
  );
}
