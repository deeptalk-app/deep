import { DefaultTheme } from "@react-navigation/native";

export const DeepTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#fff",
    background: "transparent",
  },
};
