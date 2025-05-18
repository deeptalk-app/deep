import { Deck } from "../types/deck.type";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export const decks: Deck[] = [
  {
    id: "d03768e5-53d3-43f6-81fc-24fe5b21395d",
    title: "Kings & Queens",
    icon: <FontAwesome5 name="crown" size={24} color="#fff" />,
    categories: [
      {
        id: "415dbd15-f989-4aee-829a-bd579b94e795",
        theme: "Level 1",
        level: 1,
        cards: [
          {
            id: "card-0-0",
            content: "This is card content #1.1",
          },
          {
            id: "card-0-1",
            content: "This is card content #1.2",
          },
          {
            id: "card-0-2",
            content: "This is card content #1.3",
          },
        ],
      },
      {
        id: "d8f30c15-438a-43a5-9121-1321561418f5",
        theme: "Level 2",
        level: 2,
        cards: [
          {
            id: "card-1-0",
            content: "This is card content #2.1",
          },
        ],
      },
      {
        id: "2961755b-cf18-45e1-b22c-f534f774d689",
        theme: "Level 3",
        level: 3,
        cards: [
          {
            id: "card-2-0",
            content: "This is card content #3.1",
          },
          {
            id: "card-2-1",
            content: "This is card content #3.2",
          },
        ],
      },
    ],
  },
  {
    id: "94edef07-2895-4a7f-b4d2-ef6a161c4839",
    title: "Love",
    icon: <FontAwesome name="heart" size={24} color="#fff" />,
    categories: [],
  },
];
