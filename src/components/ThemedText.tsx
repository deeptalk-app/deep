import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Jost",
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontFamily: "Jost",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontFamily: "Jost",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: "Jost",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    fontFamily: "Jost",
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
