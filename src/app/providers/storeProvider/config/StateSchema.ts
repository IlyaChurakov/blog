import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
