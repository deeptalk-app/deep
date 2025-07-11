import { View, Text } from "react-native";
import { CardWithTheme } from "../../types/card.type";

export function CarouselCard({
  item,
  itemWidth,
}: {
  item: CardWithTheme;
  itemWidth: number;
}) {
  return (
    <View
      className={`border-2 border-white p-7 rounded-2xl w-[${itemWidth}x] h-[23rem] justify-between flex-col`}
    >
      {/* Empty text for better alignment (empty top part) */}
      <Text />
      <Text className="text-white">{item.content}</Text>
      <View className="flex-row justify-center">
        <Text className="text-white">{item.theme}</Text>
      </View>
    </View>
  );
}
