import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ImageBackground, StyleSheet } from "react-native";
import { DeepTheme } from "../themes/deep.theme";
import "../../assets/styles/global.css";
import { verifyInstallation } from "nativewind";

const image = require("../../assets/images/bg.png");

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
    <ThemeProvider value={DeepTheme}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        resizeMode={"cover"}
      >
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="(playscreen)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ImageBackground>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
