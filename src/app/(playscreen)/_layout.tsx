import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { PlayscreenHeader } from "../../components/playscreen/PlayscreenHeader";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        header: () => <PlayscreenHeader />,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
