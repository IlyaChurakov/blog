import {
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers, // нужны для storybook
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers); // нужен для управления динамическими редюсерами

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error fsdf
  store.reducerManager = reducerManager;

  return store;
}
