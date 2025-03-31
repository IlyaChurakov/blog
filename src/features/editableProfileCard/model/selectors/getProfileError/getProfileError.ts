import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getProfileError = (state: StateSchema) => state.profile?.error;
