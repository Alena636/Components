import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/Redux/Store/Store';

function TermsInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorAccept = useSelector((state: RootState) => state.error.accept);

  return (
    <fieldset>
      <label htmlFor="accept" className="form__label">
        I agree to the terms and conditions
      </label>
      <div>
        <input type="checkbox" id="accept" ref={inputRef} />
        <p>{errorAccept ? errorAccept : ''}</p>
      </div>
    </fieldset>
  );
}

export default TermsInput;
