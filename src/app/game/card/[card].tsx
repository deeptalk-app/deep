import { useLocalSearchParams, useRouter } from "expo-router";
import DrawStack from "../../../components/playscreen/DrawStack/DrawStack";
import { useGame } from "../../../contexts/GameContext";
import { useHeaderHeight } from "../../../hooks/useHeaderHeight";
import { View } from "react-native";
import { useBackgroundFade } from "../../../hooks/fade/useBackgroundFade";

export default function CardView() {
  const { card } = useLocalSearchParams<{
    card: string;
  }>();
  const { allCards } = useGame();
  const { dismissTo } = useRouter();
  const headerHeight = useHeaderHeight();

  // Triggers background fade
  useBackgroundFade();

  const currentCard = allCards.find(({ id }) => id === card);

  const dismiss = () => dismissTo("/game");

  // If current card can't be found, pop current screen
  if (!currentCard) {
    return dismiss();
  }

  return (
    <View style={{ flex: 1, paddingTop: headerHeight }}>
      <DrawStack
        cards={[currentCard]}
        dismiss={dismiss}
        theme={currentCard.theme}
      />
    </View>
  );
}
