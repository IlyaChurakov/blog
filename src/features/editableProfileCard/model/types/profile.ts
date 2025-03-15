import { Profile } from 'entities/Profile';
import { ErrorTypes } from 'shared/lib/checkErrorType/types';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: ErrorTypes;
  readonly: boolean;
}
