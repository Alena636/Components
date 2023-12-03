import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/Redux/Store/Store';
import '../UncontrolledForm.css';
function TermsInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorAccept = useSelector((state: RootState) => state.error.accept);

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="accept" className="form__label">
        I agree to the terms and conditions
      </label>
      <div>
        <input type="checkbox" id="accept" ref={inputRef} />
        <p className="form__error">{errorAccept ? errorAccept : ''}</p>
      </div>
    </fieldset>
  );
}

export default TermsInput;
