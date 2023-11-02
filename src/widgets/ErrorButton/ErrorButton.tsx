import { useState } from 'react';
import './ErrorButton.css';

export default function ErrorButton(): JSX.Element {
  const [hasError, setHasError] = useState(false);

  const handleClick = (): void => {
    try {
      throw new Error("Error! It's an intentional error");
    } catch (error) {
      setHasError(true);
    }
  };

  if (hasError) {
    throw new Error("Error! It's an intentional error");
  }

  return (
    <button onClick={handleClick} className="error__btn">
      Error
    </button>
  );
}
