import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

export const { useFetchNotificationsQuery } = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchNotifications: builder.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});
