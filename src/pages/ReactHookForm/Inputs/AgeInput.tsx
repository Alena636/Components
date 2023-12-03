import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function AgeInput(props: FormHookProps) {
  const { register, error } = props;

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="age" className="form__label">
        Age
      </label>
      <div>
        <input
          type="text"
          id="age"
          {...register('age')}
          className="form__input"
        />
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default AgeInput;
