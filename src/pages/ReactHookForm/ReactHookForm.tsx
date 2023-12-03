import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validation } from '../../utils/Validation/Validation';
import { useDispatch } from 'react-redux';
import { Fields } from '../../types/index';
import './ReactHookForm.css';
import ConvertFileToBase64 from '../../utils/ConvertFileToBase64';
import { setForm, setNewFormAdded } from '../../app/Redux/FormSlice';
import NameInput from './Inputs/NameInput';
import AgeInput from './Inputs/AgeInput';
import EmailInput from './Inputs/EmailInput';
import PasswordInput from './Inputs/PasswordInput';
import GenderInput from './Inputs/GenderInput';
import TermsInput from './Inputs/TermsInput';
import ImgInput from './Inputs/ImgInput';
import CountryInput from './Inputs/CountryInput';

const HookForm: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validation),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countriesFilteredVisible, setCountriesFilteredVisible] =
    useState(false);

  const onSubmit = async (data: Fields) => {
    const { name, age, email, password, gender, image, country } = data;
    const image64 = image ? await ConvertFileToBase64(image[0]) : '';
    dispatch(
      setForm({
        name,
        age,
        email,
        password,
        gender,
        image: image64,
        country,
      })
    );
    navigate('/');
  };

  useEffect(() => {
    dispatch(setNewFormAdded(false));
  }, [dispatch]);

  return (
    <>
      <header
        className="hook__header"
        onClick={() => setCountriesFilteredVisible(false)}
      >
        <Link to="/" className="header__link">
          Back to Main
        </Link>
      </header>
      <h2 className="page__title">React Hook Form</h2>
      <form className="hook__form" onSubmit={handleSubmit(onSubmit)} action="">
        <NameInput register={register} error={errors.name?.message} />
        <AgeInput register={register} error={errors.age?.message} />
        <EmailInput register={register} error={errors.email?.message} />
        <PasswordInput
          register={register}
          error={{
            errorPassword: errors.password?.message,
            errorPasswordRepeat: errors.passwordRepeat?.message,
          }}
          watchPassword={watch('password')}
        />
        <GenderInput register={register} error={errors.gender?.message} />
        <TermsInput register={register} error={errors.accept?.message} />
        <ImgInput register={register} error={errors.image?.message} />
        <CountryInput
          register={register}
          error={errors.country?.message}
          countriesFilteredVisible={countriesFilteredVisible}
          setCountriesFilteredVisible={setCountriesFilteredVisible}
          watchCountry={watch('country')}
          setValue={setValue}
          trigger={trigger}
        />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default HookForm;
