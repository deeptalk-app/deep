import { TouchableHighlight } from "react-native";
import { ThemedText } from "./ThemedText";
import { TouchableHighlightProps } from "react-native-gesture-handler";

export function Button(props: TouchableHighlightProps) {
  return (
    <TouchableHighlight
      className={[
        "flex-1 items-center p-5 rounded-[1000px] border border-white opacity-100 bg-black/[.4]",
        props.disabled && "opacity-40",
      ].join(" ")}
      {...props}
    >
      {props.children}
    </TouchableHighlight>
  );
}
