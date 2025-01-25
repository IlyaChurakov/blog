import { Home, Info, User } from 'lucide-react';
import { ReactElement } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: ReactElement;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: <Home />,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    icon: <Info />,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    icon: <User />,
    text: 'Профиль',
  },
];
