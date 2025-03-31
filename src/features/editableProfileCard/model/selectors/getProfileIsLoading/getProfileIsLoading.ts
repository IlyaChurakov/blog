import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getProfileIsLoading = (state: StateSchema) =>
  state.profile?.isLoading ?? false;
