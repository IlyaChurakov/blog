import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
