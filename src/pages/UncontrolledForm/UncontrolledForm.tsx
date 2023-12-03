import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
import NameInput from './Inputs/NameInput';
import AgeInput from './Inputs/AgeInput';
import EmailInput from './Inputs/EmailInput';
import PasswordInput from './Inputs/PasswordInput';
import GenderInput from './Inputs/GenderInput';
import TermsInput from './Inputs/TermsInput';
import ImgInput from './Inputs/ImgInput';
import CountryInput from './Inputs/CountryInput';

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

  return (
    <>
      <header
        className="uncontrolled__header"
        onClick={() => setCountriesFilteredVisible(false)}
      >
        <Link
          to="/"
          className="form__link"
          onClick={() => {
            dispatch(removeValidationErrors());
          }}
        >
          Back to Main
        </Link>
      </header>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NameInput inputRef={nameRef} />
        <AgeInput inputRef={ageRef} />
        <EmailInput inputRef={emailRef} />
        <PasswordInput
          passwordRef={passwordRef}
          passwordRepeatRef={passwordRepeatRef}
          strength={passwordStrength}
        />
        <GenderInput genderRef={genderRef} />
        <TermsInput inputRef={acceptRef} />
        <ImgInput inputRef={imageRef} />
        <CountryInput
          inputRef={countryRef}
          countriesFilteredVisible={countriesFilteredVisible}
          setCountriesFilteredVisible={setCountriesFilteredVisible}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
