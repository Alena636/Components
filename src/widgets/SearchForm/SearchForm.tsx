import React, { useEffect, useState } from 'react';
import ErrorButton from '../ErrorButton/ErrorButton';
import './SearchForm.css';

type SearchFormProps = {
  children?: JSX.Element;
  onSubmit: (value: string) => void;
};

export default function SearchForm(props: SearchFormProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem('value', newValue.trim());
  };

  const handleClick = (e: React.FormEvent): void => {
    e.preventDefault();
    props.onSubmit(inputValue);
  };

  useEffect(() => {
    const saveToLocalStorage = (): void => {
      localStorage.setItem('value', inputValue);
    };

    window.addEventListener('beforeunload', saveToLocalStorage);
    const valueLocalStorage = localStorage.getItem('value');
    if (valueLocalStorage !== null) {
      setInputValue(valueLocalStorage);
    }

    return () => {
      window.removeEventListener('beforeunload', saveToLocalStorage);
    };
  }, []);

  return (
    <section className="search__container">
      <ErrorButton />
      <form className="search__form" onSubmit={handleClick}>
        <input
          className="search__input"
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
