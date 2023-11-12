import { useState } from 'react';
import { ItemsLimit, SearchFormProps } from '../../types/index';
import './SearchForm.css';

const SearchForm: React.FC<SearchFormProps> = ({
  userInputString,
  setUserInputString,
  handleSearch,
  setItemsLimit,
  handleItemsPerPageChange,
}) => {
  const [error, setError] = useState<Error | null>(null);

  const throwError = () => {
    setError(new Error());
  };

  if (error) {
    throw new Error('Custom Error');
  }

  return (
    <section className="search__container">
      <button className="error__btn" onClick={throwError}>
        Error
      </button>
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          value={userInputString}
          onChange={(e) => setUserInputString(e.target.value)}
        ></input>
        <button className="search__btn" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="search__items-per-page">
        Items per page:
        <select
          className="search__select"
          onChange={(event) => {
            setItemsLimit(+event.target.value);
            handleItemsPerPageChange(event);
          }}
        >
          <option>{ItemsLimit.TenItemsPerPage}</option>
          <option>{ItemsLimit.FiveItemsPerPage}</option>
        </select>
      </div>
    </section>
  );
};

export default SearchForm;
