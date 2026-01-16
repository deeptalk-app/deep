import { Deck } from "../types/deck.type";
import { FontAwesome5 } from "@expo/vector-icons";

export const decks: Deck[] = [
  {
    id: "5761f196-e999-4cb6-bc47-6e3fa8719a1e",
    title: "Révélations",
    icon: <FontAwesome5 name="crown" size={24} color="#fff" />,
    categories: [
      {
        id: "de7cb198-2fb4-498b-bde8-0be1dd3ad24f",
        theme: "Secrets",
        level: 1,
        cards: [
          {
            id: "5d67dd5e-d49a-4710-9b7e-a1a0dae3a1c2",
            content: "Quel est un secret que peu de gens connaissent sur toi ?",
          },
          {
            id: "a7b7c389-de25-4d33-ac28-1f36c37c8afc",
            content: "As-tu déjà caché quelque chose d’important à un proche ?",
          },
        ],
      },
      {
        id: "d042337e-217f-42a9-a903-a8b10587c990",
        theme: "Souvenirs",
        level: 2,
        cards: [
          {
            id: "2e8d6d39-8606-4f9a-8040-48c4c49370db",
            content: "Quel souvenir te fait toujours sourire ?",
          },
          {
            id: "a58e11ce-b078-4da2-a21b-5db4ee65bcf8",
            content: "Quelle est ta première mémoire d’enfance ?",
          },
        ],
      },
    ],
  },
  {
    id: "df3cb2d2-99f2-427c-ac70-be4d0b7e5b5a",
    title: "Connexion",
    icon: <FontAwesome5 name="crown" size={24} color="#fff" />,
    categories: [
      {
        id: "eef105db-b14b-4d69-956a-7e7e6d6af6ed",
        theme: "Amitié",
        level: 1,
        cards: [
          {
            id: "457920f6-1a80-4bbf-b394-885813aa46c7",
            content: "Qu’est-ce qui rend une amitié durable selon toi ?",
          },
          {
            id: "7a7f51a5-8cfc-4a4b-86cc-dadf3b32badf",
            content: "As-tu un.e ami.e d’enfance que tu as toujours gardé.e ?",
          },
        ],
      },
      {
        id: "583e1636-348b-4a9c-96ab-3c0eb8000cce",
        theme: "Relations",
        level: 2,
        cards: [
          {
            id: "e5c46d3d-2495-41e0-9c48-c1f036a31a5e",
            content: "Quelle a été ta relation la plus marquante ?",
          },
          {
            id: "8a67e3e9-6792-4ae3-97aa-49e3809d5f27",
            content: "Comment gères-tu les conflits dans une relation ?",
          },
        ],
      },
    ],
  },
  {
    id: "c41ae6a4-4d64-457e-a8ab-6ee47ae5a53a",
    title: "Rêver Grand",
    icon: <FontAwesome5 name="crown" size={24} color="#fff" />,
    categories: [
      {
        id: "be09a8e2-5a53-4f49-a8b7-d94c8f529df1",
        theme: "Avenir",
        level: 1,
        cards: [
          {
            id: "6a1e0c82-d82f-49f2-a9d5-2c3d2f416a93",
            content: "Où te vois-tu dans 10 ans ?",
          },
          {
            id: "a1f13a8c-4b64-44db-bd15-d0a9e8b2dc85",
            content: "Quel métier rêvais-tu de faire enfant ?",
          },
        ],
      },
      {
        id: "f88246ff-93e6-4c94-8e93-0a1a4f808e6d",
        theme: "Utopies",
        level: 2,
        cards: [
          {
            id: "8db5b5df-6f39-4a0c-8eb6-b98f4fc2b5f4",
            content:
              "Si tu pouvais changer une chose dans le monde, ce serait quoi ?",
          },
          {
            id: "ab90e0f2-9a43-4099-95b4-9493ef8e40a7",
            content: "Décris ta journée parfaite dans un monde idéal.",
          },
        ],
      },
    ],
  },
];
