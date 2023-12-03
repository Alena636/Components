import { MutableRefObject, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/Redux/Store/Store';
import emptyCircle from '../../../assets/emptyCircle.png';
import circle from '../../../assets/circle.png';
import closedEye from '../../../assets/closedeye.png';
import openEye from '../../../assets/openEye.png';

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
    <fieldset>
      <div className="password__container">
        <div>
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <div className="password__input-container">
            <input type={passwordType} id="password" ref={passwordRef} />
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
              />
            </button>
            <p>{errorPassword ? errorPassword : ''}</p>
          </div>
        </div>
        <div className="password-repeat__container">
          <label htmlFor="password-repeat" className="form__label">
            Repeat password
          </label>
          <div>
            <input
              type={passwordType}
              id="password-repeat"
              ref={passwordRepeatRef}
              className="form_-input"
            />
            <p>{errorPasswordRepeat ? errorPasswordRepeat : ''}</p>
          </div>
        </div>
      </div>
      {strength > 0 ? (
        <div className="password__strength">
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
