import { Profile } from '../../types/profile';
import * as yup from 'yup';

const profileSchema = yup.object({
  name: yup.string().required('Имя обязательно'),
  age: yup
    .number()
    .integer()
    .typeError('Поле должно быть числом')
    .min(18, 'Возрастное ограничение 18+')
    .required('Возраст обязателен'),
});

export const validateProfileData = (profile: Profile) => {
  try {
    profileSchema.validateSync(profile, { abortEarly: false });
  } catch (e) {
    const errors: Record<string, string> = {};
    const err = e as yup.ValidationError;

    err.inner.forEach((error) => {
      if (error.path) {
        errors[error.path] = error.message;
      }
    });

    return errors;
  }
};
