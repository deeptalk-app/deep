import { createContext, ReactNode, useContext, useState } from "react";
import { Deck } from "../types/deck.type";
import { decks } from "../constants/deck.default";

// Type for context value
interface DeckContextType {
  decks: Deck[];
  selectedDecks: Deck[];
  addDeck: (deck: Deck) => void;
  removeDeck: (id: string) => void;
}

const DeckContext = createContext<DeckContextType>({} as DeckContextType);

interface DeckProviderProps {
  children: ReactNode;
}

export const DeckProvider = ({ children }: DeckProviderProps) => {
  const [selectedDecks, setSelectedDecks] = useState<Deck[]>([]);

  const addDeck = (deck: Deck) => setSelectedDecks((prev) => [...prev, deck]);
  const removeDeck = (deckId: string) =>
    setSelectedDecks((prev) => prev.filter(({ id }) => id !== deckId));

  return (
    <DeckContext.Provider value={{ decks, selectedDecks, addDeck, removeDeck }}>
      {children}
    </DeckContext.Provider>
  );
};
export const useDecks = () => useContext(DeckContext);
