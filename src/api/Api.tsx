import { Params } from 'react-router';
import { Character } from '../widgets/Card/Card';
import { SearchPeopleResponse } from '../pages/Main/Main';

export async function getCharacter(
  props: Params<string>
): Promise<Character | null> {
  const { id } = props;

  try {
    const resp = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}

export async function searchCharacters(
  searchString?: string,
  page?: number
): Promise<SearchPeopleResponse | null> {
  try {
    const query = buildQueryString(searchString, page);

    const resp = await fetch(`https://swapi.dev/api/people${query}`);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}

const buildQueryString = (searchString?: string, page?: number): string => {
  const query: string[] = [];

  if (searchString) {
    query.push(`search=${searchString}`);
  }

  if (page) {
    query.push(`page=${page.toString()}`);
  }

  const result = query.join('&');

  return result ? `/?${result}` : '';
};
