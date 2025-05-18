import { View, Text } from "react-native";
import { HomeFooter } from "../../components/home/HomeFooter";
import { Deck } from "../../types/deck.type";
import { DeckListComponent } from "../../components/home/DeckListComponent";
import { useDecks } from "@/src/contexts/DeckContext";

/** temporary value before we have a real store */

const downloadedDecks: Deck[] = [];

export default function Home() {
  const { selectedDecks, decks, removeDeck, addDeck } = useDecks();

  const playDisabled = selectedDecks.length === 0;

  /** This method is used to handle the click on the 'play' button in the footer. */
  const handlePlayClick = (): void => {
    alert(`Play button clicked !`);
  };

  const handleDeckSelected = (deckId: string): void => {
    if (selectedDecks.some(({ id }) => id === deckId)) {
      // Deck is already selected -> unselect it
      removeDeck(deckId);
    } else {
      // Deck is not selected -> select it
      const deck = decks.find(({ id }) => id === deckId);
      // This should not happen but check just in case
      if (!deck) return;
      addDeck(deck);
    }
  };

  return (
    <View className="flex-1 justify-end gap-y-2">
      <View className="p-5 gap-2 mb-[20%]">
        {/* Title */}
        <View>
          <Text className="text-4xl font-jost-regular text-white">
            Oserez vous
          </Text>
          <Text className="text-5xl font-kronaone-regular text-contrast">
            tout dire ?
          </Text>
        </View>
        {/* List of default decks */}
        <DeckListComponent
          title={"Mes decks"}
          decks={decks}
          selectedDecks={selectedDecks}
          handleDeckSelected={handleDeckSelected}
        />
        {/* List of downloaded decks */}
        <DeckListComponent
          title={"Decks téléchargés"}
          decks={downloadedDecks}
          selectedDecks={selectedDecks}
          handleDeckSelected={handleDeckSelected}
        />
      </View>
      {/* Footer to display actions */}
      <HomeFooter
        playDisabled={playDisabled}
        handlePlayClick={handlePlayClick}
      />
    </View>
  );
}
