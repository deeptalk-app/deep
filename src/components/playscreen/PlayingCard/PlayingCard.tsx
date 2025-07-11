import { Card } from "@/src/types/card.type";
import { BlurView } from "expo-blur";
import { View, Text, StyleSheet } from "react-native";

export default function PlayingCard({
  theme,
  card,
}: {
  theme: string;
  card: Card;
  simplified: boolean;
}) {
  return (
    <View className="h-full w-full rounded-3xl shadow-md justify-center items-center overflow-hidden">
      <BlurView style={styles.glassCard} tint={"dark"} intensity={50}>
        <View className="w-full h-full flex-col content-center gap-5 justify-between">
          {/* Empty div for alignment */}
          <Text />
          {/* Card content */}
          <Text className="text-3xl font-jost-regular text-white text-center">
            {card.content}
          </Text>
          {/* Card footer */}
          <Text className="text-xl font-jost-regular text-white text-center">
            {theme}
          </Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
});
