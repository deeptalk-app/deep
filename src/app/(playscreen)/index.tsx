import { View, Text, ScrollView, StyleSheet, Animated } from "react-native";
import { CardCategory } from "../../components/playscreen/CardCategory";
import { useState } from "react";
import { Card } from "@/src/types/card.type";
import { useGame } from "../../contexts/GameContext";
import FocusedCategory from "../../components/playscreen/FocusedCategory/FocusedCategory";
import { Category } from "../../types/category.type";
import { useRouter } from "expo-router";
import backgroundFade from "../../hooks/fade/fadeStore";

type FocusedItem = {
  deckId: string;
  category: Category;
};
export default function PlayingPage() {
  const [focusedItem, setFocusedItem] = useState<FocusedItem | undefined>();
  const { selectedDeck, playedCards } = useGame();
  const router = useRouter();

  /**
   * This method handles the click of a category
   */
  const handleCategoryClick = (deckId: string, category: Category) => {
    router.push({
      pathname: "/(playscreen)/[category]",
      params: { category: category.id },
    });
  };

  /**
   * This method will filter out the played cards from the given list of cards
   *
   * @param {Card[]} cards The list of cards to filter
   * @returns {Card[]} The filtered list of cards
   */
  const filterPlayedCards = (cards: Card[]): Card[] => {
    return cards.filter(
      ({ id: cardId }) => !playedCards.some(({ id }) => cardId === id)
    );
  };

  // Played has selected a card
  if (focusedItem) {
    const filteredCards = filterPlayedCards(focusedItem.category.cards);

    return (
      <FocusedCategory
        key={focusedItem.category.id}
        cards={filteredCards}
        dismiss={() => setFocusedItem(undefined)}
      />
    );
  }

  // No card has been selected
  return (
    <Animated.View
      style={{ flex: 1, opacity: backgroundFade }}
      className="flex-1 justify-end p-5 gap-y-2"
    >
      {/* Title */}
      <Text className="text-5xl font-kronaone-regular text-white">Piochez</Text>
      {/* List of categories */}
      <ScrollView contentContainerStyle={styles.deckList}>
        {selectedDeck.map(({ id, categories }) => (
          // View for deck
          <View key={id} style={styles.deckList}>
            {/* Categories within deck */}
            {categories.map((category) => {
              // Filter out already played cards
              const filteredCategory = {
                ...category,
                cards: filterPlayedCards(category.cards),
              };
              return (
                <CardCategory
                  key={category.id}
                  category={filteredCategory}
                  onCategoryClick={() => handleCategoryClick(id, category)}
                />
              );
            })}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  deckList: { gap: 10 },
});
