import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/storeProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const entries = Object.entries(reducers);

    entries.forEach(([key, reducer]: [StateSchemaKey, Reducer]) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        entries.forEach(([key, _]: [StateSchemaKey, Reducer]) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
