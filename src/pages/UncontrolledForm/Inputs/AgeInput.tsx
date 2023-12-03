import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import '../UncontrolledForm.css';
function AgeInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorAge = useSelector((state: RootState) => state.error.age);

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="age" className="form__label">
        Age
      </label>
      <div>
        <input type="text" id="age" ref={inputRef} className="form__input" />
        <p className="form__error">{errorAge ? errorAge : ''}</p>
      </div>
    </fieldset>
  );
}

export default AgeInput;
