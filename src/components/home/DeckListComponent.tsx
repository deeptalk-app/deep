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
  handleDeckSelected: (id: number) => void;
}) {
  if (decks.length === 0) {
    return (
      <>
        <ThemedText type="subtitle" style={styles.title}>
          {title}:
        </ThemedText>
        <ThemedText>Aucun deck téléchargé</ThemedText>
      </>
    );
  }
  return (
    <>
      <ThemedText type="subtitle" style={styles.title}>
        {title}:
      </ThemedText>
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
    </>
  );
}

const styles = StyleSheet.create({
  deckList: { gap: 10 },
  title: {},
});
