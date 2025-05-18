import { Text, type TextProps } from "react-native";

const variantStyles = {
  default: "text-md font-jost-regular text-white",
  title: "text-2xl font-bold",
  subtitle: "text-2xl",
  link: "",
};

export type ThemedTextProps = TextProps & {
  variant?: keyof typeof variantStyles;
};

export function ThemedText({
  variant = "default",
  className = "",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      className={`
      ${variantStyles.default}
      ${variantStyles[variant]}
      ${className}
    `}
      {...rest}
    />
  );
}
