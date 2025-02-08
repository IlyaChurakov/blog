import { ErrorTypes } from './types';

interface Error {
  validationError?: Record<string, string>;
  defaultError?: string;
}

export function checkErrorType(error?: ErrorTypes): Error {
  if (!error) return {};

  const isValidationError = !!error && typeof error === 'object';

  if (isValidationError) {
    return { validationError: error };
  } else {
    return { defaultError: error };
  }
}
