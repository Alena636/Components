import { passwordValidationSchema } from './Validation/Validation';
import { ValidationError } from 'yup';
export async function showPasswordStrength(password: string): Promise<number> {
  const maxStrength = 4;
  try {
    await passwordValidationSchema.validate(
      {
        password,
      },
      { abortEarly: false }
    );
    return maxStrength;
  } catch (e) {
    if (e instanceof ValidationError) {
      return maxStrength - e.inner.length;
    }
    return 0;
  }
}
