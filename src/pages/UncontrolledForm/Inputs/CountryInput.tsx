import { MutableRefObject, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import '../UncontrolledForm.css';
interface CountryProps {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  countriesFilteredVisible: boolean;
  setCountriesFilteredVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function CountryInput(props: CountryProps) {
  const { inputRef, countriesFilteredVisible, setCountriesFilteredVisible } =
    props;

  const counriesAll = useSelector(
    (state: RootState) => state.countries.countries
  );
  const errorCountry = useSelector((state: RootState) => state.error.country);

  const [countriesFiltered, setCountriesFiltered] = useState<string[]>([]);

  const handleChange = () => {
    setCountriesFilteredVisible(true);
    setCountriesFiltered(
      counriesAll.filter((country) =>
        country
          .toLowerCase()
          .startsWith(inputRef.current?.value?.toLowerCase() || '')
      )
    );
  };

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="country" className="form__label">
        Country
      </label>
      <div className="country__container">
        <input
          type="text"
          id="country"
          ref={inputRef}
          onChange={handleChange}
          className="form__input"
        />
        {countriesFilteredVisible &&
          countriesFiltered.map((country) => (
            <label
              htmlFor="country"
              key={country}
              className="label__country"
              onClick={() => {
                if (inputRef.current) inputRef.current.value = country;
                setCountriesFiltered([]);
              }}
            >
              {country}
            </label>
          ))}
        <p className="form__error">{errorCountry ? errorCountry : ''}</p>
      </div>
    </fieldset>
  );
}

export default CountryInput;
