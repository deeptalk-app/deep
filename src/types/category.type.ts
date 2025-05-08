import { Card } from "./card.type";

export type Category = {
  id: number;
  theme: string;
  level: number;
  cardAmount: number;
  cards: Card[];
};
