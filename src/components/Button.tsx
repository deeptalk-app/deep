import { TouchableHighlight } from "react-native";
import { TouchableHighlightProps } from "react-native-gesture-handler";

export function Button({ className, ...props }: TouchableHighlightProps) {
  return (
    <TouchableHighlight
      className={[
        "flex-1 items-center p-5 rounded-[1000px] border border-white opacity-100 bg-black/[.4]",
        props.disabled && "opacity-40",
        className,
      ].join(" ")}
      {...props}
    >
      {props.children}
    </TouchableHighlight>
  );
}
