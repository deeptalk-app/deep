import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";
import { IconButton } from "../IconButton";

export function HomeFooter({
  playDisabled,
  handlePlayClick,
}: {
  playDisabled: boolean;
  handlePlayClick: () => void;
}) {
  /* useSafeAreaInsets() used to automatically add padding to account for the notch */
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        // No safe area insets, add padding to bottom
        paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
      }}
      className="p-5 flex-row items-center gap-5 bg-black/[.4]"
    >
      {/* Add deck button */}
      <IconButton
        onPress={() => alert("Add deck button clicked !")}
        icon={<FontAwesome6 name="plus" size={18} color="#fff" />}
        disabled
      />
      {/* Store button */}
      <IconButton
        onPress={() => alert("Add deck button clicked !")}
        variant="contained"
        disabled
        icon={
          <MaterialCommunityIcons
            name="shopping-outline"
            size={18}
            color="#000"
          />
        }
      />
      {/* Start game button */}
      <TouchableHighlight
        // style={{ ...styles.button, ...(playDisabled ? styles.disabled : {}) }}
        className={[
          "flex-1 items-center p-5 rounded-[1000px] border border-white opacity-40 bg-black/[.4]",
          !playDisabled && "opacity-100",
        ].join(" ")}
        disabled={playDisabled}
        onPress={handlePlayClick}
      >
        <ThemedText style={styles.buttonText}>Jouer</ThemedText>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  button: {
    flexGrow: 1, // This ensure that the button take the whole available space
    display: "flex",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#fff",
  },
  disabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
