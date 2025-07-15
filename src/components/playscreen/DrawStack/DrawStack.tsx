import { View, TouchableWithoutFeedback } from "react-native";
import { Card } from "../../../types/card.type";
import { useGame } from "../../../contexts/GameContext";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import DrawStackCard from "./DrawStackCard/DrawStackCard";
import { useState } from "react";

const SHOWN_CARD_SIZE = 15;

export default function DrawStack({
  cards,
  theme,
  dismiss,
}: {
  cards: Card[];
  theme: string;
  dismiss: () => void;
}) {
  // If in singular mode, swipeable is only one card
  const [swipeCards] = useState<Card[]>(cards);
  const { addPlayedCard } = useGame();

  return (
    // Global container
    <View className="flex h-full pt-10">
      {/* Top header for cross */}
      <View className="w-full flex-row justify-end px-5 ">
        <TouchableWithoutFeedback onPress={dismiss}>
          <Entypo name="cross" size={24} color="#fff" />
        </TouchableWithoutFeedback>
      </View>
      {/* Cards of the category */}
      <View className="flex h-3/4 w-full">
        <Swiper
          cards={swipeCards}
          renderCard={(card) => (
            <View className="flex h-2/3 p-0 align-top">
              <DrawStackCard theme={theme} card={card} simplified={false} />
            </View>
          )}
          // Stack params
          cardIndex={0}
          stackSize={SHOWN_CARD_SIZE}
          // Margin
          cardVerticalMargin={10}
          cardHorizontalMargin={15}
          // Transparent background
          backgroundColor={"rgba(0,255,0,0)"}
          onSwipedAll={dismiss}
          // Vertical actions
          onSwipedTop={dismiss}
          // Horizontal actions
          onSwipedLeft={(index) => addPlayedCard(swipeCards[index])}
          onSwipedRight={(index) => addPlayedCard(swipeCards[index])}
          stackSeparation={1}
          disableBottomSwipe
        />
      </View>
    </View>
  );
}
