export interface ICard {
  title: number;
  text: string;
}

export interface ICategory {
  category: string;
  fromYear: number;
  toYear: number;
  cards: ICard[];
}

export interface IContent {
  timeline: ICategory[];
}
