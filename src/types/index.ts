export type CardProps = {
  id?: number;
  name: string;
  height: number;
  sprites: { front_default: string };
  weight: number;
};

export interface Card {
  // characteristics: string;
  // difficulty: string;
  // effect: string;
  // image: string;
  // inventors: string;
  // ingredients: string;
  // manufacturers: string;
  // name: string;
  // side_effects: string;
  // slug: string;
  // time: string;
  // wiki: string;

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
