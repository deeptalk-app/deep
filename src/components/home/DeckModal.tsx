import {
  StyleSheet,
  Modal,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Deck } from "../../types/deck.type";
import { Entypo } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";

export function DeckModal({
  deck: { title, icon, categories },
  visible,
  setVisible,
}: {
  deck: Deck;
  visible: boolean;
  setVisible: (b: boolean) => void;
}) {
  const numberOfCards = categories
    .map(({ cards }) => cards.length)
    .reduce((prev, next) => prev + next, 0);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.content}>
            <View style={styles.header}>
              {icon}
              <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <Entypo name="cross" size={24} color="#fff" />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.description}>
              <ThemedText type="title" style={styles.text}>
                {title}
              </ThemedText>
              <ThemedText type="subtitle" style={styles.text}>
                {numberOfCards} cartes
              </ThemedText>
            </View>
            <ScrollView horizontal={true}></ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, .9)",
  },
  modalView: {
    margin: 20,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    gap: 5,
  },
  text: {
    lineHeight: 0,
    color: "#fff",
  },
});
