export type Card = {
  id: string;
  content: string;
};

export type CardWithTheme = Card & { theme: string };
