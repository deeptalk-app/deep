import { Category } from "./category.type";

export type Deck = {
  id: number;
  title: string;
  icon: React.ReactNode;
  categories: Category[];
};
