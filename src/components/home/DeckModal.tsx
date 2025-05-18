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
      <View className="flex-1 justify-center items-center p-5 bg-black/[.9]">
        <View className="w-full bg-black/[.4] rounded-lg p-12 shadow-md">
          <View className="w-full flex-col content-center gap-5">
            <View className="flex-row justify-between">
              {icon}
              <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <Entypo name="cross" size={24} color="#fff" />
              </TouchableWithoutFeedback>
            </View>
            <View className="gap-2">
              <ThemedText variant="title">{title}</ThemedText>
              <ThemedText variant="subtitle">{numberOfCards} cartes</ThemedText>
            </View>
            <ScrollView horizontal={true}></ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
