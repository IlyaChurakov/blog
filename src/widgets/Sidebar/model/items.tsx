import { Home, Info, Notebook, User } from 'lucide-react';
import { ReactElement } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: ReactElement;
  authOnly?: boolean;
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
    path: RoutePath.articles,
    icon: <Notebook />,
    text: 'Статьи',
  },
  {
    path: RoutePath.profile,
    icon: <User />,
    text: 'Профиль',
    authOnly: true,
  },
];
