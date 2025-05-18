import { StyleSheet, ScrollView } from "react-native";
import { Deck } from "../../types/deck.type";
import { DeckComponent } from "./DeckComponent";
import { ThemedText } from "../ThemedText";

export function DeckListComponent({
  title,
  decks,
  selectedDecks,
  handleDeckSelected,
}: {
  title: string;
  decks: Deck[];
  selectedDecks: Deck[];
  handleDeckSelected: (id: string) => void;
}) {
  return (
    <>
      <ThemedText variant="subtitle">{title}:</ThemedText>
      {/* Deck is not empty */}
      {decks.length > 0 ? (
        <ScrollView horizontal={true} contentContainerStyle={styles.deckList}>
          {decks.map((deck) => {
            const isSelected = selectedDecks.some(({ id }) => id === deck.id);
            return (
              <DeckComponent
                key={deck.id}
                deck={deck}
                handleDeckSelected={handleDeckSelected}
                selected={isSelected}
              />
            );
          })}
        </ScrollView>
      ) : (
        //  Deck is empty
        <ThemedText>Aucun deck disponible...</ThemedText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  deckList: { gap: 10 },
});
