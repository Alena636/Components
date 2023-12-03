import { useEffect, useState } from 'react';
import { FormHookPasswordsProps } from '../../../types/index';
import { showPasswordStrength } from '../../../utils/ShowPasswordStrength';
import emptyCircle from '../../../assets/emptyCircle.png';
import circle from '../../../assets/circle.png';
import closedEye from '../../../assets/closedeye.png';
import openEye from '../../../assets/openEye.png';
import '../ReactHookForm.css';
function PasswordInput(props: FormHookPasswordsProps) {
  const {
    register,
    watchPassword,
    error: { errorPassword, errorPasswordRepeat },
  } = props;

  const [strength, setStrength] = useState(0);
  const starsArr = new Array(4).fill(false).map((_, ind) => {
    if (ind < strength) return true;
    return false;
  });
  const [passwordType, setPasswordType] = useState('password');

  useEffect(() => {
    if (watchPassword)
      showPasswordStrength(watchPassword).then((strength) => {
        setStrength(strength);
      });
  }, [watchPassword]);

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
              {...register('password')}
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
                alt="password"
                className="password__icon"
              />
            </button>
          </div>
          <p className="form__error">{errorPassword ? errorPassword : ''}</p>
        </div>
        <div className="password__container">
          <label htmlFor="password-repeat" className="form__label">
            Repeat password
          </label>
          <div>
            <input
              type={passwordType}
              id="password-repeat"
              {...register('passwordRepeat')}
              className="form__input"
            />
            <p className="form__error">
              {errorPasswordRepeat ? errorPasswordRepeat : ''}
            </p>
          </div>
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
                    key={`star-${ind}`}
                    src={circle}
                    alt="circle"
                    className="strength__img"
                  />
                );
              return (
                <img
                  key={`star-${ind}`}
                  src={emptyCircle}
                  alt="empty_circle"
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
