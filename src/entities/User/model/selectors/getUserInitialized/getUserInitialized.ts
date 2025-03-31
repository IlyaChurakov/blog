import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getUserInitialized = (state: StateSchema) =>
  state.user.initialized;
