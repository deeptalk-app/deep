import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { DeepTheme } from "../themes/deep.theme";
import "../../assets/styles/global.css";
import { verifyInstallation } from "nativewind";
import { DeckProvider } from "../contexts/DeckContext";
import { GameProvider } from "../contexts/GameContext";
import { PlayscreenHeader } from "../components/playscreen/Header/PlayscreenHeader";
import { GlobalBottomSheetProvider } from "../contexts/GlobalBottomSheetContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  verifyInstallation();

  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    KronaOne: require("../../assets/fonts/KronaOne-Regular.ttf"),
    Jost: require("../../assets/fonts/Jost-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DeepTheme}>
        <DeckProvider>
          <GameProvider>
            <GlobalBottomSheetProvider>
              <Stack
                screenOptions={{
                  animation: "default",
                  contentStyle: { backgroundColor: "#0f0f0f" },
                }}
              >
                <Stack.Screen name="(home)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="game"
                  options={{
                    header: () => <PlayscreenHeader />,
                  }}
                />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar style="auto" />
            </GlobalBottomSheetProvider>
          </GameProvider>
        </DeckProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
