import { View, Text } from "react-native";
import { Card } from "../../../types/card.type";

export default function PlayingCardContainer({ card }: { card: Card }) {
  return (
    <View className="h-full w-full bg-black/[.4] p-12 rounded-3xl shadow-md justify-center items-center">
      <View className="w-full flex-col content-center gap-5">
        {/* Card content */}
        <Text className="text-3xl font-jost-regular text-white">
          {card?.content}
        </Text>
      </View>
    </View>
  );
}
