import { TouchableHighlight, TouchableOpacityProps } from "react-native";

export type IconButtonVariant = "default" | "contained";

const variantStyles = {
  default: "bg-black/[.4]",
  contained: "bg-white",
};

export function IconButton({
  icon,
  variant = "default",
  ...rest
}: { icon: JSX.Element; variant?: IconButtonVariant } & TouchableOpacityProps) {
  return (
    <TouchableHighlight
      className={[
        "border border-white p-5 rounded-[100%]",
        variantStyles[variant],
        rest.disabled ? "opacity-35" : "",
      ].join(" ")}
      {...rest}
    >
      {icon}
    </TouchableHighlight>
  );
}
