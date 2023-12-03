import { FormHookProps } from '../../../types/index';
import '../ReactHookForm.css';
function ImgInput(props: FormHookProps) {
  const { register, error } = props;

  return (
    <fieldset className="form__fieldset">
      <label htmlFor="image" className="form__label">
        Image
      </label>
      <div>
        <input type="file" id="image" {...register('image')} />
        <p className="form__error">{error ? error : ''}</p>
      </div>
    </fieldset>
  );
}

export default ImgInput;
