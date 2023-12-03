import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function EmailInput(props: FormHookProps) {
  const { register, error } = props;

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="email" className="form__label">
        Email
      </label>
      <div>
        <input
          type="text"
          id="email"
          {...register('email')}
          className="form__input"
        />
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default EmailInput;
