import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function PlayscreenHeader() {
  /* useSafeAreaInsets() used to automatically add padding to account for the notch */
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      {/* Title */}
      <View>
        <Text style={styles.title}>deep</Text>
      </View>
      {/* Stats button */}
      <TouchableHighlight
        style={{ ...styles.iconButton }}
        onPress={() => alert("Stats clicked !")}
      >
        <MaterialIcons name="bar-chart" size={24} color="#fff" />
      </TouchableHighlight>
      {/* Random button */}
      <TouchableHighlight
        style={{ ...styles.iconButton, backgroundColor: "#fff" }}
        onPress={() => alert("Random clicked !")}
      >
        <MaterialCommunityIcons name="dice-3-outline" size={24} color="#000" />
      </TouchableHighlight>
      {/* End game button */}
      <TouchableHighlight
        style={styles.button}
        onPress={() => alert("Fin de partie clicked !")}
      >
        <Text style={styles.buttonText}>Fin de partie</Text>
      </TouchableHighlight>
      {/* <Text style={styles.title}>My App Header</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  title: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "300",
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
