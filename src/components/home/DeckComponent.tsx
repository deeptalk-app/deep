import { View, TouchableHighlight } from "react-native";
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
  handleDeckSelected: (id: string) => void;
  selected: boolean;
}) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { id, title, icon } = deck;

  return (
    <View key={id} className="pl-2 pr-2 items-center gap-2 min-w-[120px]">
      {/* Modal for the deck description */}
      <DeckModal
        deck={deck}
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />
      <TouchableHighlight
        className={[
          "content-center items-center justify-center p-5 w-[90px] h-[60px] rounded-lg bg-black/[.4] opacity-100 shadow",
          !selected && "opacity-40",
          selected && "font-bold",
        ].join(" ")}
        onPress={() => handleDeckSelected(id)}
        onLongPress={() => setIsModalVisible(true)}
      >
        <View>{icon}</View>
      </TouchableHighlight>
      <ThemedText className={selected ? "font-bold" : ""}>{title}</ThemedText>
    </View>
  );
}
