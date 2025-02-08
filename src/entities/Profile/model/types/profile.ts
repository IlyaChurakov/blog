import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ErrorTypes } from 'shared/lib/checkErrorType/types';

export interface Profile {
  username?: string;
  name?: string;
  surname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: ErrorTypes;
  readonly: boolean;
}
