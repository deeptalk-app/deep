import { useMemo, useState } from "react";
import { View, Text } from "react-native";
import { CardsCarousel } from "../../CardsCarousel/CardsCarousel";
import { useGame } from "../../../contexts/GameContext";
import { CardWithTheme } from "../../../types/card.type";
import { GameStatisticsFocus } from "./GameStatisticsFocus";

export function GameStatistics() {
  const [renderedWidth, setRenderedWidth] = useState<number | undefined>();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { selectedDeck, playedCards } = useGame();

  const playedCardsWithTheme: CardWithTheme[] = useMemo(
    () =>
      selectedDeck
        // Flatten all of the cards
        .map(({ categories }) => categories)
        .flat()
        // Append the theme too
        .map(({ theme, cards }) => cards.map((card) => ({ ...card, theme })))
        .flat()
        // Filter out non played cards
        .filter(({ id: cardId }) =>
          playedCards.some(({ id }) => cardId === id)
        ),
    [playedCards]
  );

  return (
    <View
      className="p-5 flex-col gap-10"
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => setRenderedWidth(width)}
    >
      {/* Statistiques */}
      <View className="flex-col gap-5">
        <Text className="text-3xl font-kronaone-regular text-white">
          Statistiques
        </Text>
        <GameStatisticsFocus expanded={collapsed} setExpanded={setCollapsed} />
      </View>
      {/* Historique */}
      <Text className="text-3xl font-kronaone-regular text-white">
        Historique
      </Text>
      {playedCardsWithTheme.length > 0 ? (
        <CardsCarousel
          // - (20 * 2) to account for the p-5
          width={(renderedWidth ?? 0) - 20 * 2}
          cards={playedCardsWithTheme}
        />
      ) : (
        <Text className="p-5 text-xl font-jost-regular text-white">
          Aucune carte jouée
        </Text>
      )}
    </View>
  );
}
