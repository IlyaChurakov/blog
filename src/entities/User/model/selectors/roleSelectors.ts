import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => !!roles?.includes('ADMIN'),
);
