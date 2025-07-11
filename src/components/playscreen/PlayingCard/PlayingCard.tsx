import { Card } from "@/src/types/card.type";
import { BlurView } from "expo-blur";
import { View, Text, StyleSheet } from "react-native";

export default function PlayingCard({
  card,
  simplified,
}: {
  card: Card;
  simplified: boolean;
}) {
  return (
    <View className="h-full w-full rounded-3xl shadow-md justify-center items-center overflow-hidden">
      <BlurView style={styles.glassCard} tint={"dark"} intensity={50}>
        <View className="w-full flex-col content-center gap-5">
          {/* Card content */}
          {/* /!\ Only shown when not simplified */}
          {!simplified && (
            <Text className="text-3xl font-jost-regular text-white text-center">
              {card?.content}
            </Text>
          )}
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
