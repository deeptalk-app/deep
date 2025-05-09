import { ImageBackground, StyleSheet, View } from "react-native";
import { HomeFooter } from "../../components/home/HomeFooter";
import { Deck } from "../../types/deck.type";
import { useState } from "react";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { DeckListComponent } from "../../components/home/DeckListComponent";
import { ThemedText } from "../../components/ThemedText";
import { useThemeColor } from "@/src/hooks/useThemeColor";

/** temporary value before we have a real store */
const decks: Deck[] = [
  {
    id: 0,
    title: "Kings & Queens",
    icon: <FontAwesome5 name="crown" size={24} color="#fff" />,
    categories: [],
  },
  {
    id: 1,
    title: "Love",
    icon: <FontAwesome name="heart" size={24} color="#fff" />,
    categories: [],
  },
];

const downloadedDecks: Deck[] = [];

export default function Home() {
  const mainColor = useThemeColor("main");
  const contrastColor = useThemeColor("contrast");
  const [selectedDecks, setSelectedDecks] = useState<Deck[]>([]);

  const playDisabled = selectedDecks.length === 0;

  /** This method is used to handle the click on the 'play' button in the footer. */
  const handlePlayClick = (): void => {
    alert(`Play button clicked !`);
  };

  const handleDeckSelected = (deckId: number): void => {
    if (selectedDecks.some(({ id }) => id === deckId)) {
      // Deck is already selected -> unselect it
      setSelectedDecks((curr) => curr.filter(({ id }) => id !== deckId));
    } else {
      // Deck is not selected -> select it
      const deck = decks.find(({ id }) => id === deckId);
      // This should not happen but check just in case
      if (!deck) return;
      setSelectedDecks((curr) => [...curr, deck]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <ThemedText style={{ ...styles.subtitle, color: mainColor }}>
            Oserez vous
          </ThemedText>
          <ThemedText style={{ ...styles.title, color: contrastColor }}>
            tout dire ?
          </ThemedText>
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
          decks={[]}
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

const styles = StyleSheet.create({
  titleContainer: {},
  title: {
    fontFamily: "KronaOne",
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 0,
  },
  subtitle: {
    fontFamily: "KronaOne",
    fontSize: 24,
    fontWeight: "regular",
    lineHeight: 0,
  },
  container: {
    flex: 1,
    // Elements start from the bottom
    justifyContent: "flex-end",
    gap: 10,
  },
  content: {
    padding: 15,
    gap: 10,
    marginBottom: "20%",
  },
  deckList: { gap: 10 },
  deck: {
    alignItems: "center",
    gap: 4,
  },
  deckIcon: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 80,
    height: 60,
    borderRadius: 7,
    backgroundColor: "rgba(0, 0, 0, .4)",
    opacity: 0.4,
  },
  selected: {
    opacity: 1,
    fontWeight: "bold",
  },
});
