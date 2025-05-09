import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";

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
        ...styles.container,
        // No safe area insets, add padding to bottom
        paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
      }}
    >
      {/* Add deck button */}
      <TouchableHighlight
        style={{ ...styles.iconButton }}
        onPress={() => alert("Add deck button clicked !")}
      >
        <FontAwesome6 name="plus" size={24} color="white" />
      </TouchableHighlight>
      {/* Store button */}
      <TouchableHighlight
        style={{ ...styles.iconButton, backgroundColor: "#fff" }}
        onPress={() => alert("Store button clicked !")}
      >
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color="black"
        />
      </TouchableHighlight>
      {/* Start game button */}
      <TouchableHighlight
        // TODO: animate opacity change
        style={{ ...styles.button, ...(playDisabled ? styles.disabled : {}) }}
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
  iconButton: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
