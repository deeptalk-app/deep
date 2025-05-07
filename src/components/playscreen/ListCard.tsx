import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export function ListCard({ title }: { title: string }) {
  return (
    <TouchableHighlight
      style={{ ...styles.card }}
      onPress={() => alert(`Card ${title} clicked !`)}
    >
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 20,
    overflow: "hidden",
  },
  container: {},
});
