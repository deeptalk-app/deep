import { Card } from "../types/card.type";
import { Deck } from "../types/deck.type";

export const getAllDeckCards = (deck: Deck): Card[] =>
  deck.categories
    .map(({ cards }) => cards)
    .flat()
    .flat();
