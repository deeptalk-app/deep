import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePathname, useRouter } from "expo-router";
import { useGame } from "../../contexts/GameContext";

export function PlayscreenHeader() {
  /* useSafeAreaInsets() used to automatically add padding to account for the notch */
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();
  const { selectedDeck, playedCards } = useGame();

  /** This method is used to handle the click on the 'end game' button. */
  const handleEndGamePress = () => {
    Alert.alert("Êtes-vous sûr.e de vouloir terminer la partie ?", "", [
      {
        text: "Non",
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () => router.back(),
        style: "destructive",
      },
    ]);
  };

  /** This method is used to handle the click on the 'random' button. */
  const handleRandomPress = () => {
    const isHomePage = pathname === "/";
    // First, if we're on a focused category page
    if (!isHomePage) {
      // Go back to main page
      router.back();
    }
    // Then retrieve categories
    const categories = selectedDeck.map(({ categories }) => categories).flat();
    // Filter categories that have no playable cards
    const filteredCategories = categories.filter(({ cards }) =>
      cards.some(
        ({ id: cardId }) => !playedCards.some(({ id }) => cardId === id)
      )
    );
    // If no filtered categories available, go to main (playscreen)
    // TODO: Redirect to end game message
    if (filteredCategories.length === 0)
      return router.navigate({ pathname: "/" });
    // Then retrieve a random category
    const randomIndex = Math.floor(Math.random() * filteredCategories.length);
    const randomCategory = filteredCategories[randomIndex];
    // Then navigate to this category (after a small delay)
    setTimeout(
      () => {
        router.push({
          pathname: "/(playscreen)/[category]",
          params: { category: randomCategory.id },
        });
      },
      isHomePage ? 0 : 250
    );
  };

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      {/* Title */}
      <View>
        <Text style={styles.title}>deep</Text>
      </View>
      {/* Stats button */}
      <TouchableHighlight
        style={{ ...styles.iconButton }}
        onPress={() => alert("Stats clicked !")}
      >
        <MaterialIcons name="bar-chart" size={24} color="#fff" />
      </TouchableHighlight>
      {/* Random button */}
      <TouchableHighlight
        style={{ ...styles.iconButton, backgroundColor: "#fff" }}
        onPress={handleRandomPress}
      >
        <MaterialCommunityIcons name="dice-3-outline" size={24} color="#000" />
      </TouchableHighlight>
      {/* End game button */}
      <TouchableHighlight style={styles.button} onPress={handleEndGamePress}>
        <Text style={styles.buttonText}>Fin de partie</Text>
      </TouchableHighlight>
      {/* <Text style={styles.title}>My App Header</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  title: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "300",
  },
  button: {
    flexGrow: 1, // This ensure that the button take the whole available space
    display: "flex",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
