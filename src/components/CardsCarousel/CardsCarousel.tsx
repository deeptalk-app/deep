import Carousel from "react-native-snap-carousel";
import { CardWithTheme } from "../../types/card.type";
import { CarouselCard } from "./CarouselCard";

type CardsCarouselProps = {
  cards: CardWithTheme[];
  width?: number;
};
export function CardsCarousel({ cards, width }: CardsCarouselProps) {
  const itemWidth: number = 200;

  // No width provided, return an empty jsx (parent hasn't loaded yet)
  if (!width) return <></>;

  return (
    <Carousel<CardWithTheme>
      data={cards}
      renderItem={(item) => (
        <CarouselCard item={item.item} itemWidth={itemWidth} />
      )}
      vertical={false}
      itemWidth={itemWidth}
      sliderWidth={width}
    />
  );
}
