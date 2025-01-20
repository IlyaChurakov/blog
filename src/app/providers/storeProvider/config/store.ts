import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';

export function createReduxStore(initialState?: StateSchema) {
  const reducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: reducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
