import { useLocalSearchParams, useRouter } from "expo-router";
import FocusedCategory from "../../../components/playscreen/FocusedCategory/FocusedCategory";
import { useGame } from "../../../contexts/GameContext";
import { useHeaderHeight } from "../../../hooks/useHeaderHeight";
import { Animated } from "react-native";
import backgroundFade from "../../../hooks/fade/fadeStore";

export default function CardView() {
  const { card } = useLocalSearchParams<{
    card: string;
  }>();
  const { allCards } = useGame();
  const { back, navigate } = useRouter();
  const headerHeight = useHeaderHeight();

  // Triggers background fade
  // useBackgroundFade();

  const currentCard = allCards.find(({ id }) => id === card);

  // If current card can't be found, pop current screen
  if (!currentCard) {
    return back();
  }

  return (
    <Animated.View
      style={{ flex: 1, opacity: backgroundFade, paddingTop: headerHeight }}
    >
      <FocusedCategory
        cards={[currentCard]}
        dismiss={() => navigate({ pathname: "/game" })}
      />
    </Animated.View>
  );
}
