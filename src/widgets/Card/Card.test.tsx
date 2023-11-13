import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Character } from '../../types';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Cards from './Card';
class LocalStorageMock {
  store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return index < keys.length ? keys[index] : null;
  }

  get length(): number {
    return Object.keys(this.store).length;
  }
}

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: new LocalStorageMock(),
  });
});
const mockCharacters: Character[] = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19 BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 'unknown',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9 BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/4/',
  },
];

test('handles click event on character link', () => {
  const { getAllByTestId } = render(
    <Router>
      <Cards characters={mockCharacters} />
    </Router>
  );

  const links = getAllByTestId('character-link');
  fireEvent.click(links[0]);

  expect(localStorage.setItem).toHaveBeenCalledWith(
    'searchUrl',
    expect.any(String)
  );
});
