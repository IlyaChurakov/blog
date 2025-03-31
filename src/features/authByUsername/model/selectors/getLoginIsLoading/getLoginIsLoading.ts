import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getLoginIsLoading = (state: StateSchema) =>
  state.login?.isLoading ?? false;
