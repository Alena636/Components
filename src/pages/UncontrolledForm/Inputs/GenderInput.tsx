import { MutableRefObject } from 'react';

function GenderInput(
  props: Record<'genderRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { genderRef } = props;

  return (
    <fieldset>
      <label className="form__label">Gender</label>
      <div className="gender__container">
        <div>
          <label htmlFor="male" className="form__label">
            Male
          </label>
          <input
            type="radio"
            id="male"
            name="gender"
            ref={genderRef}
            value="male"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="female" className="form__label">
            Female
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            ref={genderRef}
            value="female"
          />
        </div>
      </div>
    </fieldset>
  );
}

export default GenderInput;
