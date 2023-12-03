import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function TermsInput(props: FormHookProps) {
  const { register, error } = props;

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="accept" className="form__label">
        I agree to the terms and conditions
      </label>
      <div>
        <input type="checkbox" id="accept" {...register('accept')} />
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default TermsInput;
