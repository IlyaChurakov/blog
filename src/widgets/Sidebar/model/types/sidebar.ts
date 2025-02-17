import { ReactElement } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: ReactElement;
  authOnly?: boolean;
}
