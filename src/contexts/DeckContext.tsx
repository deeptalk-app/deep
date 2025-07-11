import { createContext, ReactNode, useContext, useState } from "react";
import { Deck } from "../types/deck.type";
import { decks } from "../constants/deck.default";

// Type for context value
interface DeckContextType {
  decks: Deck[];
  selectedDecks: Deck[];
  addDeck: (deck: Deck) => void;
  removeDeck: (id: string) => void;
  clear: () => void;
}

const DeckContext = createContext<DeckContextType>({} as DeckContextType);

interface DeckProviderProps {
  children: ReactNode;
}

export const DeckProvider = ({ children }: DeckProviderProps) => {
  const [selectedDecks, setSelectedDecks] = useState<Deck[]>([]);

  /**
   * This method will add a deck to the selected decks
   *
   * @param {Deck} deck The deck to add to the selected decks
   */
  const addDeck = (deck: Deck) => setSelectedDecks((prev) => [...prev, deck]);

  /**
   * This method will remove a deck from the selected decks
   *
   * @param {string} deckId The id of the deck to remove from the selected decks
   */
  const removeDeck = (deckId: string) =>
    setSelectedDecks((prev) => prev.filter(({ id }) => id !== deckId));

  /**
   * This method will clear all selected decks
   */
  const clear = () => setSelectedDecks([]);

  return (
    <DeckContext.Provider
      value={{ decks, selectedDecks, addDeck, removeDeck, clear }}
    >
      {children}
    </DeckContext.Provider>
  );
};
export const useDecks = () => useContext(DeckContext);
