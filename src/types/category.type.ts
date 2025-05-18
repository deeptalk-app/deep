import { Card } from "./card.type";

export type Category = {
  id: string;
  theme: string;
  level: number;
  cards: Card[];
};
