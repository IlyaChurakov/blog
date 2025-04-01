import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
