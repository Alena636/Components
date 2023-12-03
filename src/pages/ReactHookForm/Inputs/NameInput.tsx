import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function NameInput(props: FormHookProps) {
  const { register, error } = props;

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="name" className="form__label">
        Name
      </label>
      <div>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="form__input"
        />
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default NameInput;
