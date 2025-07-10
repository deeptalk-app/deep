import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Deck } from "../types/deck.type";
import { Card } from "../types/card.type";
import { decks } from "../constants/deck.default";
import { shuffleList } from "../functions/array";

// Type for context value
interface GameContextType {
  selectedDeck: Deck[];
  playedCards: Card[];
  pickCard: (deckId: string, categoryId: string) => Card | undefined;
  addPlayedCard: (card: Card) => void;
  initGame: (decks: Deck[]) => void;
}

const GameContext = createContext<GameContextType>({} as GameContextType);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [selectedDeck, setSelectedDeck] = useState<Deck[]>([]);
  const [playedCards, setPlayedCards] = useState<Card[]>([]);

  /**
   * This method will pick a random card from the selected category
   *
   * @param {string} deckId The id of the deck to pick from
   * @param {string} categoryId The id of the category to pick from
   * @returns {Card | undefined} The picked card or undefined if no card is available
   */
  const pickCard = (deckId: string, categoryId: string): Card | undefined => {
    // Find the deck
    const deck = selectedDeck.find(({ id }) => id === deckId);
    if (!deck) return;
    // Find the category and filter out played cards
    const playableCards = deck.categories
      .find(({ id }) => id === categoryId)
      ?.cards.filter(
        ({ id: cardId }) => !playedCards.some(({ id }) => cardId === id)
      );
    if (!playableCards) return;
    if (playableCards.length === 0) return;
    // Pick a random card from the category
    const randomIndex = Math.floor(Math.random() * playableCards.length);
    const pickedCard = playableCards[randomIndex];
    // Update the played cards state
    setPlayedCards((prev) => [...prev, pickedCard]);
    return pickedCard;
  };

  /**
   * This method will add a card to the played cards
   *
   * @param {Card} card The card to add to the played cards
   */
  const addPlayedCard = (card: Card) => {
    setPlayedCards((prev) => [...prev, card]);
  };

  /**
   * This method will initialize the game with the given decks
   *
   * @param {Deck[]} decks The list of decks to initialize the game with
   */
  const initGame = (decks: Deck[]) => {
    // Shuffle every categories' cards
    const shuffledGame = decks.map((deck) => ({
      ...deck,
      categories: deck.categories.map((category) => ({
        ...category,
        cards: shuffleList(category.cards),
      })),
    }));
    // And update the game state
    setSelectedDeck(shuffledGame);
    setPlayedCards([]);
  };

  // Temp
  useEffect(() => {
    initGame(decks);
  }, []);

  return (
    <GameContext.Provider
      value={{ selectedDeck, playedCards, pickCard, initGame, addPlayedCard }}
    >
      {children}
    </GameContext.Provider>
  );
};
export const useGame = () => useContext(GameContext);
