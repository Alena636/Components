import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function GenderInput(props: FormHookProps) {
  const { register } = props;
  return (
    <fieldset className="form__fieldset">
      <label className="form__label">Gender</label>
      <div className="gender__container">
        <div>
          <label htmlFor="male" className="form__label">
            Male
          </label>
          <input
            type="radio"
            id="male"
            defaultChecked
            {...register('gender')}
            value="male"
          />
        </div>
        <div>
          <label htmlFor="female" className="form__label">
            Female
          </label>
          <input
            type="radio"
            id="female"
            {...register('gender')}
            value="female"
          />
        </div>
      </div>
    </fieldset>
  );
}

export default GenderInput;
