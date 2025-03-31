import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getProfileReadonly = (state: StateSchema) =>
  state.profile?.readonly;
