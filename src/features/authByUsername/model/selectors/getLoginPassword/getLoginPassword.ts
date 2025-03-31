import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getLoginPassword = (state: StateSchema) =>
  state.login?.password ?? '';
