export type UserRole = 'ADMIN' | 'USER';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  initialized: boolean;
}
