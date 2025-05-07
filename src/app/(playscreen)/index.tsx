import { StyleSheet, View } from "react-native";
import { ListCard } from "../../components/playscreen/ListCard";

export default function PlayingPage() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.list}>
        <ListCard title={"Category 1"} />
        <ListCard title={"Category 2"} />
        <ListCard title={"Category 3"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
