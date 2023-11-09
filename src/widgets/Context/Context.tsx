import { createContext } from 'react';

const value = localStorage.getItem('value') || '';

type ValueContextProp = [string, React.Dispatch<React.SetStateAction<string>>];
export const ValueContext = createContext<ValueContextProp>([
  value,
  () => null,
]);

export const CardsContext = createContext(null);
