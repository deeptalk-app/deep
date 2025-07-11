import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";
import FocusedCategory from "../../../components/playscreen/FocusedCategory/FocusedCategory";
import { useGame } from "../../../contexts/GameContext";
import { useHeaderHeight } from "../../../hooks/useHeaderHeight";
import { Card } from "../../../types/card.type";
import { useBackgroundFade } from "../../../hooks/fade/useBackgroundFade";

export default function CategoryView() {
  const { category } = useLocalSearchParams<{
    category: string;
  }>();
  const { selectedDeck, playedCards } = useGame();
  const { dismissTo } = useRouter();
  const headerHeight = useHeaderHeight();

  // Triggers background fade
  useBackgroundFade();

  const categories = selectedDeck.map(({ categories }) => categories).flat();
  const currentCategory = categories.find(({ id }) => id === category);

  const dismiss = () => dismissTo("/game");

  // If current category can't be found, pop current screen
  if (!currentCategory) {
    return dismiss();
  }

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

  const filteredCards = filterPlayedCards(currentCategory.cards);

  return (
    <View style={{ paddingTop: headerHeight }}>
      <FocusedCategory
        cards={filteredCards}
        theme={currentCategory.theme}
        dismiss={dismiss}
      />
    </View>
  );
}
