import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject>,
  navigate?: NavigateFunction,
) {
  const rootReducers: ReducersMapObject = {
    ...asyncReducers, // нужны для storybook
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers); // нужен для управления динамическими редюсерами

  // const extraArgument: ThunkExtraArg = {
  //   api: $api,
  //   navigate,
  // };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // @ts-expect-error fsdf
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
