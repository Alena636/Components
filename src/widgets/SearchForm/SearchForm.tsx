import { useState } from 'react';
import { ItemsLimit } from '../../types/index';
import './SearchForm.css';

type SearchSectionProps = {
  userInputString: string;
  handleSearch: () => void;
  setUserInputString: React.Dispatch<React.SetStateAction<string>>;
  setItemsLimit: React.Dispatch<React.SetStateAction<number>>;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const SearchForm = (props: SearchSectionProps): JSX.Element => {
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
          value={props.userInputString}
          onChange={(e) => props.setUserInputString(e.target.value)}
        ></input>
        <button className="search__btn" onClick={props.handleSearch}>
          Search
        </button>
      </form>
      <div className="search__items-per-page">
        Items per page:
        <select
          className="search__select"
          onChange={(event) => {
            props.setItemsLimit(+event.target.value);
            props.handleItemsPerPageChange(event);
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
