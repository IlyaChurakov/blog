import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  login?: LoginSchema;
}
