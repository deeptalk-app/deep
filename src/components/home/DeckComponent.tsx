import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Deck } from "../../types/deck.type";
import { useState } from "react";
import { DeckModal } from "./DeckModal";
import { ThemedText } from "../ThemedText";

export function DeckComponent({
  deck,
  handleDeckSelected,
  selected,
}: {
  deck: Deck;
  handleDeckSelected: (id: number) => void;
  selected: boolean;
}) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { id, title, icon } = deck;

  return (
    <View key={id} style={styles.deck}>
      {/* Modal for the deck description */}
      <DeckModal
        deck={deck}
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />
      <TouchableHighlight
        style={{
          ...styles.deckIcon,
          ...(selected ? styles.selected : {}),
        }}
        onPress={() => handleDeckSelected(id)}
        onLongPress={() => setIsModalVisible(true)}
      >
        <View>{icon}</View>
      </TouchableHighlight>
      <ThemedText style={selected ? styles.selected : {}}>{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    paddingLeft: 2,
    paddingRight: 2,
    alignItems: "center",
    gap: 4,
  },
  deckIcon: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 80,
    height: 60,
    borderRadius: 7,
    backgroundColor: "rgba(0, 0, 0, .4)",
    opacity: 0.4,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 2.5,
      height: 2.5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  selected: {
    opacity: 1,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  modalView: {
    margin: 20,
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
