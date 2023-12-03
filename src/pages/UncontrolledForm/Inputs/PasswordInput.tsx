import { MutableRefObject, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import emptyCircle from '../../../assets/emptyCircle.png';
import circle from '../../../assets/circle.png';
import closedEye from '../../../assets/closedeye.png';
import openEye from '../../../assets/openEye.png';
import '../UncontrolledForm.css';
interface PasswordProps {
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  passwordRepeatRef: MutableRefObject<HTMLInputElement | null>;
  strength: number;
}

function PasswordInput(props: PasswordProps) {
  const { passwordRef, passwordRepeatRef, strength } = props;
  const errorPassword = useSelector((state: RootState) => state.error.password);
  const errorPasswordRepeat = useSelector(
    (state: RootState) => state.error.passwordRepeat
  );
  const starsArr = new Array(4).fill(false).map((_, ind) => {
    if (ind < strength) return true;
    return false;
  });
  const [passwordType, setPasswordType] = useState('password');

  return (
    <fieldset className="form__fieldset password">
      <div className="password__container">
        <label htmlFor="password" className="form__label">
          Password
        </label>
        <div className="password__input">
          <div className="password__input-container">
            <input
              type={passwordType}
              id="password"
              ref={passwordRef}
              className="form__input"
            />
            <button
              type="button"
              className="password__btn"
              onClick={() =>
                setPasswordType(
                  passwordType === 'password' ? 'text' : 'password'
                )
              }
            >
              <img
                src={passwordType === 'password' ? closedEye : openEye}
                alt="password-type"
                className="password__icon"
              />
            </button>
          </div>
          <p className="form__error password">
            {errorPassword ? errorPassword : ''}
          </p>
        </div>
      </div>
      <div className="password__container">
        <label htmlFor="password-repeat" className="form__label">
          Repeat password
        </label>
        <div>
          <input
            type={passwordType}
            id="password-repeat"
            ref={passwordRepeatRef}
            className="form__input"
          />
          <p className="form__error">
            {errorPasswordRepeat ? errorPasswordRepeat : ''}
          </p>
        </div>
      </div>
      {strength > 0 ? (
        <div className="form__label strength">
          Strength
          <div className="strength__container">
            {starsArr.map((el, ind) => {
              if (el)
                return (
                  <img
                    key={`circle-${ind}`}
                    src={circle}
                    alt="circle-full"
                    className="strength__img"
                  />
                );
              return (
                <img
                  key={`circle-${ind}`}
                  src={emptyCircle}
                  alt="circle-empty"
                  className="strength__img"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </fieldset>
  );
}

export default PasswordInput;
