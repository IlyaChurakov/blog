import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getLoginError = (state: StateSchema) => state.login?.error;
