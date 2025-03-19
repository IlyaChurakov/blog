import { memo } from 'react';
import Loader from 'shared/ui/loader/ui/Loader';
import { VStack } from 'shared/ui/stack';
import { Text, TextColors } from 'shared/ui/text/Text';
import { useFetchNotificationsQuery } from '../../../api/notificationApi';
import { NotificationItem } from '../../NotificationItem/ui/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data, isLoading, error } = useFetchNotificationsQuery(null, {
    pollingInterval: 1000,
  });

  return (
    <VStack justify="start" className={className}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Text text="Ошибка" color={TextColors.ERROR} />
      ) : !data?.length ? (
        <Text text="Уведомлений нет" color={TextColors.ACCENT} />
      ) : (
        data.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))
      )}
    </VStack>
  );
});
