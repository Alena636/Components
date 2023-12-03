import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/Redux/Store/Store';
import '../UncontrolledForm.css';
function EmailInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorEmail = useSelector((state: RootState) => state.error.email);
  return (
    <fieldset className="form__fieldset">
      <label htmlFor="email" className="form__label">
        Email
      </label>
      <div>
        <input type="text" id="email" ref={inputRef} className="form__input" />
        <p className="form__error">{errorEmail ? errorEmail : ''}</p>
      </div>
    </fieldset>
  );
}

export default EmailInput;
