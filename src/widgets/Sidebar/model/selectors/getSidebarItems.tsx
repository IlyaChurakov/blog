import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { createSelector } from '@reduxjs/toolkit';
import { Home, Info, Notebook, User } from 'lucide-react';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      icon: <Home />,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      icon: <Info />,
      text: 'О сайте',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteArticles(),
        icon: <Notebook />,
        text: 'Статьи',
      },
      {
        path: getRouteProfile(userData?.id),
        icon: <User />,
        text: 'Профиль',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
