import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Home, Info, Notebook, User } from 'lucide-react';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.articles,
        icon: <Notebook />,
        text: 'Статьи',
      },
      {
        path: RoutePath.profile + '/' + userData?.id,
        icon: <User />,
        text: 'Профиль',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
