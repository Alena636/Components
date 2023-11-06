export enum ItemsLimit {
  TenItemsPerPage = 10,
  FiveItemsPerPage = 5,
}

export type Character = {
  name: string;
  height: number;
  mass: number | string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
};

export type CharactersProps = {
  characters: Character[];
};

export type CardDetailProps = {
  label: string;
  value: string;
};

export type SearchResultsProps = {
  searchResults: Character[];
  loading: boolean;
  currentPage: number;
  count: number | null;
  itemsLimit: number;
  changePage: (page: number) => void;
};
