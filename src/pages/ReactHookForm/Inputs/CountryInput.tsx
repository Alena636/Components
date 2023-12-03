import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import { Register, SetValue, Trigger } from '../../../types/index';
import '../ReactHookForm.css';

interface CountryProps {
  countriesFilteredVisible: boolean;
  setCountriesFilteredVisible: React.Dispatch<React.SetStateAction<boolean>>;
  register: Register;
  watchCountry: string | undefined;
  setValue: SetValue;
  trigger: Trigger;
  error: string | undefined;
}

function CountryInput(props: CountryProps) {
  const {
    register,
    watchCountry,
    setValue,
    error,
    countriesFilteredVisible,
    setCountriesFilteredVisible,
    trigger,
  } = props;

  const counriesAll = useSelector(
    (state: RootState) => state.countries.countries
  );

  const countryRegister = register('country');
  const [countriesFiltered, setCountriesFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountriesFilteredVisible(true);
    setCountriesFiltered(
      counriesAll.filter((country) =>
        country.toLowerCase().startsWith(e.target.value?.toLowerCase() || '')
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
          {...countryRegister}
          onChange={(e) => {
            countryRegister.onChange(e);
            handleChange(e);
          }}
          className="form__input"
        />
        {countriesFilteredVisible &&
          watchCountry &&
          countriesFiltered.map((country) => (
            <label
              htmlFor="country"
              key={country}
              className="label__country"
              onClick={() => {
                setValue('country', country);
                setCountriesFiltered([]);
                trigger('country');
              }}
            >
              {country}
            </label>
          ))}
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default CountryInput;
