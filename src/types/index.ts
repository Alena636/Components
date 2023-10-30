export type CardProps = {
  ind: number;
  people: Card;
};

export interface Card {
  id: number;
  name: string;
  height: number;
  mass: number;
  hairColor?: string;
  skinColor?: string;
  eyeColor?: string;
  birthYear: string;
  gender: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
}
