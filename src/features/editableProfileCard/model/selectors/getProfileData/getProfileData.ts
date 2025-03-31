import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getProfileData = (state: StateSchema) => state.profile?.data;
