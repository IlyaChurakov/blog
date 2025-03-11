import { Reducer } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/storeProvider/config/StateSchema';
import { useAppDispatch } from '../../../lib/hooks/useAppDispatch';

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
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    const entries = Object.entries(reducers);

    entries.forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(key as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        entries.forEach(([key, _]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
