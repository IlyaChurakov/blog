import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getLoginUsername = (state: StateSchema) =>
  state.login?.username ?? '';
