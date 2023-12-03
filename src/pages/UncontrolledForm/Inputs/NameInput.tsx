import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import '../UncontrolledForm.css';

function NameInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorName = useSelector((state: RootState) => state.error.name);

  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="name">
        Name
      </label>
      <div className="input__container">
        <input type="text" id="name" ref={inputRef} className="form__input" />
        <p className="form__error">{errorName ? errorName : ''}</p>
      </div>
    </fieldset>
  );
}

export default NameInput;
