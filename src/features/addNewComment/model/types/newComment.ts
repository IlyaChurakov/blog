import { ErrorTypes } from 'shared/lib/checkErrorType/types';

export interface NewCommentSchema {
  text: string;
  isLoading: boolean;
  error?: ErrorTypes;
}
