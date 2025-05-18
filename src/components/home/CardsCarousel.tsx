import { Card } from "@/src/types/card.type";
import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

type CardWithTheme = Card & { theme: string };
type CardsCarouselProps = {
  cards: CardWithTheme[];
  width?: number;
};
export function CardsCarousel({ cards, width }: CardsCarouselProps) {
  const itemWidth: number = 200;
  const renderCard = ({
    item,
    index: _index,
  }: {
    item: CardWithTheme;
    index: number;
  }) => {
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
  };

  // No width provided, return an empty jsx (parent hasn't loaded yet)
  if (!width) return <></>;

  return (
    <Carousel<CardWithTheme>
      data={cards}
      renderItem={renderCard}
      vertical={false}
      itemWidth={itemWidth}
      sliderWidth={width}
    />
  );
}
