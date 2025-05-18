import { Modal, View, TouchableWithoutFeedback } from "react-native";
import { Deck } from "../../types/deck.type";
import { Entypo } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { CardsCarousel } from "./CardsCarousel";
import { useState } from "react";

export function DeckModal({
  deck: { title, icon, categories },
  visible,
  setVisible,
}: {
  deck: Deck;
  visible: boolean;
  setVisible: (b: boolean) => void;
}) {
  const [renderedWidth, setRenderedWidth] = useState<number | undefined>();

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
      {/*  bg-black/[.9] */}
      <View className="flex-1 justify-center items-center p-5 bg-black/[.9]">
        <View
          className="w-full bg-black/[.4] pt-12 pb-12 rounded-lg shadow-md"
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => setRenderedWidth(width)}
        >
          <View className="w-full flex-col content-center gap-5">
            <View className="flex-row justify-between pl-12 pr-12">
              {icon}
              <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <Entypo name="cross" size={24} color="#fff" />
              </TouchableWithoutFeedback>
            </View>
            <View className="pl-12 pr-12 gap-2">
              <ThemedText variant="title">{title}</ThemedText>
              <ThemedText variant="subtitle">{numberOfCards} cartes</ThemedText>
            </View>
            <CardsCarousel
              width={renderedWidth}
              cards={categories
                .map(({ cards, theme }) =>
                  // Re-map the card to add the theme
                  cards.map((card) => ({ ...card, theme }))
                )
                .flat()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
