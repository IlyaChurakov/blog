import { Profile } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProdileData', () => {
  test('valid', () => {
    const profile: Profile = {
      name: 'john doe',
      age: 20,
    };

    expect(validateProfileData(profile)).toBeUndefined();
  });

  test('no name', () => {
    const profile: Profile = {
      age: 20,
    };

    expect(validateProfileData(profile)).toEqual({ name: 'Имя обязательно' });
  });

  test('no age', () => {
    const profile: Profile = {
      name: 'john doe',
    };

    expect(validateProfileData(profile)).toEqual({
      age: 'Возраст обязателен',
    });
  });

  test('age less then 18', () => {
    const profile: Profile = {
      name: 'john doe',
      age: 15,
    };

    expect(validateProfileData(profile)).toEqual({
      age: 'Возрастное ограничение 18+',
    });
  });

  test('age not number', () => {
    const profile: Profile = {
      name: 'john doe',
      age: 'not number' as unknown as number,
    };

    expect(validateProfileData(profile)).toEqual({
      age: 'Поле должно быть числом',
    });
  });

  test('Several errors in at the same time', () => {
    const profile: Profile = { age: 'не число' as unknown as number };

    expect(validateProfileData(profile)).toEqual({
      name: 'Имя обязательно',
      age: 'Поле должно быть числом',
    });
  });
});
