import { useState } from 'react';
import SearchForm from '../../widgets/SearchForm/SearchForm';
import CardList from '../../widgets/CardList/CardList';
import './Main.css';

export default function MainPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <div className="main__container">
      <h1 className="main__title">Star Wars: People</h1>
      <SearchForm onSubmit={updateSearchValue} />
      <CardList data={searchValue} />
    </div>
  );
}
