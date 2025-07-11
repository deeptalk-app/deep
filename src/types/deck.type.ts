import { Category } from "./category.type";

export type Deck = {
  id: string;
  title: string;
  icon: React.ReactNode;
  categories: Category[];
};
