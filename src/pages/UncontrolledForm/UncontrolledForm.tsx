import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UncontrolledForm.css';
import { validation } from '../../utils/Validation/Validation';
import {
  removeValidationErrors,
  setValidationErrors,
} from '../../app/Redux/ErrorSlice';
import ConvertFileToBase64 from '../../utils/ConvertFileToBase64';
import { setForm, setNewFormAdded } from '../../app/Redux/FormSlice';
import { ValidationError } from 'yup';
import { showPasswordStrength } from '../../utils/ShowPasswordStrength';
import { RootState } from '../../app/Redux/Store/Store';

const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [countriesFilteredVisible, setCountriesFilteredVisible] =
    useState(false);

  const handleSubmit = async () => {
    try {
      await validation.validate(
        {
          name: nameRef.current?.value[0],
          age: Number(ageRef.current?.value),
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          passwordRepeat: passwordRepeatRef.current?.value,
          accept: acceptRef.current?.checked,
          gender: genderRef.current?.value,
          image: imageRef.current?.files,
          country: countryRef.current?.value,
        },
        { abortEarly: false }
      );
      dispatch(removeValidationErrors());

      const image64 =
        imageRef.current && imageRef.current.files
          ? await ConvertFileToBase64(imageRef.current.files[0])
          : '';

      dispatch(
        setForm({
          name: nameRef.current?.value[0],
          age: Number(ageRef.current?.value),
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          gender: genderRef.current?.value,
          image: image64,
          country: countryRef.current?.value,
        })
      );
      setTimeout(() => navigate('/'), 1000);
    } catch (e: unknown) {
      if (e instanceof ValidationError) {
        dispatch(setValidationErrors(e.inner));
      }
    } finally {
      showPasswordStrength(passwordRef.current?.value || '').then(
        (strength) => {
          setPasswordStrength(strength);
        }
      );
    }
  };

  useEffect(() => {
    dispatch(setNewFormAdded(false));
  }, [dispatch]);

  const errorName = useSelector((state: RootState) => state.error.name);
  const errorAge = useSelector((state: RootState) => state.error.age);
  const errorEmail = useSelector((state: RootState) => state.error.email);
  const errorPassword = useSelector((state: RootState) => state.error.password);
  const errorPasswordRepeat = useSelector(
    (state: RootState) => state.error.passwordRepeat
  );

  const errorAccept = useSelector((state: RootState) => state.error.accept);
  const errorImage = useSelector((state: RootState) => state.error.image);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {/* <label className="form__label" htmlFor="name">
        Name
        <input type="text" id="name" className="form__input" ref={nameRef} />
        <p className="form__error">{errorName ? errorName : ''}</p>
      </label> */}
      {/* <label className="form__label" htmlFor="age">
        Age
        <input type="text" id="age" className="form__input" ref={ageRef} />
        <p className="form__error">{errorAge? errorAge : ''}</p>
      </label> */}
      {/* <label className="form__label" htmlFor="email">
        Email
        <input type="email" id="email" className="form__input" ref={emailRef} />
        <p className="form__error">{errorEmail? errorEmail : ''}</p>
      </label> */}
      {/* <label className="form__label" htmlFor="password">
        Password
        <input type="password" id="password" className="form__input" ref={passwordRef} />
        <p className="form__error">{errorPassword? errorPassword : ''}</p>
      </label>
      <label className="form__label" htmlFor="repeatPassword">
        Repeat password
        <input type="password" id="repeatPassword" className="form__input" ref={passwordRepeatRef} />
        <p className="form__error">{errorPasswordRepeat? errorPasswordRepeat : ''}</p>
      </label> */}
      {/* <div className="form__gender">
        <p className="gender__title">Gender</p>
        <label className="form__label gender" htmlFor="male">
          Male
          <input type="radio" id="male" name="gender" ref={genderRef} defaultChecked />
        </label>
        <label className="form__label gender" htmlFor="female">
          Female
          <input type="radio" id="female" name="gender" ref={genderRef} />
        </label>
      </div> */}
      {/* <label className="form__label" htmlFor="terms">
        <input type="checkbox" name="terms" value="agree" id="terms" ref={acceptRef} />I agree
        to the terms and conditions
        <p className="form__error">{errorAccept? errorAccept : ''}</p>
      </label> */}
      {/* <label className="form__label" htmlFor="img">
        Upload Picture
        <input type="file" accept=".png, .jpeg" id="img" ref={imageRef} />
        <p className="form__error">{errorImage? errorImage : ''}</p>
      </label> */}
      {/* <label className="form__label" htmlFor="country">
        Country
        <input type="text" id="country" className="form__input" />
      </label> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
