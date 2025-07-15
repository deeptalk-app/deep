import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import {
  Alert,
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGame } from "../../../contexts/GameContext";
import { useGlobalBottomSheet } from "../../../contexts/GlobalBottomSheetContext";
import { randomElement } from "../../../functions/array";
import { Card } from "../../../types/card.type";
import { IconButton } from "../../IconButton";
import { GameStatistics } from "../GameStatistics/GameStatistics";

export function PlayscreenHeader() {
  /* useSafeAreaInsets() used to automatically add padding to account for the notch */
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { playedCards, allCards, addPlayedCard } = useGame();
  const { present } = useGlobalBottomSheet();

  // Retrieve all non played cards
  const unplayedCards: Card[] = useMemo(
    () =>
      allCards.filter(
        ({ id: cardId }) => !playedCards.some(({ id }) => cardId === id)
      ),
    [allCards, playedCards]
  );

  /** This method is used to handle the click on the 'end game' button. */
  const handleEndGamePress = () => {
    Alert.alert("Êtes-vous sûr.e de vouloir terminer la partie ?", "", [
      {
        text: "Non",
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () => router.dismissTo("/"),
        style: "destructive",
      },
    ]);
  };

  /** This method is used to handle the click on the 'random' button. */
  const handleRandomPress = () => {
    // Retrieve a random non played cards
    const unplayedCard: Card | undefined = randomElement(unplayedCards);

    // If no unplayed cards, go to /game
    if (!unplayedCard) {
      return router.navigate({ pathname: "/game" });
    }

    // Else mark card as played
    addPlayedCard(unplayedCard);
    // and navigate to /card/[cardId]
    return router.navigate({
      pathname: "/game/card/[card]",
      params: { card: unplayedCard.id },
    });
  };

  /** This method is used to handle the click on the 'statistics' button. */
  const handleStatisticsPress = () => {
    present(<GameStatistics />);
  };

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      {/* Title */}
      <View>
        <Text style={styles.title}>deep</Text>
      </View>
      {/* Stats button */}
      <IconButton
        style={{ ...styles.iconButton }}
        onPress={handleStatisticsPress}
        icon={<MaterialIcons name="bar-chart" size={24} color="#fff" />}
      />
      {/* Random button */}
      <IconButton
        disabled={unplayedCards.length === 0}
        style={{ ...styles.iconButton, backgroundColor: "#fff" }}
        onPress={handleRandomPress}
        icon={
          <MaterialCommunityIcons
            name="dice-3-outline"
            size={24}
            color="#000"
          />
        }
      />
      {/* End game button */}
      <TouchableHighlight style={styles.button} onPress={handleEndGamePress}>
        <Text style={styles.buttonText}>Fin de partie</Text>
      </TouchableHighlight>
      {/* <Text style={styles.title}>My App Header</Text> */}
    </View>
  );
}

/**
 * Description placeholder
 *
 * @type {*}
 */
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
