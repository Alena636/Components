import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/Redux/Store/Store';

function ImgInput(
  props: Record<'inputRef', MutableRefObject<HTMLInputElement | null>>
) {
  const { inputRef } = props;
  const errorImage = useSelector((state: RootState) => state.error.image);

  return (
    <fieldset>
      <label htmlFor="image" className="form__label">
        Upload Picture
      </label>
      <div>
        <input type="file" id="image" ref={inputRef} />
        <p>{errorImage ? errorImage : ''}</p>
      </div>
    </fieldset>
  );
}

export default ImgInput;
