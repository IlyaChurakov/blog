import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
