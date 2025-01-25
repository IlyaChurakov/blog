import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('ivan')),
    ).toEqual({ username: 'ivan' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('1234')),
    ).toEqual({ password: '1234' });
  });

  //   test('test set error', async () => {
  //     const state: DeepPartial<LoginSchema> = {
  //       isLoading: true,
  //     };

  //     const rejectedAction = loginByUsername.rejected(
  //       new Error('error'),
  //       'requestId',
  //       { username: 'admin', password: '1234' },
  //     );

  //     const newState = loginReducer(state as LoginSchema, rejectedAction);

  //     expect(newState).toEqual({
  //       isLoading: false, // Ожидается, что загрузка завершится
  //       error: 'error', // Ожидаемая ошибка
  //     });
  //   });

  test('test set isLoading', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };

    const pendingAction = loginByUsername.pending(
      'requestId', // уникальный идентификатор запроса
      { username: 'admin', password: '1234' }, // аргументы, переданные в thunk
    );

    const newState = loginReducer(state as LoginSchema, pendingAction);

    expect(newState).toEqual({
      isLoading: true, // Загрузка включена
      error: undefined, // Ошибок нет
    });
  });
});
