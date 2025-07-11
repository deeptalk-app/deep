import { View, Text, TouchableHighlight } from "react-native";
import { useGame } from "../../../contexts/GameContext";
import { getAllDeckCards } from "../../../functions/deck";

function GameStatisticsFocusExpanded() {
  const { playedCards, selectedDeck } = useGame();
  return (
    <View>
      {selectedDeck.map((deck) => {
        const { id, title, categories } = deck;
        // Retrieve deck cards
        const allDeckCards = getAllDeckCards(deck);
        // Retrieve deck played cards
        const deckPlayedCards = allDeckCards.filter(({ id: cardId }) =>
          playedCards.some(({ id }) => id === cardId)
        );

        return (
          <View key={id} className="flex-col gap-5">
            {/* Header */}
            <View className="w-full flex-row justify-between items-center">
              <Text className="text-2xl font-kronaone-regular">{title}</Text>
              {/* Count */}
              <Text className="text-lg font-kronaone-regular">
                {deckPlayedCards.length}/
                <Text className="color-black/50">{allDeckCards.length}</Text>
              </Text>
            </View>
            {/* Content */}
            <View className="flex-col gap-2">
              {categories.map(({ id, theme, cards }) => {
                // Retrieve category played cards
                const categoryPlayedCards = cards.filter(({ id: cardId }) =>
                  playedCards.some(({ id }) => id === cardId)
                );

                return (
                  <View key={id} className="flex-row justify-between">
                    <Text className="text-sm color-black/50 font-kronaone-regular">
                      {theme}
                    </Text>
                    <Text className="text-sm color-black/50  font-kronaone-regular">
                      {categoryPlayedCards.length}/{cards.length}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
function GameStatisticsFocusMinimized() {
  const { playedCards, allCards } = useGame();
  // const totalCardAmount = selectedDeck.map(({ }))
  return (
    <View className="flex-row items-end justify-between">
      <Text className="font-kronaone-regular">
        <Text className="text-4xl">{playedCards.length}</Text>
        <Text className="text-xl color-black/50">/{allCards.length}</Text>
      </Text>
      <Text className="text-sm font-kronaone-regular color-black/50">
        cartes jouées
      </Text>
    </View>
  );
}

export function GameStatisticsFocus({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: (b: boolean) => void;
}) {
  return (
    <TouchableHighlight
      className="w-100 bg-white rounded-2xl p-7"
      onPress={() => setExpanded(!expanded)}
    >
      {expanded ? (
        <GameStatisticsFocusExpanded />
      ) : (
        <GameStatisticsFocusMinimized />
      )}
    </TouchableHighlight>
  );
}
